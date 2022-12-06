package model

import "time"

type User struct {
	Id             int    `gorm:"column:id;PRIMARY_KEY;AUTO_INCREMENT"`
	Name           string `gorm:"unique_index:uk_name"`
	Password       string
	Role           int    // 0-normal,   1-admin
	AllocatedSpace uint64 // 已分配空间
	UsedSpace      uint64 // 已使用空间
	Status         int    // 0-可用 1-禁用
	DeviceName     string // 最后登录的手机设备名称
	UpdateAt       int64
	CreatedAt      int64
	DeletedAt      *time.Time `gorm:"unique_index:uk_name"`
	SyncFil        int        //是否同步到FileCoin 0否1是
	MinerId        string     //miner
	MinerUrl       string
	MinerPrice     string
	Snapshot       int64 //快照时间
}

const (
	NormalUser = 0
	Admin      = 1
)

const (
	Enabled  = 0
	Disabled = 1
)

const (
	DeviceUnActivated = 0
	DeviceActivated   = 1
)
