package service

import (
	"context"
	"github.com/ipfs/kubo/core/box/model"
	"github.com/ipfs/kubo/core/box/pb"
	"sync/atomic"
	"time"
)

func (s *HttpServer) runSetDataToFileCoin(c context.Context) {
	ticker := time.NewTicker(time.Second)
	go func() {
		for _ = range ticker.C {
			if atomic.LoadInt32(&s.syncFile) == 1 {
				s.setDataToFileCoin(s.ctx)
			}
		}
	}()
}

func (s *HttpServer) setDataToFileCoin(c context.Context) {
	resp := &pb.CommonResp{
		Code: pb.Code_Success,
	}
	user, err := s.store.GetAdminUser("")
	if err != nil {
		log.Errorf("failed to GetAdminUser: %v", err)
	} else {
		if user.SyncFil == model.Disabled {
			log.Errorf("setDataToFileCoin %v", time.Now())
			count, list, err := s.store.GetFileAll(0, 1, 0)
			if err != nil {
				return
			}
			sumSize, err := s.store.SumFileAll()
			if err != nil {
				log.Errorf("SumFileAll request error : %v", err)
				return
			}
			lock.Lock()
			defer lock.Unlock()
			countS, err := s.store.InsertIpfsCid(count, list[0].AutoId, user.Snapshot, user.MinerId, user.MinerUrl)
			if err != nil {
				log.Errorf("InsertIpfsCid request error : %v", err)
				resp.Code = pb.Code_RequestParamError
			} else {
				file := model.CidBackups{
					MinerId:   user.MinerId,
					Status:    0,
					Price:     user.MinerPrice,
					CreatedAt: user.Snapshot,
					FileCount: countS,
					MinerUrl:  user.MinerUrl,
					FileSize:  sumSize.Size,
				}
				err = s.store.CreateItem(&file)
				if err != nil {
					log.Errorf("failed to create CidBackups: %v", err)
					return
				}
				atomic.StoreInt32(&s.syncFile, 0)
				log.Errorf("setDataToFileCoin_success %v", time.Now())
			}
		}
	}
}
