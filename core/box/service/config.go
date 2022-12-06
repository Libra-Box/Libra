package service

import (
	"github.com/ipfs/kubo/repo/fsrepo"
	"github.com/pelletier/go-toml"
	"io/ioutil"
	"os"
)

//Config 为系统全局配置

type Node struct {
	AuthToken      string `toml:"authToken"`
	ApiUrl         string `toml:"apiUrl"`
	Wallet         string `toml:"wallet"`
	Miner          string `toml:"miner"`
	VerifiedDeal   bool   `toml:"verifiedDeal"`
	FastRetrieval  bool   `toml:"fastRetrieval"`
	MinTarFileSize int64  `toml:"minTarFileSize"`
}
type Market struct {
	AuthToken string `toml:"authToken"`
	ApiUrl    string `toml:"apiUrl"`
}

type Sync struct {
	IsSync   bool   `toml:"isSync"`
	SyncTime string `toml:"syncTime"`
	Host     string `toml:"host"`
}

type GateWays struct {
	Peers []string `toml:"peers"`
}

type ConfigBox struct {
	Node         Node     `toml:"node"`
	Market       Market   `toml:"market"`
	Sqlite       string   `toml:"sqlite"`
	IsGateWay    bool     `toml:"isGateWay"`
	HttpServer   string   `toml:"httpServer"`
	IsPrivateNet bool     `toml:"isPrivateNet"`
	GateWays     GateWays `toml:"gateWays"`
}

//读取配置文件
func GetConfig() (ConfigBox, error) {
	repoPath, _ := fsrepo.BestKnownPath()
	filePath := repoPath + "/configBox.toml"
	config := ConfigBox{}
	content, err := ioutil.ReadFile(filePath)
	if err != nil {
		log.Infof("解析config.toml读取错误: %v", err)
		return config, err
	}
	if toml.Unmarshal(content, &config) != nil {
		log.Infof("解析config.toml出错: %v", err)
		return config, err
	}
	return config, err
}

//初始化配置文件
func initConfigBox() {
	repoPath, _ := fsrepo.BestKnownPath()
	filePath := repoPath + "/configBox.toml"
	if IsFileExist(filePath) {
		log.Info("configBox.toml 已经存在")
		return
	}
	configBox := ConfigBox{
		Node: Node{
			AuthToken:      "",
			ApiUrl:         "ws://127.0.0.1:1234/rpc/v0",
			Wallet:         "",
			Miner:          "f001",
			VerifiedDeal:   true,
			FastRetrieval:  true,
			MinTarFileSize: 1024 * 1024 * 1024 * 2, //2147483648
		},
		Market: Market{
			AuthToken: "",
			ApiUrl:    "ws://127.0.0.1:1234/rpc/v0",
		},
		Sqlite:       "box.db",
		IsGateWay:    false,
		HttpServer:   "0.0.0.0:9988",
		IsPrivateNet: true,
		GateWays: GateWays{
			[]string{"/ip4/127.0.0.1/tcp/21606/p2p/12D3KooWN2Dw1izCfdYitZBRgo2jBw4dnmTgnFiQmq9L5BiQ8mTf"},
		},
	}
	data, err := toml.Marshal(configBox)
	if err != nil {
		log.Infof("解析config.toml出错: %v", err)
		panic("toml error")
	}
	err = ioutil.WriteFile(filePath, data, 0777)
	if err != nil {
		log.Infof("解析config.toml出错: %v", err)
		panic("toml error")
	}
}

func IsFileExist(filename string) bool {
	if _, err := os.Stat(filename); os.IsNotExist(err) {
		return false
	}
	return true
}
