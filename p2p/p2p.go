package p2p

import (
	logging "github.com/ipfs/go-log"
	p2phost "github.com/libp2p/go-libp2p-core/host"
	peer "github.com/libp2p/go-libp2p-core/peer"
	pstore "github.com/libp2p/go-libp2p-core/peerstore"
)

var log = logging.Logger("p2p-mount")

// P2P structure holds information on currently running streams/Listeners
type P2P struct {
	ListenersLocal *Listeners
	ListenersP2P   *Listeners
	Streams        *StreamRegistry

	identity  peer.ID
	peerHost  p2phost.Host
	peerstore pstore.Peerstore
}

// New creates new P2P struct
func New(identity peer.ID, peerHost p2phost.Host, peerstore pstore.Peerstore) *P2P {
	p2p := &P2P{
		identity:  identity,
		peerHost:  peerHost,
		peerstore: peerstore,

		ListenersLocal: newListenersLocal(),
		ListenersP2P:   newListenersP2P(peerHost),

		Streams: &StreamRegistry{
			Streams:     map[uint64]*Stream{},
			ConnManager: peerHost.ConnManager(),
			conns:       map[peer.ID]int{},
		},
	}

	//httpserver := service.NewHttpServer(cfg, p2p.peerHost)
	//lc.Append(fx.Hook{
	//	OnStart: func(ctx context.Context) error {
	//		httpserver.Run()
	//		return nil
	//	},
	//	OnStop: func(ctx context.Context) error {
	//		httpserver.Shutdown()
	//		return nil
	//	},
	//})
	return p2p
}

// CheckProtoExists checks whether a pb handler is registered to
// mux handler
func (p2p *P2P) CheckProtoExists(proto string) bool {
	protos := p2p.peerHost.Mux().Protocols()

	for _, p := range protos {
		if p != proto {
			continue
		}
		return true
	}
	return false
}
