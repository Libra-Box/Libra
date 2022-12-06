package service

import (
	"encoding/json"
	"github.com/gin-gonic/gin"
	"github.com/gogo/protobuf/proto"
	"github.com/ipfs/kubo/core/box/model"
	"github.com/ipfs/kubo/core/box/pb"
	"github.com/jinzhu/gorm"
	"github.com/libp2p/go-libp2p-core/protocol"
	"io/ioutil"
)

//创建钱包
func (s *HttpServer) CreateWalletAddress(c *gin.Context) {
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
	req := &pb.CreateWalletReq{}
	err = proto.UnmarshalMerge(body, req)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	//token检查
	tokenCode := s.LoginRequired(req.Token)
	if tokenCode != pb.Code_Success {
		resp.Code = tokenCode
		respondProto(c, resp)
		return
	}

	//返回值
	type Res struct {
		Code string `json:"code"`
		Msg  string `json:"msg"`
		Data struct {
			Address string `json:"address"`
			Key     string `json:"key"`
		} `json:"data"`
	}

	var res Res
	createFilUrl := "http://wallet.debox.top/createFilWalletAddress"
	createErcUrl := "http://wallet.debox.top/createErcWalletAddress"
	if req.Type == 0 || req.Type == 1 {
		//创建FIL钱包
		_, err = s.store.GetWallet(1)
		if err != gorm.ErrRecordNotFound {
			log.Errorf("Wallet exist: %v", err)
			resp.Code = pb.Code_FileNameExist
			respondProto(c, resp)
			return
		}
		result := HttpGet(createFilUrl)
		err := json.Unmarshal(result, &res)
		if err != nil {
			log.Errorf("create wallet error: %v", err)
			resp.Code = pb.Code_Failure
			resp.Msg = err.Error()
			respondProto(c, resp)
			return
		}
		if res.Code == "1" {
			log.Errorf("create wallet error: %v", err)
			resp.Code = pb.Code_Failure
			resp.Msg = res.Msg
			respondProto(c, resp)
			return
		}
		walletFil := &model.Wallet{
			Address: res.Data.Address,
			Type:    1,
			Key:     res.Data.Key,
		}
		err = s.store.CreateItem(walletFil)
		if err != nil {
			log.Errorf("create wallet error: %v", err)
			resp.Code = pb.Code_IoError
			respondProto(c, resp)
			return
		}
	}

	if req.Type == 0 || req.Type == 2 {
		//创建ERC20钱包
		_, err = s.store.GetWallet(2)
		if err != gorm.ErrRecordNotFound {
			log.Errorf("Wallet exist: %v", err)
			resp.Code = pb.Code_FileNameExist
			respondProto(c, resp)
			return
		}
		result := HttpGet(createErcUrl)
		err := json.Unmarshal(result, &res)
		if err != nil {
			log.Errorf("create wallet error: %v", err)
			resp.Code = pb.Code_Failure
			resp.Msg = err.Error()
			respondProto(c, resp)
			return
		}
		if res.Code == "1" {
			log.Errorf("create wallet error: %v", err)
			resp.Code = pb.Code_Failure
			resp.Msg = res.Msg
			respondProto(c, resp)
			return
		}
		walletEth := &model.Wallet{
			Address: res.Data.Address,
			Type:    2,
			Key:     res.Data.Key,
		}
		err = s.store.CreateItem(walletEth)
		if err != nil {
			log.Errorf("create wallet error: %v", err)
			resp.Code = pb.Code_IoError
			respondProto(c, resp)
			return
		}
	}
	respondProto(c, resp)
}

func (s *HttpServer) WalletAddressList(c *gin.Context) {
	protoc := protocol.ID(c.Request.Header.Get("PROTOCOL"))
	peerId := c.Request.Header.Get("PEER_ID")
	resp := &pb.GetWalletResp{
		Code: pb.Code_Success,
	}
	body, err := ioutil.ReadAll(c.Request.Body)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	req := &pb.GetWalletReq{}
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

	list, err := s.store.GetAllWallet(req.Type)
	if err != nil {
		log.Errorf("failed to get file list: %v", err)
		resp.Code = pb.Code_DbError
		respondProto(c, resp)
		return
	}
	resp.Items = make([]*pb.WalletItem, len(list))
	for i, v := range list {
		resp.Items[i] = &pb.WalletItem{
			Type:    int32(v.Type),
			Address: v.Address,
		}
	}
	respondProto(c, resp)
	return
}

func (s *HttpServer) GetWalletKey(c *gin.Context) {
	protoc := protocol.ID(c.Request.Header.Get("PROTOCOL"))
	peerId := c.Request.Header.Get("PEER_ID")
	resp := &pb.GetWalletKeyResp{
		Code: pb.Code_Success,
	}
	body, err := ioutil.ReadAll(c.Request.Body)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	req := &pb.GetWalletKeyReq{}
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

	list, err := s.store.GetWalletKey(req.Address)
	if err != nil {
		log.Errorf("failed to get file list: %v", err)
		resp.Code = pb.Code_DbError
		respondProto(c, resp)
		return
	}
	resp.AddressKey = list.Key
	respondProto(c, resp)
	return
}
