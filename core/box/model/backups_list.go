package model

type BackupsList struct {
	Id         int `gorm:"column:id;PRIMARY_KEY;AUTO_INCREMENT"`
	UserId     int
	DeviceName string
	FileCount  int
	CreatedAt  int64
}
