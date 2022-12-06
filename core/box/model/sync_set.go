package model

type SyncSet struct {
	Id         int `gorm:"column:id;PRIMARY_KEY;AUTO_INCREMENT"`
	UserId     int
	DeviceName string
	DevicePath string
	FileId     string
	Status     int //1本地到盒子2双向同步3云端到本地
	CreatedAt  int64
}
