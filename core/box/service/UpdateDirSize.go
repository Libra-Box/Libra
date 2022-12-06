package service

import (
	"context"
	"github.com/ipfs/kubo/core/box/model"
	"sync/atomic"
	"time"
)

func (s *HttpServer) runUpdateDirSize() {
	ticker := time.NewTicker(time.Second)
	go func() {
		for _ = range ticker.C {
			if atomic.LoadInt32(&s.dirSizeDirty) == 1 {
				s.updateDirSize(s.ctx)
				atomic.StoreInt32(&s.dirSizeDirty, 0)
			}
		}
	}()
}

func (s *HttpServer) updateDirSize(c context.Context) {
	log.Info("start_updateDirSize")
	lock.Lock()
	files, err := s.store.GetAllFiles()
	lock.Unlock()
	if err != nil {
		log.Errorf("failed to get files: %v", err)
		return
	}

	children := make(map[string][]string, 0)
	idFile := make(map[string]*model.File, 0)
	oldSizes := make(map[string]int, 0)
	oldSubFiles := make(map[string]int, 0)

	idFile[""] = &model.File{IsFolder: true}
	for _, v := range files {
		idFile[v.Id] = v
		if v.IsFolder {
			oldSizes[v.Id] = v.Size
		}
		if nodes, ok := children[v.ParentId]; ok {
			nodes = append(nodes, v.Id)
			children[v.ParentId] = nodes
		} else {
			nodes := make([]string, 0)
			nodes = append(nodes, v.Id)
			children[v.ParentId] = nodes
		}
	}

	calDirCache("", children, idFile)

	for id, oldSize := range oldSizes {
		if idFile[id].Size != oldSize || idFile[id].SubFiles != oldSubFiles[id] {
			lock.Lock()
			s.store.UpdateDirCache(idFile[id])
			lock.Unlock()
		}
	}
	log.Info("end_updateDirSize")
}

func calDirCache(id string, children map[string][]string, idFile map[string]*model.File) {
	if !idFile[id].IsFolder {
		return
	}
	childrenSize := 0
	subFileCount := 0
	for _, childId := range children[id] {
		//log.Errorf("SubFiles:%s: %d", children[id], idFile[childId].Size)
		subFileCount += 1
		idFile[id].SubFiles = subFileCount
		if idFile[childId].IsFolder {
			calDirCache(childId, children, idFile)
		}
		childrenSize += idFile[childId].Size
		subFileCount += idFile[childId].SubFiles
	}
	idFile[id].Size = childrenSize
	idFile[id].SubFiles = subFileCount
}
