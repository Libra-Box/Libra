package service

import (
	"context"
	"encoding/json"
	"github.com/jinzhu/gorm"
	"sync"
	"time"
)

var deleteRecycle sync.Mutex

func (s *HttpServer) runDeleteRecycleCid(c context.Context) {
	//s.wg.Add(1)
	//go func() {
	//	defer func() {
	//		s.wg.Done()
	//	}()
	//
	//	defer ticker.Stop()
	//	for {
	//		select {
	//		case <-ticker.C:
	//			now := time.Now()
	//			if now.Hour() == 1 {
	//				//2点
	//				s.deleteRecycleCid(c)
	//			}
	//
	//		case <-c.Done():
	//			return
	//		}
	//	}
	//}()
	ticker := time.NewTicker(time.Minute * 5)
	go func() {
		for _ = range ticker.C {
			now := time.Now()
			if now.Hour() == 1 {
				//2点
				s.deleteRecycleCid(c)
			}
		}
	}()
}

func (s *HttpServer) deleteRecycleCid(c context.Context) {

	log.Errorf("deleteRecycleCid %v", time.Now())
	deleteRecycle.Lock()
	list, err := s.store.GetAllDelRecycles()

	if err != nil {
		log.Errorf("faild to get recycles: %v", err)
		deleteRecycle.Unlock()
		return
	}
	if len(list) > 0 {
		var fileIds []int32
		var recycleIds []int32
		for _, v := range list {
			ids := make([]int32, 0)
			err = json.Unmarshal([]byte(v.FileIds), &ids)
			if err != nil {
				log.Errorf("faild to Unmarshal: %v", err)
			} else {
				fileIds = append(fileIds, ids...)
				recycleIds = append(recycleIds, int32(v.Id))

				for _, id := range fileIds {
					lock.Lock()
					file, err := s.store.UnscopedGetFileByAutoId(id)
					lock.Unlock()
					if err != nil {
						//log.Errorf("faild to get file: %v", err)
					} else {
						lock.Lock()
						err = s.store.UnscopedFileDelete(id)
						lock.Unlock()
						if err != nil {
							//log.Errorf("faild to delete fileDelete: %v", err)
						} else {
							if !file.IsFolder {
								lock.Lock()
								_, err = s.store.GetFileByCid(file.Cid)
								lock.Unlock()
								if err == gorm.ErrRecordNotFound {
									err = s.unpinFile(file.Cid)
									if err != nil {
										log.Errorf("faild to unpin file: %v", err)
									}
								}
							}
						}
					}
				}
				lock.Lock()
				err = s.store.RecycleDelete(1, recycleIds, true)
				lock.Unlock()
				if err != nil {
					log.Errorf("faild to delete recycle: %v", err)
				}
			}
		}
	}
	deleteRecycle.Unlock()
}
