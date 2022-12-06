package model

type Wallet struct {
	Id      int `gorm:"column:id;PRIMARY_KEY;AUTO_INCREMENT"`
	Address string
	Type    int //1 Fil钱包，2 ETH系列钱包
	Key     string
}
