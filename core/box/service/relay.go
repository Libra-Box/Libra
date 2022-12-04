package service

import (
	"bytes"
	"context"
	"encoding/json"
	"github.com/gin-gonic/gin"
	"github.com/gogo/protobuf/proto"
	"github.com/ipfs/go-ipfs/config"
	"github.com/ipfs/go-ipfs/core/box/pb"
	requestProtobuf "github.com/ipfs/go-ipfs/core/box/request"
	"github.com/ipfs/go-ipfs/pkg/xcontext"
	"github.com/libp2p/go-libp2p-core/peer"
	"github.com/libp2p/go-libp2p-core/protocol"
	"io/ioutil"
	"net/http"
	"strings"
	"time"
)

func (s *HttpServer) RelayRespone(c *pb.Context) {
	req, _ := c.Msg.(*pb.RelayReq)
	//log.Infof("Relay form peer ProtocolId: %v", req.ProtocolId)
	log.Infof("Relay form peer: %v", c.Stream.Conn().RemotePeer())
	//log.Infof("Relay form peer BodyBuffer: %v", req.BodyBuffer)
	resp := &pb.RelayResp{
		ProtocolId: req.ProtocolId,
	}

	//http
	port := strings.Split(s.httpHost, ":")[1]
	reqUrl := "http://127.0.0.1:" + port + "/v1" + req.ProtocolId
	log.Infof("Relay to: %v", reqUrl)
	client := &http.Client{Timeout: 15 * time.Second}
	reqRelay, err := http.NewRequest("POST", reqUrl, bytes.NewReader(req.BodyBuffer))
	if err != nil {
		//to do
		log.Errorf("Relay form peer BodyBuffer error : %v", err)
		resp.Code = 100
		SendMsg(c, resp)
		return
	}
	reqRelay.Header.Set("PROTOCOL", req.ProtocolId)
	reqRelay.Header.Set("PEER_ID", c.Stream.Conn().LocalPeer().String())
	reqRelay.Header.Set("Content-Type", "application/x-protobuf")
	respRelay, err := client.Do(reqRelay)
	log.Infof("respRelay StatusCode: %v", respRelay.StatusCode)
	defer respRelay.Body.Close()
	if respRelay.StatusCode != 200 {
		resp.Code = 100
		SendMsg(c, resp)
		return
	}

	if err != nil {
		log.Errorf("requset error %v", err)
		resp.Code = 100
		SendMsg(c, resp)
		return
	}
	data, err := ioutil.ReadAll(respRelay.Body)
	resp.BodyBuffer = data
	//log.Infof("Relay resp: %v", resp)
	SendMsg(c, resp)
}

func (s *HttpServer) relayRequset(c *gin.Context) {
	relayUrl := c.Param("relay")
	if relayUrl == "/box/qrcode/scan/1.0.0" {
		s.ScanQrcode_http(c)
		return
	}
	if relayUrl == "/box/qrcode/get_token/1.0.0" {
		s.GetTokenByQrcode_http(c)
		return
	}
	protoc := protocol.ID(c.Request.Header.Get("PROTOCOL"))
	peerId := c.Request.Header.Get("PEER_ID")
	bodyData, err := ioutil.ReadAll(c.Request.Body)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"code": 0})
		return
	}
	//log.Infof("ContentType: %v", c.ContentType())
	//log.Infof("PROTOCOL: %v", protoc)
	log.Infof("relay: %v", relayUrl)
	log.Infof("PEER_ID: %v", peerId)
	//log.Infof("bodyData: %v", bodyData)

	peerID, _ := peer.Decode(peerId)
	ctx, cancel := context.WithTimeout(context.Background(), 15*time.Second)
	defer cancel()
	resp, err := requestProtobuf.SendRequest(ctx, s.p2pHost, protoc, peerID, bodyData)
	if err != nil {
		log.Errorf("SendRequest: %v", err)
		c.JSON(http.StatusNotFound, gin.H{"code": 0})
		return
	}
	if c.ContentType() == "application/x-protobuf" {
		if resp.(*pb.RelayResp).Code == 100 {
			c.JSON(http.StatusNotFound, gin.H{"code": 0})
			return
		}
		_, err = c.Writer.Write(resp.(*pb.RelayResp).BodyBuffer)
		if err != nil {
			c.Writer.WriteHeader(http.StatusNotFound)
		}
		return
	} else {
		c.JSON(http.StatusNotFound, gin.H{"code": 0})
	}
}

func SendMsg(c *pb.Context, msg proto.Message) {
	err := xcontext.Execute(c.Context, func(ctx context.Context) error {
		return c.Writer.WriteMsg(msg)
	}, xcontext.WithTimeout(time.Second*10))
	if err != nil {
		log.Errorw("failed to send message:", "err", err, "to", c.Stream.Conn().RemotePeer().String())
	}
}

func (s *HttpServer) updateBootstrap() {
	//http
	reqUrl := "https://api.debox.top/v1/getBootstrapPeers"
	response, err := http.Get(reqUrl)
	if err != nil {
		log.Errorf("httperr %v", err)
		return
	}
	body, err := ioutil.ReadAll(response.Body)
	if err != nil {
		log.Errorf("ioutil read error %v", err)
		return
	}
	response.Body.Close()
	var bootstrapPeers []string
	err = json.Unmarshal(body, &bootstrapPeers)
	if err != nil {
		log.Errorf("body json: %v", err)
		return
	}
	//log.Infof("bootstrapPeers: %v", bootstrapPeers)
	if len(bootstrapPeers) < 1 {
		log.Error("bootstrapPeers is empty")
		return
	}
	addrInfo, err := s.cfg.ParseBootstrapPeers2(bootstrapPeers)
	if err != nil {
		log.Errorf("ParseBootstrapPeers error %v", err)
		return
	}
	s.cfg.SetBootstrapPeers(addrInfo)

	//更新配置文件
	path, err := config.PathRoot()
	if err != nil {
		log.Errorf("PathRoot: %v", err)
		return
	}
	//log.Infof("PathRoot: %v", path)
	_, err = exec_shell("export IPFS_PATH=" + path + " && /usr/local/bin/ipfs bootstrap rm all")
	if err != nil {
		log.Error("exec_shell: export IPFS_PATH=" + path + " && /usr/local/bin/ipfs bootstrap rm all")
		return
	}
	for _, val := range bootstrapPeers {
		_, err := exec_shell("export IPFS_PATH=" + path + " && /usr/local/bin/ipfs bootstrap add " + val)
		if err != nil {
			log.Error("exec_shell: export IPFS_PATH=" + path + " && /usr/local/bin/ipfs bootstrap add " + val)
			return
		}
		//log.Infof("ipfs bootstrap add : %v", ss)
	}
}

func (s *HttpServer) updateBootstrapConfig() {
	//http
	reqUrl := "https://api.debox.top/v1/getBootstrapPeers"
	response, err := http.Get(reqUrl)
	if err != nil {
		log.Errorf("httperr %v", err)
	}
	body, err := ioutil.ReadAll(response.Body)
	if err != nil {
		log.Errorf("ioutil read error %v", err)
		return
	}
	response.Body.Close()
	var bootstrapPeers []string
	err = json.Unmarshal(body, &bootstrapPeers)
	if err != nil {
		log.Errorf("body json: %v", err)
		return
	}
	//log.Infof("bootstrapPeers: %v", bootstrapPeers)
	if len(bootstrapPeers) < 1 {
		log.Error("bootstrapPeers is empty")
		return
	}
	path, err := config.PathRoot()
	if err != nil {
		log.Errorf("PathRoot: %v", err)
		return
	}
	//log.Infof("PathRoot: %v", path)
	str, err := exec_shell("export IPFS_PATH=" + path + " && /usr/local/bin/ipfs bootstrap rm all")
	if err != nil {
		log.Error("exec_shell: export IPFS_PATH=" + path + " && /usr/local/bin/ipfs bootstrap rm all")
		return
	}
	log.Infof("ipfs bootstrap rm : %v", str)
	for _, val := range bootstrapPeers {
		ss, err := exec_shell("export IPFS_PATH=" + path + " && /usr/local/bin/ipfs bootstrap add " + val)
		if err != nil {
			log.Error("exec_shell: export IPFS_PATH=" + path + " && /usr/local/bin/ipfs bootstrap add " + val)
			return
		}
		log.Infof("ipfs bootstrap add : %v", ss)
	}
}
