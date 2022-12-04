package model

type Cid struct {
	Id           int `gorm:"column:id;PRIMARY_KEY;AUTO_INCREMENT"`
	IpfsCid      string
	DealCid      string `json:"deal_cid"`
	PieceCid     string `json:"piece_cid"`
	Status       string `json:"status"`
	Verified     bool   `json:"verified"`
	Duration     int64  `json:"duration"`
	MinerId      string
	MinerUrl     string
	UploadPage   int64 //上传到第几片
	UploadStatus int   //是否上传完成
	FileSize     int
	Md5          string
	CreatedAt    int64
	UpdateAt     int64
	FileType     int64 //0普通文件1数据库
}
