package pb

import (
	"context"
	"fmt"
	"github.com/gogo/protobuf/proto"
	logging "github.com/ipfs/go-log"
	"github.com/libp2p/go-libp2p/core/host"
	"github.com/libp2p/go-libp2p/core/network"
	"github.com/libp2p/go-libp2p/core/peer"
	"github.com/libp2p/go-libp2p/core/protocol"
	"github.com/libp2p/go-msgio/protoio"
	"reflect"
	"runtime/debug"
	"sync"
	"sync/atomic"
	"time"
)

var log = logging.Logger("pb")

func init() {
	logging.SetLogLevel("pb", "info")
}

var streamIdleTimeout = 1 * time.Minute
var ErrReadTimeout = fmt.Errorf("timed out reading response")
var ErrCancel = fmt.Errorf("cancel request")

type BoxMessenger struct {
	ctx         context.Context
	p2pHost     host.Host
	msgNonce    uint32
	locker      sync.RWMutex
	msgHandlers map[protocol.ID]HandlersChain
}

func NewBoxMessenger(ctx context.Context, p2pHost host.Host) *BoxMessenger {
	m := &BoxMessenger{
		ctx:         ctx,
		p2pHost:     p2pHost,
		msgHandlers: make(map[protocol.ID]HandlersChain),
	}
	return m
}

func (m *BoxMessenger) SendRequest(ctx context.Context, protocol protocol.ID, to peer.ID, req proto.Message) (resp interface{}, err error) {

	s, err := m.p2pHost.NewStream(ctx, to, protocol)
	if err != nil {
		return nil, err
	}
	defer s.Close()

	w := protoio.NewDelimitedWriter(s)
	err = w.WriteMsg(req)
	if err != nil {
		return nil, err
	}

	wg := sync.WaitGroup{}
	wg.Add(1)

	ch := make(chan interface{}, 1)
	go func() {
		defer wg.Done()
		msg, _ := m.readResponse(s)
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
		}
	}
	wg.Wait()

	if resp != nil {
		return resp, nil
	}
	return nil, ErrCancel
}

func (m *BoxMessenger) SendMessage(ctx context.Context, protocol protocol.ID, to peer.ID, msg proto.Message) error {
	s, err := m.p2pHost.NewStream(ctx, to, protocol)
	if err != nil {
		return err
	}
	defer s.Close()

	w := protoio.NewDelimitedWriter(s)
	return w.WriteMsg(msg)
}

func (m *BoxMessenger) SetMessageHandler(id protocol.ID, h ...MessageHandler) {
	m.p2pHost.SetStreamHandler(id, m.handleNewStream)
	m.msgHandlers[id] = h
}

func (m *BoxMessenger) handleNewStream(s network.Stream) {
	log.Infof("handleNewStream: %s, %v", s.ID(), s.Protocol())

	msgHandler := m.msgHandlers[s.Protocol()]
	if m.handleNewMessage(s, msgHandler) {
		// If we exited without error, close gracefully.
		_ = s.Close()
	} else {
		// otherwise, send an error.
		_ = s.Reset()
	}
}

func (m *BoxMessenger) readResponse(s network.Stream) (interface{}, bool) {
	r := protoio.NewDelimitedReader(s, network.MessageSizeMax)

	msgType, ok := ProtocolResponseType[s.Protocol()]
	if !ok {
		log.Errorf(" ProtocolMessageType not registered : %v", s.Protocol())
		return nil, false
	}
	msg := reflect.New(msgType).Interface()
	err := r.ReadMsg(msg.(proto.Message))
	if err != nil {
		log.Errorf("failed to readMsg: %v", err)
		return nil, false
	}
	return msg, true
}

func (m *BoxMessenger) handleNewMessage(s network.Stream, msgHandlers HandlersChain) bool {
	defer func() {
		if err := recover(); err != nil {
			log.Errorf("handler message: %v", err)
			log.Errorf("stack: %v", string(debug.Stack()))
		}
	}()

	msgType, ok := ProtocolRequestType[s.Protocol()]
	if !ok {
		log.Errorf(" ProtocolMessageType not registered : %v", s.Protocol())
		return false
	}
	msg := reflect.New(msgType).Interface()

	r := protoio.NewDelimitedReader(s, network.MessageSizeMax)
	w := protoio.NewDelimitedWriter(s)
	err := r.ReadMsg(msg.(proto.Message))
	if err != nil {
		log.Errorf("failed to readMsg: %v", err)
		return false
	}
	ctx := Context{
		Context: m.ctx,
		Writer:  w,
		Stream:  s,
		Msg:     msg,
	}
	for _, h := range msgHandlers {
		h(&ctx)
		if ctx.aborted {
			break
		}
	}
	return true
}

func (m *BoxMessenger) GetNonce() uint32 {
	return atomic.AddUint32(&m.msgNonce, 1)
}

var _ Messenger = &BoxMessenger{}
