package service

import (
	"github.com/gin-gonic/gin"
	"github.com/gogo/protobuf/proto"
	ipfs "github.com/ipfs/kubo"
	"github.com/ipfs/kubo/core/box/pb"
	"github.com/klauspost/cpuid/v2"
	"github.com/libp2p/go-libp2p-core/protocol"
	"io"
	"io/ioutil"
	"net/http"
	"os"
	"strings"
)

//升级
func (s *HttpServer) Update_http(c *gin.Context) {
	protoc := protocol.ID(c.Request.Header.Get("PROTOCOL"))
	peerId := c.Request.Header.Get("PEER_ID")
	resp := &pb.BoxUpdateResp{
		Code: pb.Code_Success,
	}
	body, err := ioutil.ReadAll(c.Request.Body)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		resp.Msg = "request error"
		respondProto(c, resp)
		return
	}
	req := &pb.BoxUpdateReq{}
	err = proto.UnmarshalMerge(body, req)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		resp.Msg = "request error"
		respondProto(c, resp)
		return
	}
	log.Infof("req: %v", req)
	log.Infof("PROTOCOL: %v", protoc)
	log.Infof("PEER_ID: %v", peerId)
	//token检查
	tokenCode := s.LoginRequired(req.Token)
	if tokenCode != pb.Code_Success {
		resp.Code = tokenCode
		resp.Msg = "token error"
		respondProto(c, resp)
		return
	}
	//判断版本号
	if req.Version == ipfs.CurrentVersionNumber {
		log.Error("Version is New")
		resp.Code = pb.Code_Failure
		resp.Msg = "已经是最新版本"
		respondProto(c, resp)
		return
	}
	//下载升级包
	respData, err := http.Get(req.Url)
	if err != nil {
		log.Error("download app error")
		resp.Code = pb.Code_Failure
		resp.Msg = "下载安装包出错"
		respondProto(c, resp)
		return
	}
	defer respData.Body.Close()

	_ = os.Mkdir("/root/updateTemp", 0755)
	os.Remove("/root/updateTemp/ipfs")
	temp := "/root/updateTemp/ipfs"
	// 创建一个文件用于保存
	out, err := os.Create(temp)
	defer out.Close()
	if err != nil {
		log.Error("create app error")
		resp.Code = pb.Code_Failure
		resp.Msg = "创建临时文件出错"
		respondProto(c, resp)
		return
	}

	// 然后将响应流和文件流对接起来
	_, err = io.Copy(out, respData.Body)
	if err != nil {
		log.Error("download app error")
		resp.Code = pb.Code_Failure
		resp.Msg = "下载安装包出错"
		respondProto(c, resp)
		return
	}
	//判断软件的md5
	if GetFileMd5(temp) != req.Md5 {
		log.Error("app md5 is not same")
		resp.Code = pb.Code_Failure
		resp.Msg = "安装包校MD5验失败"
		respondProto(c, resp)
		return
	}
	err = os.Chmod(temp, 0755)
	if err != nil {
		log.Error("app chmod error")
		resp.Code = pb.Code_Failure
		resp.Msg = "安装包校权限校验失败"
		respondProto(c, resp)
		return
	}
	_ = os.Remove("/usr/local/bin/ipfs")
	_, _ = exec_shell("cp " + temp + " /usr/local/bin && systemctl restart debox.service")
	_ = os.Remove(temp)
	respondProto(c, resp)
}

func (s *HttpServer) GetVersionSN_http(c *gin.Context) {
	protoc := protocol.ID(c.Request.Header.Get("PROTOCOL"))
	peerId := c.Request.Header.Get("PEER_ID")
	resp := &pb.DeviceInfoResp{
		Code: pb.Code_Success,
	}
	body, err := ioutil.ReadAll(c.Request.Body)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	req := &pb.DeviceInfoReq{}
	err = proto.UnmarshalMerge(body, req)
	if err != nil {
		log.Errorf(" request error : %v", err)
		resp.Code = pb.Code_RequestParamError
		respondProto(c, resp)
		return
	}
	resp.Version = ipfs.CurrentVersionNumber
	resp.Sn = s.p2pHost.ID().String()
	log.Infof("Framework: %v", cpuid.CPU.BrandName)
	if strings.Contains(cpuid.CPU.BrandName, "Intel") {
		resp.Framework = "x86"
	} else {
		resp.Framework = "arm"
	}

	log.Infof("req: %v", req)
	log.Infof("PROTOCOL: %v", protoc)
	log.Infof("PEER_ID: %v", peerId)
	//token检查
	tokenCode := s.LoginRequired(req.Token)
	if tokenCode != pb.Code_Success {
		resp.Code = tokenCode
		respondProto(c, resp)
		return
	}

	respondProto(c, resp)
	return
}
