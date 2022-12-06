package service

import (
	"context"
	"encoding/json"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/gogo/protobuf/proto"
	logging "github.com/ipfs/go-log/v2"
	coreiface "github.com/ipfs/interface-go-ipfs-core"
	"github.com/ipfs/kubo/config"
	"github.com/ipfs/kubo/core/box/ds"
	"github.com/ipfs/kubo/core/box/pb"
	"github.com/ipfs/kubo/repo/fsrepo"
	"github.com/jinzhu/gorm"
	"github.com/klauspost/cpuid/v2"
	"github.com/libp2p/go-libp2p-core/network"
	"github.com/libp2p/go-libp2p/core/host"
	"net/http"
	"net/url"
	"os"
	"sync"
	"sync/atomic"
	"time"
)

var log = logging.Logger("service")

type HttpServer struct {
	httpServer   *http.Server
	httpHost     string
	p2pHost      host.Host
	coreApi      coreiface.CoreAPI
	messenger    pb.Messenger
	store        *ds.DbStore
	SignKey      string
	JwtKey       string
	TempDir      string
	AvatarDir    string
	dirSizeDirty int32
	userTokenM   sync.Map
	tokenUserM   sync.Map
	fileShare    int32
	wg           sync.WaitGroup
	ctx          context.Context
	canceler     context.CancelFunc
	cfg          *config.Config
	lock         sync.Mutex
	rootPath     string
	syncFile     int32
}

func init() {
	logging.SetLogLevel("service", "info")
}

func (s *HttpServer) Init(coreApi coreiface.CoreAPI) {
	s.coreApi = coreApi
}

func NewHttpServer(cfg *config.Config, p2pHost host.Host) *HttpServer {
	repoPath, err := fsrepo.BestKnownPath()
	if err != nil {
		panic(err.Error())
	}
	initConfigBox()
	v := url.Values{}
	v.Set(`cache`, `shared`)
	v.Set(`mode`, `rwc`)
	u := url.URL{
		Scheme:   `file`,
		Opaque:   url.PathEscape(repoPath + "/box.db"),
		RawQuery: v.Encode(),
	}
	db, err := gorm.Open("sqlite3", u.String())
	db.DB().SetMaxOpenConns(0)
	//db, err := gorm.Open("sqlite3", repoPath+"/box.db")
	if err != nil {
		panic(err.Error())
	}

	db.SingularTable(true)
	dbStore := ds.NewDbStore(db)
	engine := gin.Default()
	gin.SetMode(gin.ReleaseMode) //日志模式
	ctx, canceler := context.WithCancel(context.Background())
	server := &HttpServer{
		httpServer: &http.Server{Addr: cfg.Http.ListenAddress, Handler: engine},
		p2pHost:    p2pHost,
		httpHost:   cfg.Http.ListenAddress,
		messenger:  pb.NewBoxMessenger(ctx, p2pHost),
		store:      dbStore,
		SignKey:    cfg.Box.SignKey,
		JwtKey:     cfg.Box.JwtKey,
		TempDir:    repoPath + "/temp",
		AvatarDir:  repoPath + "/avatar",
		canceler:   canceler,
		ctx:        ctx,
		cfg:        cfg,
		rootPath:   repoPath,
	}
	log.Infof("peer: %v", p2pHost.ID().String())
	log.Infof("CPUInfo %v", cpuid.CPU.BrandName)
	server.setCors(engine)
	server.initRoute(engine)
	server.initP2PRouting() //设置p2p 协议
	os.MkdirAll(server.TempDir, 0777)
	os.MkdirAll(server.AvatarDir, 0777)
	//备份目录
	//u, err := user.Current()
	//if err != nil {
	//	log.Warn(err.Error())
	//} else {
	//	_, err := exec_shell("cp -a " + repoPath + " " + u.HomeDir)
	//	if err != nil {
	//		log.Warnf("has backup %v", err.Error())
	//	}
	//}
	return server
}

func (s *HttpServer) Run() {
	//s.wg.Add(1)
	go func() {
		//defer s.wg.Done()
		err := s.httpServer.ListenAndServe()
		if err != nil {
			log.Infof("%v", err.Error())
		}
	}()
	go func() {
		ticker := time.NewTicker(time.Second * 30)
		for {
			select {
			case <-ticker.C:
				peerAddress, _ := s.cfg.BootstrapPeers()
				for _, val := range peerAddress {
					if val.ID == s.p2pHost.ID() {
						continue
					}
					if network.Connected != s.p2pHost.Network().Connectedness(val.ID) {
						err := s.p2pHost.Connect(s.ctx, val)
						if err != nil {
							log.Errorf("BootstrapPeers connect error :%v", val)
						} else {
							log.Infof("BootstrapPeers connect successful:%v", val)
						}
					}
				}
			}
		}
	}()

	//定时任务
	s.runUpdateDirSize()                        //更新文件大小
	s.runFileShare()                            //修改共享状态
	s.runUpdateFile(context.Background())       //查询文件是否进入ipfs，并删除7天前的数据
	s.runDeleteRecycleCid(context.Background()) //删除回收站数据
	//s.runSetDataToFileCoin(context.Background())
	//s.runUploadToFileCoin(context.Background()) //上传文件到filecoin
	//s.runGetCidToFileCoin(context.Background()) //获取文件在filecoin中的piece_cid

	go func() {
		ticker := time.NewTicker(time.Minute * 10)
		for {
			select {
			case <-ticker.C:
				s.updateBootstrap()
			}
		}
	}()
}

func (s *HttpServer) Shutdown() {
	err := s.httpServer.Shutdown(context.Background())
	if err != nil {
		log.Errorf("%v", err.Error())
	}
	//s.wg.Wait()
}

func (s *HttpServer) initP2PRouting() {
	s.messenger.SetMessageHandler(pb.ProtocolRelay, s.RelayRespone)
}

func (s *HttpServer) initRoute(r gin.IRouter) {
	cfgBox, err := GetConfig()
	if err != nil {
		log.Errorf("config error %v", err)
		panic(err)
	}
	api := r.Group("/v1")
	if cfgBox.IsGateWay == true {
		api.POST("/*relay", s.relayRequset)
		return
	}
	//scan
	api.POST(string(pb.ProtocolQrcodeScan), s.ScanQrcode_http)
	api.POST(string(pb.ProtocolQrcodeGetToken), s.GetTokenByQrcode_http)
	// user
	api.POST(string(pb.ProtocolPeerAddress), s.GetBoxAddress_http)
	api.POST(string(pb.ProtocolDeviceState), s.GetDeviceState_http)
	api.POST(string(pb.ProtocolActivate), s.ActivateDevice_http)
	api.POST(string(pb.ProtocolLogin), s.Login_http)
	api.POST(string(pb.ProtocolAddUser), s.AddUser_http)
	api.POST(string(pb.ProtocolUserInfo), s.GetUserInfo_http)
	api.POST(string(pb.ProtocolUserList), s.GetUserList_http)
	api.POST(string(pb.ProtocolGetUserAvatar), s.GetUserAvatar_http)
	api.POST(string(pb.ProtocolUpdateUserAvatar), s.UpdateUserAvatar_http)
	api.POST(string(pb.ProtocolUpdatePass), s.UpdatePassword_http)
	api.POST(string(pb.ProtocolUserRename), s.UserRename_http)
	api.POST(string(pb.ProtocolResetPass), s.ResetPassword_http)
	api.POST(string(pb.ProtocolUserEnable), s.EnableUser_http)
	api.POST(string(pb.ProtocolUserDelete), s.DeleteUser_http)
	api.POST(string(pb.ProtocolUserChangeSpace), s.ChangeSpace_http)
	api.POST(string(pb.ProtocolForgetPass), s.ForgetPass_http)
	//file
	api.POST(string(pb.ProtocolNewFolder), s.NewFolder_http)
	api.POST(string(pb.ProtocolUploadFile), s.UploadFile_http)
	api.POST(string(pb.ProtocolDownloadFile), s.DownloadFile_http)
	api.POST(string(pb.ProtocolFileList), s.GetFileList_http, s.setDirSizeDirty)
	api.POST(string(pb.ProtocolFileRename), s.FileRename_http)
	api.POST(string(pb.ProtocolFileStar), s.FileStar_http)
	api.POST(string(pb.ProtocolFileUnstar), s.FileUnstar_http)
	api.POST(string(pb.ProtocolFileCopy), s.FileCopy_http)
	api.POST(string(pb.ProtocolFileMove), s.FileMove_http)
	api.POST(string(pb.ProtocolFileDelete), s.FileDelete_http)
	api.POST(string(pb.ProtocolFileShare), s.FileShare_http)
	api.POST(string(pb.ProtocolFileUnShare), s.FileUnShare_http)
	api.POST(string(pb.ProtocolFileCloseShare), s.FileCloseShare_http)
	api.POST(string(pb.ProtocolFileUserShareCount), s.GetUserShareCount_http, s.setFileShare)
	api.POST(string(pb.ProtocolFileShareList), s.GetShareList_http)
	api.POST(string(pb.ProtocolFileEditShare), s.EditShare_http)
	api.POST(string(pb.ProtocolAppointFileList), s.GetFileTree_http)
	api.POST(string(pb.ProtocolSearchFileMd5), s.SearchFileMd5_http)
	api.POST(string(pb.ProtocolFileRecord), s.FileRecord_http)
	api.POST(string(pb.ProtocolFileBackupList), s.GetFileBackupList_http)

	//recycle bin
	api.POST(string(pb.ProtocolRecycleList), s.RecycleList_http)
	api.POST(string(pb.ProtocolRecycleDelete), s.RecycleDelete_http)
	api.POST(string(pb.ProtocolRecycleRestore), s.RecycleRestore_http)

	//address book
	api.POST(string(pb.ProtocolAddressBookBackup), s.AddressbookBackup_http)
	api.POST(string(pb.ProtocolAddressBookDelete), s.AddressbookDelete_http)
	api.POST(string(pb.ProtocolAddressBookList), s.AddressbookList_http)
	api.POST(string(pb.ProtocolAddressBookDeleteAll), s.AddressbookDeleteAll_http)
	api.POST(string(pb.ProtocolAppointAddressList), s.AppointAddressList_http)

	//backups
	api.POST(string(pb.ProtocolBackupsList), s.BackupsList_http)
	api.POST(string(pb.ProtocolBackupsAdd), s.BackupsAdd_http)

	//sync
	api.POST(string(pb.ProtocolSyncList), s.SyncList_http)
	api.POST(string(pb.ProtocolSyncAdd), s.SyncAdd_http)
	api.POST(string(pb.ProtocolSyncEdit), s.SyncEdit_http)
	api.POST(string(pb.ProtocolSyncDel), s.SyncDel_http)

	//log
	api.POST(string(pb.ProtocolFileLogList), s.FileLogList_http)

	//update
	api.POST(string(pb.ProtocolBoxUpdate), s.Update_http)
	api.POST(string(pb.ProtocolDeviceInfo), s.GetVersionSN_http)

	api.POST(string(pb.ProtocolDiskCount), s.GetDiskCount_http)

	api.POST(string(pb.ProtocolWalletAdd), s.CreateWalletAddress)
	api.POST(string(pb.ProtocolWalletAddress), s.WalletAddressList)
	api.POST(string(pb.ProtocolWalletKey), s.GetWalletKey)
	api.POST(string(pb.ProtocolSyncFil), s.SyncFil_http)
	api.POST(string(pb.ProtocolCidBackupsList), s.CidBackupsList_http)
	api.POST(string(pb.ProtocolBackupsCount), s.GetBackupsCount_http)
}

func (s *HttpServer) setCors(r gin.IRouter) {
	corsCfg := cors.Config{
		AllowAllOrigins: true,
		AllowMethods:    []string{"GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"},
		AllowHeaders: []string{"Origin", "Access-Control-Allow-Origin", "Accept",
			"Content-Type", "Content-Length", "Accept-Encoding", "X-CSRF-Token", "Authorization", "X-Requested-With", "PEER_ID", "PROTOCOL"},
		ExposeHeaders:    []string{"Content-Length", "Access-Control-Allow-Origin"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}
	r.Use(cors.New(corsCfg))
}

func respondProto(c *gin.Context, msg proto.Message) {
	d, _ := json.Marshal(msg)
	if len(d) <= 1000 {
		log.Infof("resp: %v", string(d))
	} else {
		log.Infof("resp: %v", string(d[:1000]))
	}
	if c.ContentType() == "application/x-protobuf" {
		c.ProtoBuf(http.StatusOK, msg)
	} else {
		c.JSON(http.StatusOK, msg)
	}
}

func (s *HttpServer) setDirSizeDirty(c *gin.Context) {
	log.Infof("setDirSizeDirty: %v", atomic.LoadInt32(&s.dirSizeDirty))
	if atomic.LoadInt32(&s.dirSizeDirty) == 0 {
		atomic.StoreInt32(&s.dirSizeDirty, 1)
	}
}

func (s *HttpServer) setFileShare(c *gin.Context) {
	log.Info("setFileShare")
	if atomic.LoadInt32(&s.fileShare) == 0 {
		atomic.StoreInt32(&s.fileShare, 1)
	}
}
