package service

import (
	"context"
	files "github.com/ipfs/go-ipfs-files"
	"github.com/ipfs/interface-go-ipfs-core/options"
	"io/ioutil"
	"os"
	"strings"
	"time"
)

func (s *HttpServer) runUpdateFile(c context.Context) {
	s.wg.Add(1)
	go func() {
		defer func() {
			s.wg.Done()
		}()
		ticker := time.NewTicker(time.Minute * 5)
		defer ticker.Stop()
		for {
			select {
			case <-ticker.C:
				s.updateFileCid(c)
			case <-c.Done():
				return
			}
		}
	}()
}

func (s *HttpServer) updateFileCid(c context.Context) {
	//log.Errorf("updateFileCid %v", time.Now())

	fileInfoList, err := ioutil.ReadDir(s.TempDir)
	if err != nil {
		log.Fatal(err)
	}
	if len(fileInfoList) > 0 {
		for i := range fileInfoList {
			fileName := fileInfoList[i].Name()
			dir := s.TempDir + "/" + fileName
			//判断文件超过7天
			differTime := time.Since(fileInfoList[i].ModTime()).Seconds()
			if differTime > 604800 {
				os.Remove(dir)
			} else {
				//判断是否有未进入ipfs中的文件,
				if find := strings.Contains(fileInfoList[i].Name(), "box111"); find {
					fp, err := os.OpenFile(dir, os.O_RDWR|os.O_CREATE|os.O_APPEND, 0666)
					node, err := s.coreApi.Unixfs().Add(context.Background(), files.NewReaderFile(fp), options.Unixfs.Pin(true))
					if err != nil {
						fp.Close()
						log.Errorf("failed to add file to ipfs: %v", err)
					} else {
						fp.Close()
						fileId := strings.Split(fileName, "!")
						lock.Lock()
						_, err := s.store.GetFileById(fileId[1])
						lock.Unlock()
						if err != nil {
							log.Errorf("failed to get file: %v", err)
							os.Remove(dir)
						} else {
							lock.Lock()
							err = s.store.UpdateFileCid(fileId[1], node.Cid().String())
							lock.Unlock()
							if err != nil {
								if strings.Contains(err.Error(), "locked") == true {
									os.Remove(dir)
								}
								log.Errorf("failed to UpdateFileCid: %v", err)
							} else {
								os.Remove(dir)
							}
						}
					}
				}
			}
		}
	}
}
