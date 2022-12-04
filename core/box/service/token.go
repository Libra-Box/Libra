package service

import (
	"context"
	"encoding/json"
	"github.com/google/uuid"
	"github.com/ipfs/go-ipfs/core/box/pb"
	"github.com/ipfs/go-ipfs/pkg/xjwt"
	"github.com/ipfs/go-ipfs/pkg/xstruct"
	"time"
)

//http服务
func genUUidString() string {
	u, _ := uuid.NewUUID()
	return u.String()
}
func (s *HttpServer) LoginRequired(token string) pb.Code {
	user, code := s.parseToken(token)
	if code == pb.Code_Success {
		s.ctx = context.WithValue(s.ctx, "user", user)
		return pb.Code_Success
	} else {
		return code
	}
}
func (s *HttpServer) parseToken(token string) (user UserData, _ pb.Code) {
	//log.Errorf("token %v", token)
	u, ok := s.tokenUserM.Load(token)
	if !ok {
		return user, pb.Code_TokenError
	}
	user = u.(UserData)
	if user.ExpiredAt < time.Now().Unix() {
		return user, pb.Code_TokenExpired
	}
	return user, pb.Code_Success
}

//~~~~~~~~~~~~~~~~~~以下是李跃代码--------------------------

type tokenGetter interface {
	GetNonce() uint32
	GetToken() string
}

type commonResp struct {
	Nonce uint32  `json:"nonce"`
	Code  pb.Code `json:"code"`
	Msg   string  `json:"msg"`
}

func makeCommonResponse(from *commonResp, to interface{}) {
	data, _ := json.Marshal(from)
	json.Unmarshal(data, to)
}

func currentUser(c *pb.Context) UserData {
	val := c.Context.Value("user")
	return val.(UserData)
}

//func (s *Service) LoginRequired(c *pb.Context) {
//	getter, ok := c.Msg.(tokenGetter)
//	if !ok {
//		c.Abort()
//		log.Errorf("message error: %+v", c.Msg)
//		return
//	}
//	token := getter.GetToken()
//	//user, code := parseToken(s.conf.JwtKey, token)
//	user, code := s.parseToken(token)
//	if code == pb.Code_Success {
//		c.Context = context.WithValue(c.Context, "user", user)
//		return
//	}
//
//	msgType, ok := pb.ProtocolResponseType[c.Stream.Protocol()]
//	if !ok {
//		log.Errorf(" ProtocolMessageType not registered : %v", c.Stream.Protocol())
//		c.Abort()
//		return
//	}
//	comm := commonResp{Nonce: getter.GetNonce(), Code: code}
//	msg := reflect.New(msgType).Interface()
//	makeCommonResponse(&comm, &msg)
//	s.respond(c, msg.(proto2.Message))
//	c.Abort()
//}

func parseToken(jwtSecretKey, token string) (user UserData, _ pb.Code) {
	j := xjwt.NewJWT(jwtSecretKey)
	claims, err := j.ParseToken(token)
	if err != nil {
		if err == xjwt.TokenExpired {
			return user, pb.Code_TokenExpired
		} else {
			return user, pb.Code_TokenError
		}
	}
	err = xstruct.MapToStruct(claims.Data, &user)
	if err != nil {
		return user, pb.Code_TokenError
	}
	return user, pb.Code_Success
}

//
//func (s *Service) parseToken(token string) (user UserData, _ pb.Code) {
//	u, ok := s.tokenUserM.Load(token)
//	if !ok {
//		return user, pb.Code_TokenError
//	}
//	user = u.(UserData)
//	if user.ExpiredAt < time.Now().Unix() {
//		return user, pb.Code_TokenExpired
//	}
//	return user, pb.Code_Success
//}
