package node

import (
	"context"
	"github.com/ipfs/go-ipfs/config"
	"github.com/ipfs/go-ipfs/core/box/service"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
	"github.com/libp2p/go-libp2p-core/host"
	"go.uber.org/fx"
)

//func NewService(lc fx.Lifecycle,
//	p2pHost host.Host,
//	cfg *config.Config) (*service.Service, error) {
//	repoPath, err := fsrepo.BestKnownPath()
//	if err != nil {
//		return nil, err
//	}
//	db, err := gorm.Open("sqlite3", repoPath+"/box.db")
//	if err != nil {
//		return nil, err
//	}
//	db.SingularTable(true)
//	dbStore := ds.NewDbStore(db)
//	peers, _ := cfg.BootstrapPeers()
//
//	svc := service.NewService(
//		p2pHost,
//		dbStore,
//		service.Config{
//			Servers:   peers,
//			SignKey:   cfg.Box.SignKey,
//			JwtKey:    cfg.Box.JwtKey,
//			TempDir:   repoPath + "/temp",
//			AvatarDir: repoPath + "/avatar",
//		})
//	lc.Append(fx.Hook{
//		OnStart: func(ctx context.Context) error {
//			return svc.Start()
//		},
//		OnStop: func(ctx context.Context) error {
//			svc.Stop()
//			return db.Close()
//		},
//	})
//	return svc, nil
//}

func NewService(lc fx.Lifecycle, p2pHost host.Host, cfg *config.Config) (*service.HttpServer, error) {
	httpserver := service.NewHttpServer(cfg, p2pHost)
	lc.Append(fx.Hook{
		OnStart: func(ctx context.Context) error {
			httpserver.Run()
			return nil
		},
		OnStop: func(ctx context.Context) error {
			httpserver.Shutdown()
			return nil
		},
	})
	return httpserver, nil
}
