package model

import "time"

type Share struct {
	Id          int    `gorm:"column:id;PRIMARY_KEY;AUTO_INCREMENT"`
	FormUser    int    `json:"form_user"`           //共享人
	ToUser      string `json:"to_user"`             //被共享人1,2,3,4,5
	FileId      string `gorm:"type:text" json:"file_id"` //文件id
	FileStartAt int64  `json:"file_start_at"`       //共享开始时间
	FileEndAt   int64  `json:"file_end_at"`         //共享结束时间
	FileType    int    `json:"file_type"`           //是否文件
	CreatedAt   *time.Time
}
