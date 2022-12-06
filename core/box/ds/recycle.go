package ds

import (
	"encoding/json"
	"fmt"
	"github.com/ipfs/kubo/core/box/model"
	"github.com/jinzhu/gorm"
)

func (s *DbStore) GetRecyclesByIds(ids []int32) (list []*model.Recycle, err error) {

	ret := s.db.Model(&model.Recycle{}).Where("id IN(?)", ids).Scan(&list)
	if ret.Error != nil {
		log.Errorf("failed to get recycles: %v", ret.Error)
	}
	return list, ret.Error
}

func (s *DbStore) GetAllDelRecycles() (list []*model.Recycle, err error) {

	ret := s.db.Unscoped().Model(&model.Recycle{}).Where("deleted_at is not NULL").Scan(&list)
	if ret.Error != nil {
		log.Errorf("failed to get recycles: %v", ret.Error)
	}
	return list, ret.Error
}
func (s *DbStore) GetAllRecycles(userId int) (list []*model.Recycle, err error) {

	ret := s.db.Model(&model.Recycle{}).Where("user_id = ?", userId).Scan(&list)
	if ret.Error != nil {
		log.Errorf("failed to get recycles: %v", ret.Error)
	}
	return list, ret.Error
}

func (s *DbStore) RecycleDelete(userId int, ids []int32, typeS bool) error {

	ret := s.db.Where("user_id=?", userId).Where("id in(?)", ids)
	if typeS {
		ret = s.db.Unscoped().Where("id in(?)", ids)
	}
	ret.Delete(&model.Recycle{})
	if ret.Error != nil {
		log.Errorf("failed to delete file: %v", ret.Error)
	}
	return ret.Error
}
func (s *DbStore) UnscopedFileDelete(ids int32) error {

	ret := s.db.Unscoped().Where("auto_id=?", ids).Delete(&model.File{})
	if ret.Error != nil {
		log.Errorf("failed to delete file: %v", ret.Error)
	}
	return ret.Error
}

func (s *DbStore) RecycleStore(userId int, ids []int32) error {

	var list []*model.Recycle
	tx := s.db
	ret := tx.Model(&model.Recycle{}).Where("user_id=?", userId).Where("id in(?)", ids).Find(&list)
	if ret.Error != nil {
		return ret.Error
	}
	for _, item := range list {
		var fileIds []int32
		err := json.Unmarshal([]byte(item.FileIds), &fileIds)
		if err != nil {
			log.Errorf("json: %v", err.Error())
			return err
		}
		for _, id := range fileIds {
			//log.Errorf("id: %v", id)
			file, err := s.UnscopedGetFileByAutoId(id)
			if err != nil {
				log.Errorf("faild to get file: %v", err)
			} else {
				if _, err := s.GetFileInFolder(file.UserId, file.ParentId, file.Name, ""); err == nil {
					log.Errorf("file exist")
					err = s.UnscopedFileDelete(id)
					if err != nil {
						log.Errorf("faild to delete fileDelete: %v", err)
					}
				} else {
					ret = tx.Unscoped().Model(&model.File{}).Where("auto_id=?", id).UpdateColumn("deleted_at", gorm.Expr("NULL"))
					if ret.Error != nil {
						log.Errorf("%v", ret.Error.Error())
						break
					}
				}
			}
		}
	}
	ret = tx.Unscoped().Where("user_id=?", userId).Where("id in(?)", ids).Delete(&model.Recycle{})
	if ret.Error != nil {
		log.Errorf("failed to delete recycle: %v", ret.Error)
		return ret.Error
	}

	return ret.Error
}

//func (s *DbStore) RecycleStore(userId int, ids []int32) error {
//	var list []*model.Recycle
//	tx := s.db.Begin()
//	ret := tx.Model(&model.Recycle{}).Where("user_id=?", userId).Where("id in(?)", ids).Find(&list)
//	if ret.Error != nil {
//		tx.Rollback()
//		return ret.Error
//	}
//	for _, item := range list {
//		var fileIds []string
//		err := json.Unmarshal([]byte(item.FileIds), &fileIds)
//		if err != nil {
//			log.Errorf("%v", err.Error())
//			tx.Rollback()
//			return err
//		}
//		for _, id := range fileIds {
//			fmt.Println(id)
//			file, err := s.UnscopedGetFileById(id)
//			if err != nil {
//				log.Errorf("faild to get file: %v", err)
//			} else {
//				if _, err := s.GetFileInFolder(file.UserId, file.ParentId, file.Name); err == nil {
//					log.Errorf("file exist")
//					err = s.UnscopedFileDelete(id)
//					if err != nil {
//						log.Errorf("faild to delete fileDelete: %v", err)
//					}
//				} else {
//					ret = tx.Unscoped().Model(&model.File{}).Where("id in(?)", id).UpdateColumn("deleted_at", gorm.Expr("NULL"))
//					if ret.Error != nil {
//						log.Errorf("%v", ret.Error.Error())
//						tx.Rollback()
//						break
//					}
//				}
//			}
//		}
//		//ret = tx.Unscoped().Model(&model.File{}).Where("id in(?)", fileIds).UpdateColumn("deleted_at", gorm.Expr("NULL"))
//		//if ret.Error != nil {
//		//	log.Errorf("%v", ret.Error.Error())
//		//	tx.Rollback()
//		//	break
//		//}
//	}
//	ret = tx.Unscoped().Where("user_id=?", userId).Where("id in(?)", ids).Delete(&model.Recycle{})
//	if ret.Error != nil {
//		log.Errorf("failed to delete recycle: %v", ret.Error)
//		tx.Rollback()
//		return ret.Error
//	}
//	ret = tx.Commit()
//	return ret.Error
//}

func (s *DbStore) RecycleList(userId int, offset, limit int, order int, keyword string, fileType int32) (total int, list []*model.Recycle, _ error) {

	sql := s.db
	sql = sql.Model(&model.Recycle{}).Where("user_id=?", userId)
	if keyword != "" {
		sql = sql.Where("name LIKE ?", fmt.Sprintf("%%%v%%", keyword))
	}
	if fileType > 0 {
		exts := model.GetFileTypeExts(int(fileType))
		if len(exts) > 0 {
			sql = sql.Where("ext IN (?)", exts)
		}
	}
	ret := sql.Count(&total)
	if ret.Error != nil {
		log.Errorf("count: %v", ret.Error.Error())
		return 0, nil, ret.Error
	}
	if total == 0 {
		return total, list, nil
	}
	if offset >= 0 && limit > 0 {
		sql = sql.Offset(offset).Limit(limit)
	}
	sql = s.recycleOrder(sql, order)
	ret = sql.Find(&list)
	if ret.Error != nil {
		log.Errorf("Find: %v", ret.Error.Error())
		return 0, nil, ret.Error
	}

	return total, list, nil
}

func (s *DbStore) recycleOrder(sql *gorm.DB, order int) *gorm.DB {
	switch order {
	case 0:
		return sql.Order("name")
	case 1:
		return sql.Order("created_at DESC").Order("name")
	case 2:
		return sql.Order("size DESC").Order("name")
	case 3:
		return sql.Order("ext DESC").Order("name")
	}
	return sql.Order("name")
}
