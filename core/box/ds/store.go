package ds

import (
	"github.com/ipfs/go-ipfs/core/box/model"
	logging "github.com/ipfs/go-log/v2"
	"github.com/jinzhu/gorm"
	"strings"
)

var log = logging.Logger("ds")

type DbStore struct {
	db *gorm.DB
}

func NewDbStore(db *gorm.DB) *DbStore {
	ds := &DbStore{
		db: db,
	}
	ds.init()
	return ds
}

func (s *DbStore) init() {
	s.db.AutoMigrate(&model.Wallet{}, &model.User{}, &model.File{}, &model.Recycle{}, &model.Share{}, &model.Addressbook{}, &model.BackupsList{}, &model.FileLog{}, &model.SyncSet{}, &model.Cid{}, &model.CidBackups{})
}

func (s *DbStore) CreateItem(m interface{}) error {

	ret := s.db.Create(m)
	if ret.Error != nil {
		if !strings.Contains(ret.Error.Error(), "Duplicate") {
			log.Errorf("failed to create item: %v", ret.Error)
			return ret.Error
		}
		return nil
	}
	return ret.Error
}

func (s *DbStore) DeleteItem(m interface{}) error {
	ret := s.db.Delete(m)
	return ret.Error
}
