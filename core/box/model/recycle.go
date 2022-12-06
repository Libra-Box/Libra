package model

import "time"

type Recycle struct {
	Id        int `gorm:"column:id;PRIMARY_KEY;AUTO_INCREMENT"`
	UserId    int `gorm:"index:user_id"`
	FileId    string
	FileIds   string `gorm:"type:text"`
	IsFolder  bool
	Name      string
	Ext       string
	Size      int
	CreatedAt int64
	DeletedAt *time.Time
}
