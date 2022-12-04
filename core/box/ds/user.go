package ds

import (
	"bytes"
	"fmt"
	"github.com/ipfs/go-ipfs/core/box/model"
	"github.com/jinzhu/gorm"
	"math"
)

func (s *DbStore) UserCount() (count int, _ error) {

	ret := s.db.Model(&model.User{}).Count(&count)
	return count, ret.Error
}

func (s *DbStore) GetUserById(id int) (*model.User, error) {

	var user model.User
	ret := s.db.Model(&model.User{}).Where("id=?", id).First(&user)
	if ret.Error != nil {
		if ret.Error != gorm.ErrRecordNotFound {
			log.Errorf("%v", ret.Error.Error())
		}
	}
	return &user, ret.Error
}
func (s *DbStore) GetUserFileSize(id int) (count int, _ error) {

	ret := s.db.Model(&model.File{}).Where("user_id=?", id).Where("is_folder=?", 0).Count(&count)
	if ret.Error != nil {
		return count, ret.Error
	}
	return count, ret.Error
}
func (s *DbStore) GetAdminUser(name string) (*model.User, error) {

	var user model.User
	ret := s.db.Model(&model.User{}).Where("role=?", 1)
	if name != "" {
		ret = s.db.Model(&model.User{}).Where("role=?", 0).Where("name=?", name)
	}
	ret.First(&user)
	if ret.Error != nil {
		if ret.Error != gorm.ErrRecordNotFound {
			log.Errorf("%v", ret.Error.Error())
		}
	}
	return &user, ret.Error
}

func (s *DbStore) GetUserByName(name string) (*model.User, error) {

	var user model.User
	ret := s.db.Model(&model.User{}).Where("name=?", name).First(&user)
	if ret.Error != nil {
		if ret.Error != gorm.ErrRecordNotFound {
			log.Errorf("%v", ret.Error.Error())
		}
	}
	return &user, ret.Error
}

func (s *DbStore) GetAllUsers() (list []*model.User, _ error) {

	ret := s.db.Model(&model.User{}).Order("id").Scan(&list)
	if ret.Error != nil {
		log.Errorf("%v", ret.Error.Error())
	}
	return list, ret.Error
}

func (s *DbStore) GetAllUsersKeyword(userId int, keyword string) (list []*model.User, _ error) {

	type userList struct {
		FormUser int
	}
	var user []userList
	res := fmt.Sprintf("select form_user from share where instr(to_user,%d) group by form_user", userId)
	rets := s.db.Raw(res).Scan(&user)
	if rets.Error != nil {
		log.Errorf("%v", rets.Error.Error())
	}
	ids := make([]int, 0)
	ids = append(ids, userId)
	for _, v := range user {
		ids = append(ids, v.FormUser)
	}

	sql := s.db.Model(&model.User{}).Where("id in(?)", ids)
	if keyword != "" {
		sql = sql.Where("name LIKE ?", fmt.Sprintf("%%%v%%", keyword))
	}
	//ids := strings.Replace(strings.Trim(fmt.Sprint(slice), "[]"), " ", ",", -1)
	ret := sql.Find(&list)
	if ret.Error != nil {
		log.Errorf("%v", ret.Error.Error())
	}
	return list, ret.Error
}

func (s *DbStore) UpdatePassword(user *model.User) error {
	mm := map[string]interface{}{
		"password": user.Password,
	}
	return s.updateUser(user.Id, mm)
}

func (s *DbStore) UpdateName(user *model.User) error {
	mm := map[string]interface{}{
		"name": user.Name,
	}
	return s.updateUser(user.Id, mm)
}

func (s *DbStore) UpdateUserSpace(user *model.User) error {
	mm := map[string]interface{}{
		"allocated_space": user.AllocatedSpace,
		"used_space":      user.UsedSpace,
	}
	return s.updateUser(user.Id, mm)
}

func (s *DbStore) UpdateUserStatus(user *model.User) error {
	mm := map[string]interface{}{
		"status": user.Status,
	}
	return s.updateUser(user.Id, mm)
}
func (s *DbStore) UpdateUserSyncFil(user *model.User, timeS int64, minerId string, url string, price string) error {
	mm := map[string]interface{}{
		"sync_fil":    user.SyncFil,
		"snapshot":    timeS,
		"miner_id":    minerId,
		"miner_url":   url,
		"miner_price": price,
	}
	return s.updateUserSyncFil(mm)
}
func (s *DbStore) UpdateUserDeviceName(user *model.User) error {
	mm := map[string]interface{}{
		"deviceName": user.DeviceName,
	}
	return s.updateUser(user.Id, mm)
}

func (s *DbStore) updateUser(id int, mm map[string]interface{}) error {

	ret := s.db.Model(&model.User{}).Where("id=?", id).Updates(mm)
	if ret.Error != nil {
		log.Errorf("failed to update user: %v", ret.Error)
	}
	return ret.Error
}
func (s *DbStore) updateUserSyncFil(mm map[string]interface{}) error {

	ret := s.db.Model(&model.User{}).Updates(mm)
	if ret.Error != nil {
		log.Errorf("failed to update user: %v", ret.Error)
	}
	return ret.Error
}
func (s *DbStore) InsertIpfsCid(count int, id int, timeS int64, minerId string, minerUrl string) (countS int, _ error) {
	offset := 0
	limit := 500
	ss := float64(count) / float64(limit)
	page := math.Ceil(ss)
	pages := int(page)
	countS = 0
	sql := "insert into cid (ipfs_cid,status,duration,miner_id,created_at,file_size,upload_page,upload_status,md5,file_type,miner_url) values"
	for i := 0; i < pages; i++ {
		offset = i * limit
		total, list, _ := s.GetFileAll(offset, limit, id)
		countS = total
		var buffer bytes.Buffer
		if _, err := buffer.WriteString(sql); err != nil {
			return countS, err
		}
		for i, k := range list {
			if i == len(list)-1 {
				buffer.WriteString(fmt.Sprintf("('%s',%d,%d,'%s',%d,%d,%d,%d,'%s',%d,'%s');", k.Cid, 0, 0, minerId, timeS, k.Size, 0, 0, k.Md5, 0, minerUrl))
			} else {
				buffer.WriteString(fmt.Sprintf("('%s',%d,%d,'%s',%d,%d,%d,%d,'%s',%d,'%s'),", k.Cid, 0, 0, minerId, timeS, k.Size, 0, 0, k.Md5, 0, minerUrl))
			}
		}
		errs := s.db.Exec(buffer.String())
		if errs != nil {
			//fmt.Println(errs)
		}
	}

	return countS, nil
}
