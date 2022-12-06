package service

import (
	"github.com/gin-gonic/gin"
	"github.com/gogo/protobuf/proto"
	"github.com/ipfs/kubo/core/box/model"
	"github.com/ipfs/kubo/core/box/pb"
	"github.com/libp2p/go-libp2p/core/protocol"
	"io/ioutil"
	"net"
	"strings"
	"sync"
	"time"
)

var lock sync.Mutex

func (s *HttpServer) GetBoxAddress_http(c *gin.Context) {
	lock.Lock()
	defer lock.Unlock()
	protoc := protocol.ID(c.Request.Header.Get("PROTOCOL"))
	peerId := c.Request.Header.Get("PEER_ID")
	resp := &pb.PeerAddressResp{
		Code: pb.Code_Success,
	}
	body, err := ioutil.ReadAll(c.Request.Body)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	req := &pb.PeerAddressReq{}
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
	addrs, err := net.InterfaceAddrs()
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	for _, address := range addrs {
		// 检查ip地址判断是否回环地址
		if ipnet, ok := address.(*net.IPNet); ok && !ipnet.IP.IsLoopback() {
			if ipnet.IP.To4() != nil {
				port := strings.Split(s.httpHost, ":")[1]
				localIp := "http://" + ipnet.IP.String() + ":" + port + "/v1"
				log.Infof("localip : %v", localIp)
				resp.PeerAddress = []string{localIp}
			}
		}
	}
	respondProto(c, resp)
}

func (s *HttpServer) AddressbookBackup_http(c *gin.Context) {
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
	req := &pb.AddressbookBackupReq{}
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
	log.Infof("ContentType: %v", c.ContentType())
	log.Infof("PROTOCOL: %v", protoc)
	log.Infof("PEER_ID: %v", peerId)

	u := s.ctx.Value("user").(UserData)
	//if u.Role != model.Admin {
	//	log.Errorf("no permision")
	//	resp.Code = pb.Code_Failure
	//	respondProto(c, resp)
	//	return
	//}
	now := time.Now()
	user := model.Addressbook{
		UserId:     u.Id,
		DeviceName: req.DeviceName,
		Content:    req.Content,
		CreatedAt:  now.Unix(),
	}
	err = s.store.CreateItem(&user)
	if err != nil {
		log.Errorf("failed to create user: %v", err)
		resp.Code = pb.Code_DbError
		respondProto(c, resp)
		return
	}
	defer respondProto(c, resp)
	return
}

func (s *HttpServer) AddressbookDelete_http(c *gin.Context) {
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
	req := &pb.AddressbookDeleteReq{}
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

	err = s.store.DeleteItem(&model.Addressbook{
		Id: int(req.Id),
	})
	if err != nil {
		log.Errorf("failed to create user: %v", err)
		resp.Code = pb.Code_DbError
		respondProto(c, resp)
		return
	}
	respondProto(c, resp)
	return
}

func (s *HttpServer) AddressbookDeleteAll_http(c *gin.Context) {
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
	req := &pb.AddressbookDeleteAllReq{}
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
	_, list, err := s.store.AddressbookList(u.Id, 0, 10000) //这里逻辑有问题 todo
	if err != nil {
		log.Errorf("faild to get addressbook: %v", err)
		resp.Code = pb.Code_DbError
		respondProto(c, resp)
		return
	}
	for _, item := range list {
		s.store.DeleteItem(&model.Addressbook{
			Id: item.Id,
		})
	}
	respondProto(c, resp)
	return
}

func (s *HttpServer) AddressbookList_http(c *gin.Context) {
	lock.Lock()
	defer lock.Unlock()
	protoc := protocol.ID(c.Request.Header.Get("PROTOCOL"))
	peerId := c.Request.Header.Get("PEER_ID")
	resp := &pb.AddressbookListResp{
		Code: pb.Code_Success,
	}
	body, err := ioutil.ReadAll(c.Request.Body)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	req := &pb.AddressbookListReq{}
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
	total, list, err := s.store.AddressbookList(u.Id, int(req.Offset), int(req.Limit))
	if err != nil {
		log.Errorf("faild to get addressbook: %v", err)
		resp.Code = pb.Code_DbError
		respondProto(c, resp)
		return
	}
	resp.Total = int32(total)
	resp.Addressbooks = make([]*pb.Addressbook, 0)
	for _, v := range list {
		resp.Addressbooks = append(resp.Addressbooks, &pb.Addressbook{
			Id:         uint32(v.Id),
			DeviceName: v.DeviceName,
			//Content:    v.Content,
			BackupAt: uint64(v.CreatedAt),
		})
	}
	respondProto(c, resp)
	return
}

func (s *HttpServer) AppointAddressList_http(c *gin.Context) {
	lock.Lock()
	defer lock.Unlock()
	protoc := protocol.ID(c.Request.Header.Get("PROTOCOL"))
	peerId := c.Request.Header.Get("PEER_ID")
	resp := &pb.AppointAddressListResp{
		Code: pb.Code_Success,
	}
	body, err := ioutil.ReadAll(c.Request.Body)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	req := &pb.AppointAddressListReq{}
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

	//u := s.ctx.Value("user").(UserData)
	total, list, err := s.store.AppointAddressList(req.Id)
	if err != nil {
		log.Errorf("faild to get addressbook: %v", err)
		resp.Code = pb.Code_DbError
		respondProto(c, resp)
		return
	}
	resp.Total = int32(total)
	resp.Addressbooks = make([]*pb.Addressbook, 0)
	for _, v := range list {
		resp.Addressbooks = append(resp.Addressbooks, &pb.Addressbook{
			Id:         uint32(v.Id),
			DeviceName: v.DeviceName,
			Content:    v.Content,
			BackupAt:   uint64(v.CreatedAt),
		})
	}
	respondProto(c, resp)
	return
}
