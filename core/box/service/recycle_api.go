package service

import (
	"context"
	"encoding/json"
	"github.com/gin-gonic/gin"
	"github.com/gogo/protobuf/proto"
	"github.com/ipfs/go-cid"
	"github.com/ipfs/go-ipfs/core/box/model"
	"github.com/ipfs/go-ipfs/core/box/pb"
	"github.com/ipfs/interface-go-ipfs-core/path"
	"github.com/libp2p/go-libp2p-core/protocol"

	"io/ioutil"
)

func (s *HttpServer) RecycleList_http(c *gin.Context) {
	lock.Lock()
	defer lock.Unlock()
	protoc := protocol.ID(c.Request.Header.Get("PROTOCOL"))
	peerId := c.Request.Header.Get("PEER_ID")
	resp := &pb.RecycleListResp{
		Code: pb.Code_Success,
	}
	body, err := ioutil.ReadAll(c.Request.Body)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	req := &pb.RecycleListReq{}
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
	total, list, err := s.store.RecycleList(u.Id, int(req.Offset), int(req.Limit), int(req.Order), req.Keyword, req.FileType)
	if err != nil {
		log.Errorf("faild to get recycle: %v", err)
		resp.Code = pb.Code_DbError
		respondProto(c, resp)
		return
	}
	resp.Total = int32(total)
	resp.Items = make([]*pb.RecycleItem, 0)
	for _, v := range list {
		resp.Items = append(resp.Items, &pb.RecycleItem{
			Id:        int32(v.Id),
			FileId:    v.FileId,
			Name:      v.Name,
			IsFolder:  v.IsFolder,
			Size_:     int64(v.Size),
			CreatedAt: v.CreatedAt,
			Ext:       v.Ext,
		})
	}
	respondProto(c, resp)
	return
}

func (s *HttpServer) RecycleDelete_http(c *gin.Context) {
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
	req := &pb.RecycleDeleteReq{}
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
		log.Errorf("faild to get user: %v", err)
		resp.Code = pb.Code_DbError
		respondProto(c, resp)
		return
	}
	var list []*model.Recycle
	if len(req.Ids) > 0 {
		list, err = s.store.GetRecyclesByIds(req.Ids)
		if err != nil {
			log.Errorf("faild to get recycles: %v", err)
			resp.Code = pb.Code_DbError
			respondProto(c, resp)
			return
		}
	} else {
		list, err = s.store.GetAllRecycles(user.Id)
		if err != nil {
			log.Errorf("faild to get recycles: %v", err)
			resp.Code = pb.Code_DbError
			respondProto(c, resp)
			return
		}
	}

	var fileIds []int32
	var recycleIds []int32
	for _, v := range list {
		ids := make([]int32, 0)
		err = json.Unmarshal([]byte(v.FileIds), &ids)
		if err != nil {
			log.Errorf("faild to Unmarshal: %v", err)
			resp.Code = pb.Code_DbError
			respondProto(c, resp)
			return
		}
		fileIds = append(fileIds, ids...)
		user.UsedSpace -= uint64(v.Size)
		recycleIds = append(recycleIds, int32(v.Id))
	}

	err = s.store.RecycleDelete(user.Id, recycleIds, false)
	if err != nil {
		log.Errorf("faild to delete recycle: %v", err)
		resp.Code = pb.Code_DbError
		respondProto(c, resp)
		return
	}
	err = s.store.UpdateUserSpace(user)
	if err != nil {
		log.Errorf("faild to update user: %v", err)
		resp.Code = pb.Code_DbError
		respondProto(c, resp)
		return
	}

	// unpin files in IPFS
	//if s.coreApi != nil {
	//	for _, id := range fileIds {
	//		file, err := s.store.UnscopedGetFileById(id)
	//		if err != nil {
	//			log.Errorf("faild to get file: %v", err)
	//			resp.Code = pb.Code_DbError
	//			respondProto(c, resp)
	//			return
	//		}
	//		err = s.store.UnscopedFileDelete(user.Id, id)
	//		if err != nil {
	//			log.Errorf("faild to delete fileDelete: %v", err)
	//			resp.Code = pb.Code_DbError
	//			respondProto(c, resp)
	//			return
	//		}
	//		if !file.IsFolder {
	//			_, err = s.store.GetFileByCid(file.Cid)
	//			if err == gorm.ErrRecordNotFound {
	//				err = s.unpinFile(file.Cid)
	//				if err != nil {
	//					log.Errorf("faild to unpin file: %v", err)
	//					resp.Code = pb.Code_DbError
	//					respondProto(c, resp)
	//					return
	//				}
	//			}
	//		}
	//	}
	//}
	respondProto(c, resp)
	return
}

func (s *HttpServer) unpinFile(fileCid string) error {
	log.Errorf("unpinFile: %v", fileCid)
	cid, err := cid.Decode(fileCid)
	if err != nil {
		log.Errorf("failed to decode cid %v", err.Error())
		return err
	}
	cidPath := path.IpfsPath(cid)
	err = s.coreApi.Pin().Rm(context.Background(), cidPath)
	if err != nil {
		log.Errorf("failed to Pin rm cid %v", err)
		//return err
	}
	err = s.coreApi.Block().Rm(context.Background(), cidPath)
	if err != nil {
		log.Errorf("failed to Block rm cid %v", err)
		//return err
	}

	return nil
}

func (s *HttpServer) RecycleRestore_http(c *gin.Context) {
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
	req := &pb.RecycleRestoreReq{}
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
	err = s.store.RecycleStore(u.Id, req.Ids)
	if err != nil {
		log.Errorf("faild to delete recycle: %v", err)
		resp.Code = pb.Code_DbError
		respondProto(c, resp)
		return
	}
	respondProto(c, resp)
	return
}
