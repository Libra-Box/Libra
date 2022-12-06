package model

import "time"

// 通讯录
type Addressbook struct {
	Id         int `gorm:"column:id;PRIMARY_KEY;AUTO_INCREMENT"`
	UserId     int
	DeviceName string
	Content    string `gorm:"type:text"`
	CreatedAt  int64
	DeletedAt  *time.Time
}
