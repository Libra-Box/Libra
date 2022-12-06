package ds

import (
	"github.com/ipfs/kubo/core/box/model"
	"github.com/jinzhu/gorm"
)

func (s *DbStore) GetAllWallet(typeS int32) (list []*model.Wallet, _ error) {

	ret := s.db.Model(&model.Wallet{})
	if typeS > 0 {
		ret = ret.Where("type=?", typeS)
	}
	ret.Scan(&list)
	if ret.Error != nil {
		log.Errorf("%v", ret.Error.Error())
	}
	return list, ret.Error
}

func (s *DbStore) GetWalletKey(address string) (*model.Wallet, error) {

	var file model.Wallet
	ret := s.db.Model(&model.Wallet{}).Where("address=?", address).First(&file)
	if ret.Error != nil {
		if ret.Error != gorm.ErrRecordNotFound {
			log.Errorf("%v", ret.Error.Error())
		}
	}
	return &file, ret.Error
}
func (s *DbStore) GetWallet(typeS int32) (*model.Wallet, error) {

	var file model.Wallet
	ret := s.db.Model(&model.Wallet{}).Where("type=?", typeS).First(&file)
	if ret.Error != nil {
		if ret.Error != gorm.ErrRecordNotFound {
			log.Errorf("%v", ret.Error.Error())
		}
	}
	return &file, ret.Error
}
