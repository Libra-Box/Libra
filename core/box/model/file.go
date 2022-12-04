package model

import (
	"time"
)

type File struct {
	Id         string `gorm:"column:id;"`
	UserId     int    // 所属用户ID
	ParentId   string `gorm:"type:varchar(100);"`
	Name       string `gorm:"type:varchar(100);"` // 文件名
	Cid        string `gorm:"index:idx_cid"`      // 在ipfs中cid
	Md5        string
	Size       int
	SubFiles   int    //子文件数量
	IsFolder   bool   //是否目录
	Ext        string //后缀名
	Star       bool   //是否收藏
	Share      bool   //是否共享
	UserList   string //用户id,1,2,3,4
	StartAt    int64  `json:"start_at"` //共享开始时间
	EndAt      int64  `json:"end_at"`   //共享结束时间
	UpdateAt   int64
	CreatedAt  int64
	DeletedAt  *time.Time
	AutoId     int    `gorm:"column:auto_id;PRIMARY_KEY;AUTO_INCREMENT"`
	IsSystem   int    //判断是否系统文件0否1是
	FormDevice string //文件来源
	IsGx       int
}

const (
	FileTypeUnknown int = iota
	FileTypeAudio
	FileTypeVideo
	FileTypeDoc
	FileTypeImage
	FileTypePackage
	FileTypeApk
)

type FileType struct {
	Type int
	Ext  string
}

var (
	FileTypeList   []FileType
	FileTypeMap    map[string]int
	FileTypeString map[int]string
)

func init() {
	FileTypeList = make([]FileType, 0)
	FileTypeMap = make(map[string]int)
	FileTypeString = make(map[int]string)
	insert := func(t int, ext string) {
		FileTypeList = append(FileTypeList, FileType{
			Type: t,
			Ext:  ext,
		})
		FileTypeMap[ext] = t
	}
	insert(FileTypeDoc, "doc")
	insert(FileTypeDoc, "docx")
	insert(FileTypeDoc, "wps")
	insert(FileTypeDoc, "pdf")
	insert(FileTypeDoc, "xls")
	insert(FileTypeDoc, "xlsx")
	insert(FileTypeDoc, "et")
	insert(FileTypeDoc, "ppt")
	insert(FileTypeDoc, "pptx")
	insert(FileTypeDoc, "txt")
	insert(FileTypeDoc, "csv")

	insert(FileTypeImage, "bmp")
	insert(FileTypeImage, "gif")
	insert(FileTypeImage, "jpg")
	insert(FileTypeImage, "png")
	insert(FileTypeImage, "tif")
	insert(FileTypeImage, "swf")
	insert(FileTypeImage, "webp")

	insert(FileTypeAudio, "mp3")
	insert(FileTypeAudio, "aac")
	insert(FileTypeAudio, "wav")
	insert(FileTypeAudio, "wma")
	insert(FileTypeAudio, "cad")
	insert(FileTypeAudio, "flac")
	insert(FileTypeAudio, "m4a")
	insert(FileTypeAudio, "mid")
	insert(FileTypeAudio, "mka")
	insert(FileTypeAudio, "mp2")
	insert(FileTypeAudio, "mpa")
	insert(FileTypeAudio, "mpc")
	insert(FileTypeAudio, "ape")
	insert(FileTypeAudio, "tta")
	insert(FileTypeAudio, "ogg")

	insert(FileTypeVideo, "avi")
	insert(FileTypeVideo, "asf")
	insert(FileTypeVideo, "wmv")
	insert(FileTypeVideo, "avs")
	insert(FileTypeVideo, "flv")
	insert(FileTypeVideo, "mkv")
	insert(FileTypeVideo, "mov")
	insert(FileTypeVideo, "3gp")
	insert(FileTypeVideo, "mp4")
	insert(FileTypeVideo, "mpg")
	insert(FileTypeVideo, "mpeg")
	insert(FileTypeVideo, "dat")
	insert(FileTypeVideo, "dsm")
	insert(FileTypeVideo, "ogm")
	insert(FileTypeVideo, "vob")
	insert(FileTypeVideo, "rm")
	insert(FileTypeVideo, "rmvb")
	insert(FileTypeVideo, "ts")
	insert(FileTypeVideo, "ifo")
	insert(FileTypeVideo, "nsv")

	insert(FileTypePackage, "rar")
	insert(FileTypePackage, "zip")
	insert(FileTypePackage, "arj")
	insert(FileTypePackage, "gz")
	insert(FileTypePackage, "tar")
	insert(FileTypePackage, "7z")
	insert(FileTypePackage, "z")

	insert(FileTypeApk, "apk")

	FileTypeString[FileTypeUnknown] = "未知类型"
	FileTypeString[FileTypeAudio] = "音频"
	FileTypeString[FileTypeVideo] = "视频"
	FileTypeString[FileTypeDoc] = "文档"
	FileTypeString[FileTypeImage] = "图片"
	FileTypeString[FileTypePackage] = "压缩包"
	FileTypeString[FileTypeApk] = "安装包"
}

func GetFileTypeExts(_type int) (list []string) {
	for _, v := range FileTypeList {
		if v.Type == _type {
			list = append(list, v.Ext)
		}
	}
	return list
}
func GetFileTypeExtsAll(_type int) (list []string) {
	for _, v := range FileTypeList {
		list = append(list, v.Ext)
	}
	return list
}

func GetFileTypeString(ext string) string {
	if t, ok := FileTypeMap[ext]; ok {
		return FileTypeString[t]
	}
	return "未知类型"
}
