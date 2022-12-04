package service

import (
	"encoding/base64"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/gogo/protobuf/proto"
	"github.com/ipfs/go-ipfs/core/box/model"
	"github.com/ipfs/go-ipfs/core/box/pb"
	"github.com/ipfs/go-ipfs/pkg/disk"
	"github.com/ipfs/go-ipfs/pkg/xfile"
	"github.com/ipfs/go-ipfs/repo/fsrepo"
	"github.com/jinzhu/gorm"
	"github.com/libp2p/go-libp2p-core/protocol"
	"github.com/liyue201/golib/xhash"
	"io/ioutil"
	"os"
	"strconv"
	"sync/atomic"
	"time"
)

type UserData struct {
	Id        int   `json:"id"`
	Role      int   `json:"role"`
	ExpiredAt int64 `json:"expired_at"`
}

func sign(req *pb.ActivateReq, secretKey string) string {
	data := req.PeerId + req.Name + req.Password + req.RandNonce + secretKey
	return xhash.Md5([]byte(data))
}
func signPass(req *pb.ForgetPassReq, secretKey string) string {
	data := req.PeerId + secretKey
	return xhash.Md5([]byte(data))
}

func (s *HttpServer) getAvatarData(id int) ([]byte, pb.Code) {
	fileName := s.AvatarDir + "/" + fmt.Sprintf("%d.jpg", id)
	if xfile.PathExists(fileName) {
		data, err := ioutil.ReadFile(fileName)
		if err != nil {
			log.Errorf("failed to getDefaultAvatar: %v", err)
			return nil, pb.Code_IoError
		}
		return data, pb.Code_Success
	}
	//region 默认头像
	data, err := base64.StdEncoding.DecodeString("iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAA+VBMVEUAAAD6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vrLy8v6+vr6+vr6+vr6+vro6Ojt7e36+vr6+vr6+vr6+vrNzc36+vr6+vr6+vr6+vrNzc36+vrOzs76+vrQ0NDw8PD6+vrMzMz6+vrMzMz9/f3R0dHMzMzLy8v6+vr////5+fni4uLS0tL6+vrj4+P6+vr6+vr6+vrPz8/6+vr6+vr39/fMzMz5+fn////KysrNzc3Ly8vIyMjExMT8/Pz7+/u/v7/CwsL+/v7AwMDv7+/m5ubR0dHHx8fGxsbp6eni4uLf39/x8fHr6+vW1tb09PTz8/Pt7e3b29vT09Mr9CCkAAAANHRSTlMAA++9suvf19OkjVgoGxkS8trLua2Yk4aAfXBXS0kxCvLcz8K9vLqtoaGfknp3amhRTkg4LYs55gAAAa5JREFUOMttkedi2zAMhGHH24mdvUf33qUIktrDkmeS9v0fpqK5aieffkjkHQ8ABY7G9eDooN3u7JwMx/CUvbMOtTRPd7f1y/16nxjq77MN+a6lVKofaTncc/q4u9ZtgrI0bZlGV8kuQb2aI1C0qD1HEVNqc3pKH9ruKNLHaR6iXZ+vCzTNOsKCV0E5WaKJpLLRb+78n7jyPBFkMzRbpwDQpbp/nMWehLNsaRz7d7BrCxCv9JQjmISmyDV810MRnAbcUwh/kRLFAE5MAhaJZ6geTY0jaOlb2UzITUIPdogmJMy3PUSm8EtpoLqJeczXuoinSDQH8J4YonAVy4wqnqP5MeQQBjaBhOmcBUnFC6lrWjAkDsQoXy4QQ0JMwjmM3E2HDwtCI3qf36Pt4TeYMVIsJsxnEp+tcl2lAwC/VDr9mwVMIViSzDCS25dQ05M6YQn3LJypSdoNabit+4+E0h1ZgYT8gDVfKK4ypTv84CH9CJoPs8zbhieT12D5FPt821G+bYDja1luOoT/GTa4feMz8Z/+6ga2uem/qC1CSPndFTzH+OdF//i4f3E1Asc/5Iel+IbruHcAAAAASUVORK5CYII=")
	//endregion
	if err != nil {
		log.Errorf("failed to getDefaultAvatar: %v", err)
		return nil, pb.Code_IoError
	}
	return data, pb.Code_Success
}

func (s *HttpServer) GetDeviceState_http(c *gin.Context) {
	lock.Lock()
	defer lock.Unlock()
	protoc := protocol.ID(c.Request.Header.Get("PROTOCOL"))
	peerId := c.Request.Header.Get("PEER_ID")
	resp := &pb.DeviceStateResp{
		Code: pb.Code_Success,
	}
	body, err := ioutil.ReadAll(c.Request.Body)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	req := &pb.DeviceStateReq{}
	err = proto.UnmarshalMerge(body, req)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	log.Infof("ContentType: %v", c.ContentType())
	log.Infof("PROTOCOL: %v", protoc)
	log.Infof("PEER_ID: %v", peerId)

	admin, err := s.store.GetUserById(1)
	if err != nil {
		if err == gorm.ErrRecordNotFound {
			log.Errorf("failed to get user count: %v", err)
		} else {
			log.Errorf("failed to get user count: %v", err)
		}
		resp.Code = pb.Code_Success
		resp.State = model.DeviceUnActivated
		respondProto(c, resp)
		return
	}

	resp.State = model.DeviceActivated
	resp.AdminName = admin.Name
	data, code := s.getAvatarData(1)
	if code != pb.Code_Success {
		resp.Code = code
		respondProto(c, resp)
		return
	}
	resp.AdminAvatar = data
	respondProto(c, resp)
	return
}

//电脑端扫码登陆
type QRCodeInfo struct {
	CodeStr string
	Token   string
	peerId  string
	Expired int64
}

//全局缓存电脑端扫码的随机字符串
var QRCodeInfoMap = make(map[string]QRCodeInfo)

func (s *HttpServer) ScanQrcode_http(c *gin.Context) {
	protoc := protocol.ID(c.Request.Header.Get("PROTOCOL"))
	peerId := c.Request.Header.Get("PEER_ID")
	resp := &pb.CommonResp{
		Code: pb.Code_Success,
	}
	body, err := ioutil.ReadAll(c.Request.Body)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	req := &pb.ScanQrcodeReq{}
	err = proto.UnmarshalMerge(body, req)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	log.Infof("ContentType: %v", c.ContentType())
	log.Infof("PROTOCOL: %v", protoc)
	log.Infof("PEER_ID: %v", peerId)

	//clear QRCodeInfoMap
	for k, v := range QRCodeInfoMap {
		if time.Now().Unix() > v.Expired {
			delete(QRCodeInfoMap, k) //清除登陆信息
		}
	}
	qrCodeinfo := QRCodeInfo{
		CodeStr: req.Qrcode,
		Token:   req.Token,
		peerId:  peerId,
		Expired: time.Now().Add(time.Minute * 10).Unix(),
	}
	QRCodeInfoMap[req.Qrcode] = qrCodeinfo
	//del Expired qrCodeinfo
	log.Infof("QRCodeInfoMap:%v", QRCodeInfoMap)

	respondProto(c, resp)
}

func (s *HttpServer) GetTokenByQrcode_http(c *gin.Context) {
	protoc := protocol.ID(c.Request.Header.Get("PROTOCOL"))

	resp := &pb.GetTokenByQrcodeResp{
		Code: pb.Code_Success,
	}
	body, err := ioutil.ReadAll(c.Request.Body)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	req := &pb.GetTokenByQrcodeReq{}
	err = proto.UnmarshalMerge(body, req)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	log.Infof("ContentType: %v", c.ContentType())
	log.Infof("PROTOCOL: %v", protoc)

	qrcode := req.Qrcode
	if qrcode != QRCodeInfoMap[qrcode].CodeStr {
		log.Errorf(" qrcodeStr QRCodeInfoMap not match : %v-%v", qrcode, QRCodeInfoMap[qrcode].CodeStr)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	resp.Token = QRCodeInfoMap[qrcode].Token
	resp.PeerId = QRCodeInfoMap[qrcode].peerId
	respondProto(c, resp)
}

func (s *HttpServer) ActivateDevice_http(c *gin.Context) {
	lock.Lock()
	defer lock.Unlock()
	protoc := protocol.ID(c.Request.Header.Get("PROTOCOL"))
	peerId := c.Request.Header.Get("PEER_ID")
	resp := &pb.ActivateResp{
		Code: pb.Code_Success,
	}
	body, err := ioutil.ReadAll(c.Request.Body)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	req := &pb.ActivateReq{}
	err = proto.UnmarshalMerge(body, req)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	log.Infof("ContentType: %v", c.ContentType())
	log.Infof("PROTOCOL: %v", protoc)
	log.Infof("PEER_ID: %v", peerId)

	log.Infof("ActivateDevice req: %+v", req)
	if s.p2pHost.ID().String() != req.PeerId {
		log.Infof("failed to check sgin")
		resp.Code = pb.Code_InvalidSignature
		respondProto(c, resp)
		return
	}
	if sign(req, s.SignKey) != req.Signature {
		log.Infof("failed to check sgin")
		resp.Code = pb.Code_InvalidSignature
		respondProto(c, resp)
		return
	}
	count, err := s.store.UserCount()
	if err != nil {
		log.Errorf("failed to get user count: %v", err)
		resp.Code = pb.Code_DbError
		respondProto(c, resp)
		return
	}
	if count > 0 {
		log.Errorf("device has been activated")
		resp.Code = pb.Code_DeviceActivated
		respondProto(c, resp)
		return
	}
	repoPath, err := fsrepo.BestKnownPath()
	diskInfo := disk.FetchDiskUsage(repoPath)
	if diskInfo.Free > 1<<30 {
		// 预留1G空间作为临时目录
		diskInfo.Total -= 1 << 30
	}

	now := time.Now()
	user := model.User{
		Name:           req.Name,
		Password:       req.Password,
		Role:           model.Admin,
		AllocatedSpace: diskInfo.Total,
		UsedSpace:      diskInfo.Used,
		DeviceName:     req.DeviceName,
		UpdateAt:       now.Unix(),
		CreatedAt:      now.Unix(),
	}
	err = s.store.CreateItem(&user)
	if err != nil {
		log.Errorf("failed to create user: %v", err)
		resp.Code = pb.Code_DbError
		respondProto(c, resp)
		return
	}
	u := UserData{
		Id:        user.Id,
		Role:      user.Role,
		ExpiredAt: time.Now().Add(time.Hour * 24 * 7).Unix(),
	}
	token := genUUidString()
	oldToken, ok := s.userTokenM.Load(user.Id)
	if ok {
		s.tokenUserM.Delete(oldToken)
	}
	s.tokenUserM.Store(token, u)
	s.userTokenM.Store(user.Id, token)

	if err != nil {
		log.Errorf("failed to create token： %v", err)
		resp.Code = pb.Code_DbError
		respondProto(c, resp)
		return
	}
	resp.Token = token
	resp.UserInfo = &pb.User{
		Id:             uint32(u.Id),
		Name:           user.Name,
		Role:           int32(u.Role),
		Status:         int32(user.Status),
		AllocatedSpace: user.AllocatedSpace,
		UsedSpace:      user.UsedSpace,
		DeviceName:     user.DeviceName,
		CreatedAt:      user.CreatedAt,
	}
	respondProto(c, resp)
	return
}

func (s *HttpServer) ForgetPass_http(c *gin.Context) {
	lock.Lock()
	defer lock.Unlock()
	protoc := protocol.ID(c.Request.Header.Get("PROTOCOL"))
	peerId := c.Request.Header.Get("PEER_ID")
	resp := &pb.ForgetPassResp{
		Code: pb.Code_Success,
	}
	body, err := ioutil.ReadAll(c.Request.Body)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	req := &pb.ForgetPassReq{}
	err = proto.UnmarshalMerge(body, req)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	log.Infof("ContentType: %v", c.ContentType())
	log.Infof("PROTOCOL: %v", protoc)
	log.Infof("PEER_ID: %v", peerId)

	log.Infof("ActivateDevice req: %s", req)

	if s.p2pHost.ID().String() != req.PeerId {
		log.Infof("failed to peerid")
		resp.Code = pb.Code_InvalidSignature
		respondProto(c, resp)
		return
	}
	if req.Name == "" {
		if signPass(req, s.SignKey) != req.Signature {
			log.Infof("failed to check sgin")
			resp.Code = pb.Code_InvalidSignature
			respondProto(c, resp)
			return
		}
	}

	user, err := s.store.GetAdminUser(req.Name)
	if err != nil {
		if err == gorm.ErrRecordNotFound {
			log.Errorf("user not exist： %v", err)
			resp.Code = pb.Code_UserNameNotExist
			respondProto(c, resp)
			return
		}
		log.Errorf("user not exist： %v", err)
		resp.Code = pb.Code_DbError
		respondProto(c, resp)
		return
	}
	if user.Id == 0 {
		log.Errorf("user not exist： %v", err)
		resp.Code = pb.Code_UserNameNotExist
		respondProto(c, resp)
		return
	}
	if user.Status == 1 {
		resp.Code = pb.Code_UserDisabled
		respondProto(c, resp)
		return
	}
	u := UserData{
		Id:        user.Id,
		Role:      user.Role,
		ExpiredAt: time.Now().Add(time.Hour * 24 * 7).Unix(),
	}
	token := genUUidString()
	oldToken, ok := s.userTokenM.Load(user.Id)
	if ok {
		s.tokenUserM.Delete(oldToken)
	}
	s.tokenUserM.Store(token, u)
	s.userTokenM.Store(user.Id, token)
	if err != nil {
		log.Errorf("failed to create token： %v", err)
		resp.Code = pb.Code_Failure
		respondProto(c, resp)
		return
	}
	resp.Token = token
	resp.UserInfo = &pb.User{
		Id:             uint32(u.Id),
		Name:           user.Name,
		Role:           int32(u.Role),
		Status:         int32(user.Status),
		AllocatedSpace: user.AllocatedSpace,
		UsedSpace:      user.UsedSpace,
		DeviceName:     user.DeviceName,
		CreatedAt:      user.CreatedAt,
	}
	respondProto(c, resp)
	return
}

func (s *HttpServer) Login_http(c *gin.Context) {
	lock.Lock()
	defer lock.Unlock()
	protoc := protocol.ID(c.Request.Header.Get("PROTOCOL"))
	peerId := c.Request.Header.Get("PEER_ID")
	resp := &pb.LoginResp{
		Code: pb.Code_Success,
	}
	body, err := ioutil.ReadAll(c.Request.Body)
	if err != nil {
		log.Errorf(" request error : %v", err)

		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	req := &pb.LoginReq{}
	err = proto.UnmarshalMerge(body, req)
	if err != nil {
		log.Errorf(" request error : %v", err)

		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	log.Infof("ContentType: %v", c.ContentType())
	log.Infof("PROTOCOL: %v", protoc)
	log.Infof("PEER_ID: %v", peerId)

	user, err := s.store.GetUserByName(req.Name)
	if err != nil {
		if err == gorm.ErrRecordNotFound {
			resp.Code = pb.Code_UserNameNotExist
			respondProto(c, resp)
			return
		}
		resp.Code = pb.Code_DbError
		respondProto(c, resp)
		return
	}
	if req.Password != user.Password {
		resp.Code = pb.Code_UserPassError
		respondProto(c, resp)
		return
	}
	if user.Status == 1 {
		resp.Code = pb.Code_UserDisabled
		respondProto(c, resp)
		return
	}
	if req.DeviceName != "" {
		user.DeviceName = req.DeviceName
		err = s.store.UpdateUserDeviceName(user)
		if err != nil {
			log.Errorf("failed to update user: %v", err)
			resp.Code = pb.Code_DbError
			respondProto(c, resp)
			return
		}
	}
	u := UserData{
		Id:        user.Id,
		Role:      user.Role,
		ExpiredAt: time.Now().Add(time.Hour * 24 * 30).Unix(),
	}
	token := genUUidString()
	oldToken, ok := s.userTokenM.Load(user.Id)
	if ok {
		s.tokenUserM.Delete(oldToken)
	}
	s.tokenUserM.Store(token, u)
	s.userTokenM.Store(user.Id, token)
	if err != nil {
		log.Errorf("failed to create token： %v", err)
		resp.Code = pb.Code_Failure
		respondProto(c, resp)
		return
	}
	resp.Token = token
	resp.UserInfo = &pb.User{
		Id:             uint32(u.Id),
		Name:           user.Name,
		Role:           int32(u.Role),
		Status:         int32(user.Status),
		AllocatedSpace: user.AllocatedSpace,
		UsedSpace:      user.UsedSpace,
		DeviceName:     user.DeviceName,
		CreatedAt:      user.CreatedAt,
	}
	respondProto(c, resp)
	return
}

func (s *HttpServer) AddUser_http(c *gin.Context) {
	lock.Lock()
	defer lock.Unlock()
	resp := &pb.CommonResp{
		Code: pb.Code_Success,
	}
	protoc := protocol.ID(c.Request.Header.Get("PROTOCOL"))
	peerId := c.Request.Header.Get("PEER_ID")
	body, err := ioutil.ReadAll(c.Request.Body)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	req := &pb.AddUserReq{}
	err = proto.UnmarshalMerge(body, req)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	log.Infof("ContentType: %v", c.ContentType())
	log.Infof("PROTOCOL: %v", protoc)
	log.Infof("PEER_ID: %v", peerId)
	//token检查
	tokenCode := s.LoginRequired(req.Token)
	if tokenCode != pb.Code_Success {
		resp.Code = tokenCode
		respondProto(c, resp)
		return
	}
	count, err := s.store.UserCount()
	if err != nil {
		log.Errorf("failed to get user count: %v", err)
		resp.Code = pb.Code_DbError
		respondProto(c, resp)
		return
	}
	if count == 6 {
		log.Errorf("user have six")
		resp.Code = pb.Code_UserCountIsOver
		respondProto(c, resp)
		return
	}
	userL, err := s.store.GetUserByName(req.Name)
	if err == nil {
		log.Errorf("name is exist %v", err)
		resp.Code = pb.Code_FileNameExist
		respondProto(c, resp)
		return
	}
	if userL.Name == req.Name {
		resp.Code = pb.Code_FileNameExist
		respondProto(c, resp)
		return
	}
	u := s.ctx.Value("user").(UserData)
	if u.Role != model.Admin {
		log.Errorf("no permision")
		resp.Code = pb.Code_Failure
		respondProto(c, resp)
		return
	}
	admin, err := s.store.GetUserById(1)
	if err != nil {
		log.Errorf("failed to get admin: %v", err)
		resp.Code = pb.Code_DbError
		respondProto(c, resp)
		return
	}
	if req.Space > admin.AllocatedSpace-admin.UsedSpace {
		log.Errorf("no engouh space: %v", admin.AllocatedSpace-admin.UsedSpace)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}

	now := time.Now()
	user := model.User{
		Name:           req.Name,
		Password:       req.Password,
		Role:           model.NormalUser,
		AllocatedSpace: req.Space,
		UpdateAt:       now.Unix(),
		CreatedAt:      now.Unix(),
	}
	err = s.store.CreateItem(&user)
	if err != nil {
		log.Errorf("failed to create user: %v", err)
		resp.Code = pb.Code_DbError
		respondProto(c, resp)
		return
	}
	admin.AllocatedSpace -= req.Space
	err = s.store.UpdateUserSpace(admin)
	if err != nil {
		log.Errorf("failed to update user: %v", err)
		resp.Code = pb.Code_DbError
		respondProto(c, resp)
		return
	}
	respondProto(c, resp)
	return
}

func (s *HttpServer) GetUserInfo_http(c *gin.Context) {
	lock.Lock()
	defer lock.Unlock()
	protoc := protocol.ID(c.Request.Header.Get("PROTOCOL"))
	peerId := c.Request.Header.Get("PEER_ID")
	resp := &pb.UserInfoResp{
		Code: pb.Code_Success,
	}
	body, err := ioutil.ReadAll(c.Request.Body)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	req := &pb.UserInfoReq{}
	err = proto.UnmarshalMerge(body, req)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	log.Infof("ContentType: %v", c.ContentType())
	log.Infof("PROTOCOL: %v", protoc)
	log.Infof("PEER_ID: %v", peerId)
	//token检查
	tokenCode := s.LoginRequired(req.Token)
	if tokenCode != pb.Code_Success {
		resp.Code = tokenCode
		respondProto(c, resp)
		return
	}
	u := s.ctx.Value("user").(UserData)
	user, err := s.store.GetUserById(u.Id)
	if err != nil {
		log.Errorf("failed to get user: %v", err)
		resp.Code = pb.Code_DbError
		respondProto(c, resp)
		return
	}
	resp.User = &pb.User{
		Id:             uint32(u.Id),
		Name:           user.Name,
		Role:           int32(u.Role),
		Status:         int32(user.Status),
		AllocatedSpace: user.AllocatedSpace,
		UsedSpace:      user.UsedSpace,
		DeviceName:     user.DeviceName,
		CreatedAt:      user.CreatedAt,
		SyncFil:        int32(user.SyncFil),
	}

	users, err := s.store.GetAllUsers()
	if err != nil {
		log.Errorf("failed to get user: %v", err)
		resp.Code = pb.Code_DbError
		respondProto(c, resp)
		return
	}
	space := pb.DiskSpace{}
	for _, v := range users {
		space.Total += v.AllocatedSpace
		if v.Id == 1 {
			space.AdminUsed = v.UsedSpace
		} else {
			space.OtherAllocated += v.AllocatedSpace
		}
	}
	resp.Space = &space
	respondProto(c, resp)
	return
}

func (s *HttpServer) GetUserList_http(c *gin.Context) {
	lock.Lock()
	defer lock.Unlock()
	protoc := protocol.ID(c.Request.Header.Get("PROTOCOL"))
	peerId := c.Request.Header.Get("PEER_ID")
	resp := &pb.UserListResp{
		Code: pb.Code_Success,
	}
	body, err := ioutil.ReadAll(c.Request.Body)
	if err != nil {
		log.Errorf(" request error : %v", err)

		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	req := &pb.UserListReq{}
	err = proto.UnmarshalMerge(body, req)
	if err != nil {
		log.Errorf(" request error : %v", err)

		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	log.Infof("ContentType: %v", c.ContentType())
	log.Infof("PROTOCOL: %v", protoc)
	log.Infof("PEER_ID: %v", peerId)
	//token检查
	tokenCode := s.LoginRequired(req.Token)
	if tokenCode != pb.Code_Success {

		resp.Code = tokenCode
		respondProto(c, resp)
		return
	}

	list, err := s.store.GetAllUsers()
	if err != nil {
		log.Errorf("failed to get users: %v", err)
		resp.Code = pb.Code_DbError
		respondProto(c, resp)
		return
	}
	resp.User = make([]*pb.User, 0)
	for _, v := range list {
		resp.User = append(resp.User, &pb.User{
			Id:             uint32(v.Id),
			Name:           v.Name,
			Role:           int32(v.Role),
			Status:         int32(v.Status),
			AllocatedSpace: v.AllocatedSpace,
			UsedSpace:      v.UsedSpace,
			DeviceName:     v.DeviceName,
			CreatedAt:      v.CreatedAt,
			Password:       v.Password,
			SyncFil:        int32(v.SyncFil),
		})
	}
	respondProto(c, resp)
	return
}

func (s *HttpServer) UpdatePassword_http(c *gin.Context) {
	lock.Lock()
	defer lock.Unlock()
	protoc := protocol.ID(c.Request.Header.Get("PROTOCOL"))
	peerId := c.Request.Header.Get("PEER_ID")
	resp := &pb.CommonResp{
		Code: pb.Code_Success,
	}
	body, err := ioutil.ReadAll(c.Request.Body)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	req := &pb.UpdatePasswordReq{}
	err = proto.UnmarshalMerge(body, req)
	if err != nil {
		log.Errorf(" request error : %v", err)

		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	log.Infof("ContentType: %v", c.ContentType())
	log.Infof("PROTOCOL: %v", protoc)
	log.Infof("PEER_ID: %v", peerId)
	//token检查
	tokenCode := s.LoginRequired(req.Token)
	if tokenCode != pb.Code_Success {

		resp.Code = tokenCode
		respondProto(c, resp)
		return
	}

	u := s.ctx.Value("user").(UserData)
	user, err := s.store.GetUserById(u.Id)
	if err != nil {
		resp.Code = pb.Code_UserPassError
		respondProto(c, resp)
		return
	}

	//if user.Role != model.Admin {
	//	if user.Password != req.OldPass {
	//		resp.Code = pb.Code_UserPassError
	//		respondProto(c, resp)
	//		return
	//	}
	//}

	user.Password = req.NewPass
	err = s.store.UpdatePassword(user)
	if err != nil {
		resp.Code = pb.Code_DbError
		respondProto(c, resp)
		return
	}
	respondProto(c, resp)
	return
}

func (s *HttpServer) UserRename_http(c *gin.Context) {
	lock.Lock()
	defer lock.Unlock()
	protoc := protocol.ID(c.Request.Header.Get("PROTOCOL"))
	peerId := c.Request.Header.Get("PEER_ID")
	resp := &pb.CommonResp{
		Code: pb.Code_Success,
	}
	body, err := ioutil.ReadAll(c.Request.Body)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	req := &pb.UserRenameReq{}
	err = proto.UnmarshalMerge(body, req)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	log.Infof("ContentType: %v", c.ContentType())
	log.Infof("PROTOCOL: %v", protoc)
	log.Infof("PEER_ID: %v", peerId)
	//token检查
	tokenCode := s.LoginRequired(req.Token)
	if tokenCode != pb.Code_Success {

		resp.Code = tokenCode
		respondProto(c, resp)
		return
	}

	u := s.ctx.Value("user").(UserData)
	user, err := s.store.GetUserById(u.Id)
	if err != nil {
		resp.Code = pb.Code_DbError
		respondProto(c, resp)
		return
	}
	user.Name = req.Name
	err = s.store.UpdateName(user)
	if err != nil {
		resp.Code = pb.Code_DbError
		respondProto(c, resp)
		return
	}
	resp.Code = pb.Code_Success
	respondProto(c, resp)
	return
}

func (s *HttpServer) ResetPassword_http(c *gin.Context) {
	lock.Lock()
	defer lock.Unlock()
	protoc := protocol.ID(c.Request.Header.Get("PROTOCOL"))
	peerId := c.Request.Header.Get("PEER_ID")
	resp := &pb.CommonResp{
		Code: pb.Code_Success,
	}
	body, err := ioutil.ReadAll(c.Request.Body)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	req := &pb.ResetPasswordReq{}
	err = proto.UnmarshalMerge(body, req)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	log.Infof("ContentType: %v", c.ContentType())
	log.Infof("PROTOCOL: %v", protoc)
	log.Infof("PEER_ID: %v", peerId)
	//token检查
	tokenCode := s.LoginRequired(req.Token)
	if tokenCode != pb.Code_Success {

		resp.Code = tokenCode
		respondProto(c, resp)
		return
	}

	u := s.ctx.Value("user").(UserData)
	if u.Role != model.Admin {
		log.Errorf("current user must bee admin")
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}

	user, err := s.store.GetUserById(int(req.UserId))
	if err != nil {
		resp.Code = pb.Code_UserPassError
		respondProto(c, resp)
		return
	}

	user.Password = req.NewPass
	err = s.store.UpdatePassword(user)
	if err != nil {
		resp.Code = pb.Code_DbError
		respondProto(c, resp)
		return
	}
	respondProto(c, resp)
	return
}

func (s *HttpServer) EnableUser_http(c *gin.Context) {
	lock.Lock()
	defer lock.Unlock()
	protoc := protocol.ID(c.Request.Header.Get("PROTOCOL"))
	peerId := c.Request.Header.Get("PEER_ID")
	resp := &pb.CommonResp{
		Code: pb.Code_Success,
	}
	body, err := ioutil.ReadAll(c.Request.Body)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	req := &pb.EnableUserReq{}
	err = proto.UnmarshalMerge(body, req)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	log.Infof("ContentType: %v", c.ContentType())
	log.Infof("PROTOCOL: %v", protoc)
	log.Infof("PEER_ID: %v", peerId)
	//token检查
	tokenCode := s.LoginRequired(req.Token)
	if tokenCode != pb.Code_Success {
		resp.Code = tokenCode
		respondProto(c, resp)
		return
	}

	u := s.ctx.Value("user").(UserData)
	if u.Role != model.Admin {
		resp.Code = pb.Code_RequestParamError
		log.Errorf("current user must bee admin")
		respondProto(c, resp)
		return
	}
	user, err := s.store.GetUserById(int(req.UserId))
	if err != nil {
		resp.Code = pb.Code_UserPassError
		respondProto(c, resp)
		return
	}
	if req.Enable {
		user.Status = model.Enabled
	} else {
		user.Status = model.Disabled
	}
	err = s.store.UpdateUserStatus(user)
	if err != nil {
		resp.Code = pb.Code_DbError
		respondProto(c, resp)
		return
	}
	respondProto(c, resp)
	return
}

func (s *HttpServer) SyncFil_http(c *gin.Context) {

	protoc := protocol.ID(c.Request.Header.Get("PROTOCOL"))
	peerId := c.Request.Header.Get("PEER_ID")
	resp := &pb.CommonResp{
		Code: pb.Code_Success,
	}
	body, err := ioutil.ReadAll(c.Request.Body)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	req := &pb.EnableFilReq{}
	err = proto.UnmarshalMerge(body, req)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	log.Infof("ContentType: %v", c.ContentType())
	log.Infof("PROTOCOL: %v", protoc)
	log.Infof("PEER_ID: %v", peerId)
	//log.Infof("req:%v", req)
	//token检查
	tokenCode := s.LoginRequired(req.Token)
	if tokenCode != pb.Code_Success {
		resp.Code = tokenCode
		respondProto(c, resp)
		return
	}

	user, err := s.store.GetAdminUser("")
	if err != nil {
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	if req.MinerId == "" {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	count, _, err := s.store.GetFileAll(0, 1, 0)
	if err != nil {
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	counts := strconv.Itoa(count)
	resp.Msg = counts
	if user.SyncFil == model.Disabled {
		resp.Code = pb.Code_BackingUp
		respondProto(c, resp)
		return
	} else {
		if req.Enable {
			if user.SyncFil != model.Disabled {
				lock.Lock()
				defer lock.Unlock()
				times := time.Now().Unix()
				user.SyncFil = model.Disabled
				sumSize, err := s.store.SumFileAll()
				if err != nil {
					log.Errorf("SumFileAll request error : %v", err)
					resp.Code = pb.Code_DbError
					respondProto(c, resp)
					return
				}
				log.Errorf("sumSize  : %v,req.SizeSum: %v ", sumSize.Size, req.SizeSum)
				if sumSize.Size < req.SizeSum {
					log.Errorf("SizeInsufficient: %v", err)
					resp.Code = pb.Code_SizeInsufficient
					respondProto(c, resp)
					return
				}

				err = s.store.UpdateUserSyncFil(user, times, req.MinerId, req.RelayHost, req.Price)
				if err != nil {
					log.Errorf("UpdateUserSyncFil request error : %v", err)
					resp.Code = pb.Code_DbError
					respondProto(c, resp)
					return
				}
				atomic.StoreInt32(&s.syncFile, 1)
			}
		}
		respondProto(c, resp)
		//if count > 0 {
		//	go func() {
		//		//log.Errorf("start_c: %v", time.Now())
		//		if req.Enable {
		//			if user.SyncFil != model.Disabled {
		//				lock.Lock()
		//				defer lock.Unlock()
		//				times := time.Now().Unix()
		//				user.SyncFil = model.Disabled
		//				err = s.store.UpdateUserSyncFil(user, times, req.MinerId, req.RelayHost)
		//				if err != nil {
		//					log.Errorf("UpdateUserSyncFil request error : %v", err)
		//					resp.Code = pb.Code_DbError
		//					respondProto(c, resp)
		//					return
		//				} else {
		//					countS, err := s.store.InsertIpfsCid(count, list[0].AutoId, times, req.MinerId)
		//					if err != nil {
		//						log.Errorf("InsertIpfsCid request error : %v", err)
		//						resp.Code = pb.Code_RequestParamError
		//					} else {
		//						file := model.CidBackups{
		//							MinerId:   req.MinerId,
		//							Status:    0,
		//							Price:     req.Price,
		//							CreatedAt: times,
		//							FileCount: countS,
		//						}
		//						err = s.store.CreateItem(&file)
		//						if err != nil {
		//							log.Errorf("failed to create CidBackups: %v", err)
		//							resp.Code = pb.Code_DbError
		//							respondProto(c, resp)
		//							return
		//						}
		//					}
		//				}
		//			}
		//		}
		//		resp.Msg = ""
		//		respondProto(c, resp)
		//		return
		//	}()
		//}
	}

	return
}

func (s *HttpServer) GetUserAvatar_http(c *gin.Context) {

	protoc := protocol.ID(c.Request.Header.Get("PROTOCOL"))
	peerId := c.Request.Header.Get("PEER_ID")
	resp := &pb.GetUserAvatarResp{
		Code: pb.Code_Success,
	}
	body, err := ioutil.ReadAll(c.Request.Body)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	req := &pb.GetUserAvatarReq{}
	err = proto.UnmarshalMerge(body, req)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	log.Infof("ContentType: %v", c.ContentType())
	log.Infof("PROTOCOL: %v", protoc)
	log.Infof("PEER_ID: %v", peerId)
	//token检查
	tokenCode := s.LoginRequired(req.Token)
	if tokenCode != pb.Code_Success {
		resp.Code = tokenCode
		respondProto(c, resp)
		return
	}

	id := s.ctx.Value("user").(UserData).Id
	if req.UserId != 0 {
		id = int(req.UserId)
	}
	data, code := s.getAvatarData(id)
	if code != pb.Code_Success {
		resp.Code = code
		respondProto(c, resp)
		return
	}
	resp.AvatarData = data
	respondProto(c, resp)
	return
}

func (s *HttpServer) UpdateUserAvatar_http(c *gin.Context) {
	protoc := protocol.ID(c.Request.Header.Get("PROTOCOL"))
	peerId := c.Request.Header.Get("PEER_ID")
	resp := &pb.CommonResp{
		Code: pb.Code_Success,
	}
	body, err := ioutil.ReadAll(c.Request.Body)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	req := &pb.UpdateUserAvatarReq{}
	err = proto.UnmarshalMerge(body, req)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	log.Infof("ContentType: %v", c.ContentType())
	log.Infof("PROTOCOL: %v", protoc)
	log.Infof("PEER_ID: %v", peerId)
	//token检查
	tokenCode := s.LoginRequired(req.Token)
	if tokenCode != pb.Code_Success {
		resp.Code = tokenCode
		respondProto(c, resp)
		return
	}

	u := s.ctx.Value("user").(UserData)
	tempFile := s.AvatarDir + "/" + fmt.Sprintf("%d.jpg.tmp", u.Id)
	fileName := s.AvatarDir + "/" + fmt.Sprintf("%d.jpg", u.Id)
	err = ioutil.WriteFile(tempFile, req.AvatarData, 0666)
	if err != nil {
		resp.Code = pb.Code_IoError
		log.Errorf("failed to write file: %v", err)
		respondProto(c, resp)
		return
	}
	os.Remove(fileName)
	err = os.Rename(tempFile, fileName)
	if err != nil {
		resp.Code = pb.Code_IoError
		log.Errorf("failed to rename file: %v", err)
		os.Remove(tempFile)
		respondProto(c, resp)
		return
	}
	respondProto(c, resp)
	return
}

func (s *HttpServer) DeleteUser_http(c *gin.Context) {
	lock.Lock()
	defer lock.Unlock()
	protoc := protocol.ID(c.Request.Header.Get("PROTOCOL"))
	peerId := c.Request.Header.Get("PEER_ID")
	resp := &pb.CommonResp{
		Code: pb.Code_Success,
	}
	body, err := ioutil.ReadAll(c.Request.Body)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	req := &pb.DeleteUserReq{}
	err = proto.UnmarshalMerge(body, req)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	log.Infof("ContentType: %v", c.ContentType())
	log.Infof("PROTOCOL: %v", protoc)
	log.Infof("PEER_ID: %v", peerId)
	//token检查
	tokenCode := s.LoginRequired(req.Token)
	if tokenCode != pb.Code_Success {
		resp.Code = tokenCode
		respondProto(c, resp)
		return
	}

	u := s.ctx.Value("user").(UserData)
	if u.Role != model.Admin {
		resp.Code = pb.Code_RequestParamError
		log.Errorf("current user must bee admin")
		return
	}
	if int(req.UserId) == u.Id {
		resp.Code = pb.Code_RequestParamError
		log.Error("can't delete self")
		return
	}

	admin, err := s.store.GetUserById(u.Id)
	if err != nil {
		resp.Code = pb.Code_DbError
		return
	}
	user, err := s.store.GetUserById(int(req.UserId))
	if err != nil {
		resp.Code = pb.Code_DbError
		return
	}
	count, err := s.store.GetUserFileSize(int(req.UserId))
	if err != nil {
		resp.Code = pb.Code_DbError
		return
	}
	if count > 0 {
		resp.Code = pb.Code_RequestParamError
		log.Error("space not empty")
		return
	}
	err = s.store.DeleteItem(user)
	if err != nil {
		resp.Code = pb.Code_DbError
		return
	}
	admin.AllocatedSpace += user.AllocatedSpace
	err = s.store.UpdateUserSpace(admin)
	if err != nil {
		resp.Code = pb.Code_DbError
		return
	}
	respondProto(c, resp)
	return
}

func (s *HttpServer) ChangeSpace_http(c *gin.Context) {
	lock.Lock()
	defer lock.Unlock()
	protoc := protocol.ID(c.Request.Header.Get("PROTOCOL"))
	peerId := c.Request.Header.Get("PEER_ID")
	resp := &pb.CommonResp{
		Code: pb.Code_Success,
	}
	body, err := ioutil.ReadAll(c.Request.Body)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	req := &pb.ChangeSpaceReq{}
	err = proto.UnmarshalMerge(body, req)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	log.Infof("ContentType: %v", c.ContentType())
	log.Infof("PROTOCOL: %v", protoc)
	log.Infof("PEER_ID: %v", peerId)
	//token检查
	tokenCode := s.LoginRequired(req.Token)
	if tokenCode != pb.Code_Success {
		resp.Code = tokenCode
		respondProto(c, resp)
		return
	}

	u := s.ctx.Value("user").(UserData)
	if u.Role != model.Admin {
		resp.Code = pb.Code_RequestParamError
		log.Errorf("current user must bee admin")
		respondProto(c, resp)
		return
	}
	if int(req.UserId) == u.Id {
		resp.Code = pb.Code_RequestParamError
		log.Error("can't delete self")
		respondProto(c, resp)
		return
	}

	admin, err := s.store.GetUserById(u.Id)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_DbError
		respondProto(c, resp)
		return
	}

	user, err := s.store.GetUserById(int(req.UserId))
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_DbError
		respondProto(c, resp)
		return
	}

	if req.Space < user.AllocatedSpace { // 变小
		if req.Space < user.UsedSpace {
			resp.Code = pb.Code_RequestParamError
			log.Errorf("space less than UsedSpace: %v", user.UsedSpace)
			respondProto(c, resp)
			return
		}
		admin.AllocatedSpace += user.AllocatedSpace - req.Space
		user.AllocatedSpace = req.Space
	} else {
		if req.Space-user.AllocatedSpace > admin.AllocatedSpace-admin.UsedSpace {
			resp.Code = pb.Code_RequestParamError
			log.Errorf("space less than UsedSpace: %v", user.UsedSpace)
			respondProto(c, resp)
			return
		}
		admin.AllocatedSpace -= req.Space - user.AllocatedSpace
		user.AllocatedSpace = req.Space
	}
	err = s.store.UpdateUserSpace(admin)
	if err != nil {
		resp.Code = pb.Code_DbError
		respondProto(c, resp)
		return
	}
	err = s.store.UpdateUserSpace(user)
	if err != nil {
		resp.Code = pb.Code_DbError
		respondProto(c, resp)
		return
	}
	respondProto(c, resp)
	return
}
