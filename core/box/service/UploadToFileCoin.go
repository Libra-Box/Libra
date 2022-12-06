package service

import (
	"bytes"
	"context"
	"github.com/ipfs/go-cid"
	"github.com/ipfs/interface-go-ipfs-core/path"
	"github.com/ipfs/kubo/core/box/model"
	"github.com/ipfs/kubo/core/box/pb"
	"github.com/jinzhu/gorm"
	"io"
	"io/ioutil"
	"math"
	"net/http"
	"time"
)

func (s *HttpServer) runUploadToFileCoin(c context.Context) {
	//s.wg.Add(1)
	//go func() {
	//	defer func() {
	//		s.wg.Done()
	//	}()
	//	ticker := time.NewTicker(time.Minute)
	//	defer ticker.Stop()
	//	for {
	//		select {
	//		case <-ticker.C:
	//			s.uploadToFileCoin(c)
	//
	//		case <-c.Done():
	//			return
	//		}
	//	}
	//}()
	ticker := time.NewTicker(time.Second * 30)
	go func() {
		for _ = range ticker.C {
			s.uploadToFileCoin(c)
		}
	}()
}

func (s *HttpServer) uploadToFileCoin(c context.Context) {
	s.lock.Lock()
	log.Errorf("uploadToFileCoin %v", time.Now())
	resp := &pb.CommonResp{
		Code: pb.Code_Success,
	}
	user, err := s.store.GetAdminUser("")
	if err != nil {
		log.Errorf("failed to GetAdminUser: %v", err)
		s.lock.Unlock()
	} else {
		if user.SyncFil == 0 {
			s.lock.Unlock()
			return
		}
		//countStatus := s.store.GetFileUpload(user.Snapshot)
		//if err != nil {
		//	log.Errorf("faild to GetFileVerified: %v", err)
		//	s.lock.Unlock()
		//	return
		//}
		_, err := s.store.GetFileBackups(user.Snapshot)
		if err != nil {
			log.Errorf("UpdateCidBackups: %v", err)
			s.lock.Unlock()
			return
		}
		//if countStatus != fileBackCount.FileCount {
		//	log.Errorf("count is error: %v", countStatus)
		//	s.lock.Unlock()
		//	return
		//}
		offset := 0
		limit := 100
		_, _, err = s.store.GetFileCidAll(offset, 1, 0)
		if err != nil {
			log.Errorf("faild to GetFileAll: %v", err)
			s.lock.Unlock()
		} else {
			//ss := float64(count) / float64(limit)
			//page := math.Ceil(ss)
			//pages := int(page)
			for i := 0; i < 1; i++ {
				offset = i * limit
				_, list, err := s.store.GetFileCidAll(offset, limit, 0)
				if err != nil {
					log.Errorf("faild to GetFileAll: %v", err)
				} else {
					for _, v := range list {
						cid, err := cid.Decode(v.IpfsCid)
						if err != nil {
							log.Errorf("failed to decode cid %v", err.Error())
						} else {
							cidPath := path.IpfsPath(cid)
							fileNode, err := s.coreApi.Unixfs().Get(context.Background(), cidPath)
							if err != nil {
								log.Errorf("failed to get file %v", err.Error())
							} else {
								uploadPage := 0
								fileInfo, err := s.store.GetFileCid(v.IpfsCid, user.Snapshot)
								if err == gorm.ErrRecordNotFound {
									log.Errorf("cid is not exist %v", err.Error())
									continue
								}
								uploadPage = int(fileInfo.UploadPage)
								spliceSize := 1024 * 1024
								sizePage := math.Ceil(float64(v.FileSize) / float64(spliceSize))
								sizePages := int(sizePage)
								fileCount := sizePages * 16
								fileSize := v.FileSize + fileCount

								for j := uploadPage; j < sizePages; j++ {
									//log.Errorf("j %v,uploadPage %v", j, uploadPage)
									start := j * spliceSize
									if v.FileSize <= spliceSize {
										spliceSize = v.FileSize
									} else {
										if j == sizePages-1 {
											spliceSize = v.FileSize - start
										}
									}
									buf, err := getFileBytes(fileNode, int64(start), spliceSize)
									if err != nil {
										if err != io.EOF {
											log.Errorf("failed to getFileBytes %v", err.Error())
											continue
										}
									}
									//md5buf := xhash.Md5(buf)
									log.Errorf("md5: %v,cid: %v", v.Md5, cid)
									if v.Md5 == "" {
										continue
									}
									encryptData, err := CTREncrypt(buf, v.Md5)
									if err != nil {
										log.Errorf("failed to encryptData %v", err.Error())
										continue
									}
									//log.Errorf("encryptData %v", encryptData)
									byteForm := start
									if j > 0 {
										byteForm = start + (j * 16)
									}

									log.Errorf("fileSize %v,start %v,byteForm %v,ctrSize %v", v.FileSize, start, byteForm, fileSize)
									fileToFileCoin := &pb.UploadFileToFilcoinReq{
										IpfsCid:   v.IpfsCid,
										Data:      encryptData,
										FileSize:  int64(fileSize),
										BytesFrom: int64(byteForm),
										PeerId:    s.p2pHost.ID().String(),
									}

									pData, err := fileToFileCoin.Marshal()
									if err != nil {
										log.Errorf("failed to fileToFileCoin: %v", err)
										continue
									}
									dataString := s.protoHttp(v.MinerUrl, pData, "/lotus/filecoinBackup")
									err = resp.Unmarshal(dataString)
									if err != nil {
										log.Errorf("failed to resp.Unmarshal: %v", err)
										continue
									}
									log.Errorf("resp: %v,cid: %v", resp, cid)
									//如果返回成功
									if resp.Code == 0 {
										fileCid := &model.Cid{
											UploadPage: int64(j + 1),
										}
										if j == sizePages-1 {
											fileCid = &model.Cid{
												UploadPage: int64(j),
											}
										}
										lock.Lock()
										err = s.store.UpdateCidPage(v.IpfsCid, fileCid)
										lock.Unlock()
										if err != nil {
											log.Errorf("failed to update UpdateCidPage: %v", err)
											continue
										}
									}
									if resp.Code == 9 {
										fileCid := &model.Cid{
											UploadPage: 0,
										}
										lock.Lock()
										err = s.store.UpdateCidPage(v.IpfsCid, fileCid)
										lock.Unlock()
										if err != nil {
											log.Errorf("failed to update UpdateCidPage: %v", err)
											continue
										}
										break
									}

									if resp.Code != 0 && resp.Code != 9 {
										break
									}
									if j == sizePages-1 {
										lock.Lock()
										err := s.store.UpdateCidUploadStatus(v.IpfsCid, 1)
										lock.Unlock()
										if err != nil {
											log.Errorf("failed to update UpdateCidStatus: %v", err)
											continue
										}
									}
								}
							}
							fileNode.Close()
						}
					}
				}
			}
			s.lock.Unlock()
		}
	}
}

func (s *HttpServer) protoHttp(reqUrl string, pData []byte, protoUrl string) (ss []byte) {

	//log.Infof("Relay to: %v", reqUrl+protoUrl)
	//log.Infof("pData: %v", pData)
	client := &http.Client{Timeout: 15 * time.Second}
	reqRelay, err := http.NewRequest("POST", reqUrl+protoUrl, bytes.NewReader(pData))
	if err != nil {
		log.Errorf("Relay form peer BodyBuffer error : %v", err)
		return nil
	}
	reqRelay.Header.Set("Content-Type", "application/x-protobuf")
	respRelay, err := client.Do(reqRelay)
	if err != nil {
		log.Infof("respRelay: %v", err)
		return nil
	}
	//log.Infof("respRelay StatusCode: %v", respRelay.StatusCode)
	defer respRelay.Body.Close()
	data, err := ioutil.ReadAll(respRelay.Body)
	if err != nil {
		log.Infof("ReadAll: %v", err)
		return nil
	}
	return data
}
