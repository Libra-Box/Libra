package requestProtobuf

import (
	"context"
	"errors"
	"fmt"
	logging "github.com/ipfs/go-log"
	"github.com/ipfs/kubo/core/box/pb"
	"github.com/libp2p/go-libp2p-core/host"
	"github.com/libp2p/go-libp2p-core/network"
	"github.com/libp2p/go-libp2p-core/peer"
	"github.com/libp2p/go-libp2p-core/protocol"
	"github.com/libp2p/go-msgio/protoio"
	ma "github.com/multiformats/go-multiaddr"
	"sync"
)

var log = logging.Logger("proto")

func init() {
	logging.SetLogLevel("proto", "info")
}

func SendRequest(ctx context.Context, p2pHost host.Host, protocolId protocol.ID, sendPeerId peer.ID, req []byte) (resp interface{}, err error) {
	info := peer.AddrInfo{
		Addrs: make([]ma.Multiaddr, 0),
	}
	if network.Connected == p2pHost.Network().Connectedness(sendPeerId) {
		info.ID = sendPeerId
	} else {
		//log.Infof("try connect RemotePeers %v", p2pHost.Peerstore().PeerInfo(sendPeerId))
		//err = p2pHost.Connect(ctx, p2pHost.Peerstore().PeerInfo(sendPeerId))
		//if err != nil {
		//	log.Errorf("connect RemotePeers error %v", err.Error())
		//	return nil, errors.New("RemotePeers not connect")
		//}
		return nil, errors.New("RemotePeers not connect")
	}
	s, err := p2pHost.NewStream(ctx, sendPeerId, "/box/relay/1.0.0")
	if err != nil {
		log.Errorf("SendRequest %v", err)
		return nil, err
	}
	defer s.Close()
	w := protoio.NewDelimitedWriter(s)
	var reqData = pb.RelayReq{
		ProtocolId: string(protocolId),
		BodyBuffer: req,
	}
	//msg := reflect.New(reflect.TypeOf(pb.RelayReq{})).Interface()
	err = w.WriteMsg(&reqData)
	if err != nil {
		return nil, err
	}
	wg := sync.WaitGroup{}
	wg.Add(1)

	ch := make(chan interface{}, 1)
	go func() {
		defer wg.Done()
		msg := readResponse(s)
		ch <- msg
	}()
loop:
	for {
		select {
		case c := <-ch:
			resp = c
			break loop
		case <-ctx.Done():
			s.Close()
			log.Infof("request time out")
			resp = nil
			break loop
		}
	}
	wg.Wait()

	if resp != nil {
		return resp, nil
	}
	return nil, fmt.Errorf("request timeout")
}

func readResponse(s network.Stream) interface{} {
	r := protoio.NewDelimitedReader(s, network.MessageSizeMax)
	msg := &pb.RelayResp{}
	err := r.ReadMsg(msg)
	if err != nil {
		log.Errorf("failed to readMsg: %v", err)
		return nil
	}
	return msg
}
