package model

type CidBackups struct {
	Id          int `gorm:"column:id;PRIMARY_KEY;AUTO_INCREMENT"`
	MinerId     string
	Status      int
	Price       string
	FileCount   int
	DataCid     string
	DataDealCid string
	MinerUrl    string
	CreatedAt   int64
	UpdateAt    int64
	FileSize    int64
}
