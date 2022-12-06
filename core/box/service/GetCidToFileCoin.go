package service

import (
	"bufio"
	"context"
	"fmt"
	files "github.com/ipfs/go-ipfs-files"
	"github.com/ipfs/interface-go-ipfs-core/options"
	"github.com/ipfs/kubo/core/box/model"
	"github.com/ipfs/kubo/core/box/pb"
	"github.com/jinzhu/gorm"
	"io"
	"math"
	"os"
	"sync"
	"time"
)

func (s *HttpServer) runGetCidToFileCoin(c context.Context) {
	//s.wg.Add(1)
	//go func() {
	//	defer func() {
	//		s.wg.Done()
	//	}()
	//	ticker := time.NewTicker(time.Minute * 5)
	//	defer ticker.Stop()
	//	for {
	//		select {
	//		case <-ticker.C:
	//			s.getCidToFileCoin(c)
	//		case <-c.Done():
	//			return
	//		}
	//	}
	//}()
	ticker := time.NewTicker(time.Minute * 30)
	go func() {
		for _ = range ticker.C {
			//now := time.Now()
			//if now.Hour() == 2 {
			//	s.getCidToFileCoin(c)
			//}
			s.getCidToFileCoin(c)
		}
	}()
}

var getCid sync.Mutex

func (s *HttpServer) getCidToFileCoin(c context.Context) {
	getCid.Lock()
	log.Errorf("getCidToFileCoin %v", time.Now())
	resp := &pb.GetBackUpStatusResp{
		Code: pb.Code_Success,
	}
	user, err := s.store.GetAdminUser("")
	if err == nil {
		offset := 0
		limit := 100
		count, _, err := s.store.GetFileCidAll(offset, 1, 1)
		if err == nil {
			ss := float64(count) / float64(limit)
			page := math.Ceil(ss)
			log.Errorf("page %v", page)
			pages := int(page)
			for i := 0; i < pages; i++ {
				offset = i * limit
				_, list, err := s.store.GetFileCidAll(offset, limit, 1)
				if err != nil {
					log.Errorf("faild to GetFileAll: %v", err)
				} else {
					for _, v := range list {
						//http请求获取cid的状态
						log.Errorf("v.cid: %v", v.IpfsCid)
						fileStatus := &pb.GetBackUpStatusReq{
							IpfsCid: v.IpfsCid,
						}

						pData, err := fileStatus.Marshal()
						if err != nil {
							log.Errorf("failed to fileStatus: %v", err)
							continue
						}
						dataString := s.protoHttp(v.MinerUrl, pData, "/lotus/getBackUpStatus")
						err = resp.Unmarshal(dataString)
						if err != nil {
							log.Errorf("failed to resp.Unmarshal: %v", err)
							continue
						}
						log.Errorf("failed to resp.Code: %v", resp.Code)
						if resp.Code == 0 {
							fileCid := &model.Cid{
								DealCid:  resp.DealCid,
								PieceCid: resp.PieceCid,
								Status:   resp.Status,
								Verified: resp.Verified,
								Duration: int64(resp.Duration),
							}
							lock.Lock()
							err = s.store.UpdateCidInfo(v.IpfsCid, fileCid)
							lock.Unlock()
							if err != nil {
								log.Errorf("failed to update UpdateCidPage: %v", err)
								continue
							}
							if v.FileType == 1 {
								lock.Lock()
								err := s.store.UpdateCidBackupsToDataCid(v.CreatedAt, v.IpfsCid, resp.DealCid)
								lock.Unlock()
								if err != nil {
									log.Errorf("UpdateCidBackups: %v", err)
									return
								}
							}
						}
					}
				}
			}
		}

		//更新备份状态
		countStatus := s.store.GetFileUploadStatus(user.Snapshot)
		if err != nil {
			log.Errorf("faild to GetFileVerified: %v", err)
			getCid.Unlock()
			return
		}
		fileBackCount, err := s.store.GetFileBackups(user.Snapshot)
		if err != nil {
			log.Errorf("UpdateCidBackups: %v", err)
			getCid.Unlock()
			return
		}
		//验证通过的文件等于备份文件数量时,备份数据库
		if countStatus == fileBackCount.FileCount {
			log.Errorf("backups data:")
			newFileName := s.rootPath + "/" + fmt.Sprintf("%d_%s", user.Snapshot, "box.db")
			_, err := os.Stat(newFileName)
			if err != nil { // file not exist
				_, errs := backupData(newFileName, s.rootPath+"/box.db")
				if errs != nil {
					log.Errorf("copy error: %v", errs)
					getCid.Unlock()
					return
				}
			}
			f, err := os.Open(newFileName)
			if err != nil {
				log.Errorf("open file error: %v", err)
				getCid.Unlock()
				return
			}
			defer f.Close()
			node, err := s.coreApi.Unixfs().Add(context.Background(), files.NewReaderFile(f), options.Unixfs.Pin(true))
			if err != nil {
				log.Errorf("failed to add file to ipfs: %v", err)
				getCid.Unlock()
				return
			}
			cid := node.Cid().String()
			_, err = s.store.GetFileCid(cid, user.Snapshot)
			if err == gorm.ErrRecordNotFound {
				ff, errs := os.Stat(newFileName)
				if errs != nil {
					log.Errorf("failed to newFileName: %v", err)
					getCid.Unlock()
					return
				}
				log.Errorf("ff.Size()  %v", ff.Size())
				file := model.Cid{
					IpfsCid:      cid,
					Status:       "0",
					Duration:     0,
					MinerId:      user.MinerId,
					UploadPage:   0,
					UploadStatus: 0,
					FileSize:     int(ff.Size()),
					Md5:          GetFileMd5(newFileName),
					CreatedAt:    user.Snapshot,
					FileType:     1,
					MinerUrl:     user.MinerUrl,
				}
				lock.Lock()
				err = s.store.CreateItem(&file)
				lock.Unlock()
				if err != nil {
					log.Errorf("failed to crete file: %v", err)
					getCid.Unlock()
					return
				}
			}
		}

		//更新备份状态(验证通过的文件=原始备份文件+数据库文件)
		if countStatus == fileBackCount.FileCount+1 {
			log.Errorf("backups success : %v", time.Now())
			lock.Lock()
			err := s.store.UpdateCidBackups(user.Snapshot)
			lock.Unlock()
			if err != nil {
				log.Errorf("UpdateCidBackups: %v", err)
				getCid.Unlock()
				return
			}
			user.SyncFil = model.Enabled
			lock.Lock()
			err = s.store.UpdateUserSyncFil(user, 0, "", "", "")
			lock.Unlock()
			if err != nil {
				log.Errorf("UpdateUserSyncFil: %v", err)
			}
		}
	} else {
		log.Errorf("failed to GetAdminUser: %v", err)
	}
	getCid.Unlock()
}
func backupData(newFileName string, srcFileName string) (written int64, err error) {
	//log.Errorf("backupData %v", time.Now())
	srcFile, err := os.Open(srcFileName)
	if err != nil {
		fmt.Println("open file err:", err)
	}
	//关闭流
	defer srcFile.Close()
	//获取到reader
	reader := bufio.NewReader(srcFile)
	newFile, err := os.OpenFile(newFileName, os.O_WRONLY|os.O_CREATE, 0666) //0666 在windos下无效
	if err != nil {
		fmt.Println("open file err:", err)
		return
	}
	writer := bufio.NewWriter(newFile)
	//关闭流
	defer newFile.Close()
	//调用copy函数
	return io.Copy(writer, reader)
}
