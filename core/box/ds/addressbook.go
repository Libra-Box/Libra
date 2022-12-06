package ds

import (
	"github.com/ipfs/kubo/core/box/model"
)

func (s *DbStore) AddressbookList(userId, limit, offset int) (count int, list []*model.Addressbook, _ error) {

	sql := s.db
	sql = sql.Model(&model.Addressbook{}).Where("user_id=?", userId)
	ret := sql.Count(&count)
	if ret.Error != nil {
		log.Errorf("count: %v", ret.Error.Error())
		return 0, nil, ret.Error
	}
	if count == 0 {
		return count, list, nil
	}
	if offset >= 0 && limit > 0 {
		sql = sql.Offset(offset).Limit(limit)
	}
	sql = sql.Order("created_at DESC")
	ret = sql.Find(&list)
	if ret.Error != nil {
		log.Errorf("Find: %v", ret.Error.Error())
		return 0, nil, ret.Error
	}

	return count, list, nil
}

func (s *DbStore) AppointAddressList(id int32) (count int, list []*model.Addressbook, _ error) {

	sql := s.db
	sql = sql.Model(&model.Addressbook{}).Where("id=?", id)
	ret := sql.Count(&count)
	if ret.Error != nil {
		log.Errorf("count: %v", ret.Error.Error())
		return 0, nil, ret.Error
	}
	if count == 0 {
		return count, list, nil
	}

	ret = sql.Find(&list)
	if ret.Error != nil {
		log.Errorf("Find: %v", ret.Error.Error())
		return 0, nil, ret.Error
	}

	return count, list, nil
}
