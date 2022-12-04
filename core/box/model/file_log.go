package model

type FileLog struct {
	Id        int `gorm:"column:id;PRIMARY_KEY;AUTO_INCREMENT"`
	UserId    int
	FileId    string //文件id
	Status    int    //0新增
	IdList    string //文件id范围，0,100
	CreatedAt int64
}
