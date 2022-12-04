package service

import (
	"bytes"
	"context"
	"fmt"
	"github.com/ipfs/go-ipfs/core/box/model"
	"strconv"
	"strings"
	"sync/atomic"
	"time"
)

func (s *HttpServer) runFileShare() {
	ticker := time.NewTicker(time.Second)
	go func() {
		for _ = range ticker.C {
			if atomic.LoadInt32(&s.fileShare) == 1 {
				s.runUpdateFileShare(s.ctx)
				atomic.StoreInt32(&s.fileShare, 0)
			}
		}
	}()
}
func (s *HttpServer) runUpdateFileShare(ctx context.Context) {

	log.Errorf("runUpdateFileShare %v", time.Now())
	files, err := s.store.GetAllShareFiles() //获取主表共享文件
	if err != nil {
		log.Errorf("failed to GetAllShareFiles: %v", err)
		return
	}
	if len(files) > 0 {
		idFile := make(map[string]*model.File, 0)
		for _, l := range files {
			idFile[l.Id] = l
			ids := make([]string, 0)
			ids = append(ids, l.Id)
			lock.Lock()
			children, err := s.store.GetFileShareIdList(ids) //根据父级得到对应的子集文件
			lock.Unlock()
			if err != nil {
				log.Errorf("failed to GetFileShareIdList: %v", err)
				return
			}
			if len(children) > 0 {
				idArr := make([]string, 0)
				fileInfo := make(map[string]*model.File, 0)
				for _, v := range children {
					idArr = append(idArr, v.Id)
					fileInfo[v.Id] = v
				}
				lock.Lock()
				err = s.store.DelUserShareFiles(idFile[l.Id].UserId, idFile[l.Id].UserList) //删除共享表中数据
				lock.Unlock()
				if err != nil {
					log.Errorf("failed to DelShareFiles: %v", err)
					return
				}
				sql := "insert into share (form_user,to_user,file_id,file_type,file_start_at,file_end_at,created_at) values"
				size := 1000
				page := len(idArr) / size
				if len(idArr)%size != 0 {
					page += 1
				}
				for a := 1; a <= page; a++ {
					var buffer bytes.Buffer
					buffer.WriteString(sql)
					bills := make([]string, 0)
					if a == page {
						bills = idArr[(a-1)*size:]
					} else {
						bills = idArr[(a-1)*size : a*size]
					}
					uList := strings.Replace(strings.Trim(fmt.Sprint(idFile[l.Id].UserList), "[]"), " ", ",", -1)
					for i, k := range bills {
						if i == len(bills)-1 {
							buffer.WriteString(fmt.Sprintf("(%d,'%s','%s',%s,%d,%d,%d);", idFile[l.Id].UserId, uList, k, strconv.FormatBool(fileInfo[k].IsFolder), idFile[l.Id].StartAt, idFile[l.Id].EndAt, time.Now().Unix()))
						} else {
							buffer.WriteString(fmt.Sprintf("(%d,'%s','%s',%s,%d,%d,%d),", idFile[l.Id].UserId, uList, k, strconv.FormatBool(fileInfo[k].IsFolder), idFile[l.Id].StartAt, idFile[l.Id].EndAt, time.Now().Unix()))
						}
					}
					lock.Lock()
					errs := s.store.BatchInsert(buffer.String())
					lock.Unlock()
					//fmt.Println(buffer.String())
					if errs != nil {
						log.Errorf("failed to BatchInsert: %v", errs)
					}
				}
			}
		}
	}
}
