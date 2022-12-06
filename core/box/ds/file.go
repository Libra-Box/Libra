package ds

import (
	"bytes"
	"encoding/json"
	"fmt"
	"github.com/ipfs/kubo/core/box/model"
	"github.com/ipfs/kubo/pkg/xfile"
	"github.com/jinzhu/gorm"
	"strconv"
	"strings"
	"time"
)

func (s *DbStore) GetFileById(id string) (*model.File, error) {

	var file model.File
	ret := s.db.Model(&model.File{}).Where("id=?", id).First(&file)
	if ret.Error != nil {
		if ret.Error != gorm.ErrRecordNotFound {
			log.Errorf("%v", ret.Error.Error())
		}
	}
	return &file, ret.Error
}
func (s *DbStore) GetFileByIdArr(id []string) (*model.File, error) {

	var file model.File
	ret := s.db.Model(&model.File{}).Where("id in(?)", id).First(&file)
	if ret.Error != nil {
		if ret.Error != gorm.ErrRecordNotFound {
			log.Errorf("%v", ret.Error.Error())
		}
	}
	return &file, ret.Error
}
func (s *DbStore) GetFileName(name string, parentId string) (file []*model.File, err error) {

	ret := s.db.Model(&model.File{}).Where("name=? and parent_id=?", name, parentId).Scan(&file)
	if ret.Error != nil {
		if ret.Error != gorm.ErrRecordNotFound {
			log.Errorf("%v", ret.Error.Error())
		}
	}
	return file, ret.Error
}

func (s *DbStore) GetFileByCid(cid string) (*model.File, error) {

	var file model.File
	ret := s.db.Model(&model.File{}).Where("cid=?", cid).First(&file)
	if ret.Error != nil {
		if ret.Error != gorm.ErrRecordNotFound {
			log.Errorf("%v", ret.Error.Error())
		}
	}
	return &file, ret.Error
}

func (s *DbStore) UnscopedGetFileById(id string) (*model.File, error) {

	var file model.File
	ret := s.db.Unscoped().Model(&model.File{}).Where("id=?", id).First(&file)
	if ret.Error != nil {
		if ret.Error != gorm.ErrRecordNotFound {
			log.Errorf("%v", ret.Error.Error())
		}
	}
	return &file, ret.Error
}
func (s *DbStore) UnscopedGetFileByAutoId(id int32) (*model.File, error) {

	var file model.File
	ret := s.db.Unscoped().Model(&model.File{}).Where("auto_id=?", id).First(&file)
	if ret.Error != nil {
		if ret.Error != gorm.ErrRecordNotFound {
			log.Errorf("%v", ret.Error.Error())
		}
	}
	return &file, ret.Error
}

func (s *DbStore) GetFileInFolder(userId int, parentId, name string, md5 string) (*model.File, error) {

	var file model.File
	ret := s.db.Model(&model.File{}).Where("user_id=?", userId).
		Where("parent_id=?", parentId).Where("name=?", name)
	if md5 != "" {
		ret = s.db.Model(&model.File{}).Where("user_id=?", userId).
			Where("parent_id=?", parentId).Where("name=?", name).Where("md5=?", md5)
	}
	ret = ret.First(&file)
	if ret.Error != nil {
		if ret.Error != gorm.ErrRecordNotFound {
			log.Errorf("%v", ret.Error.Error())
		}
	}
	return &file, ret.Error
}

type fileList struct {
	*model.File
	ParentName string
}

func (s *DbStore) FileList(userId, dirMask int, parentId string, fileType, starMask int, keyword string,
	order int, limit, offset int, isEqual int) (count int, list []fileList, _ error) {

	sql := s.db
	sql = sql.Table("file").Select("*,(select name from file as ff where file.parent_id=ff.id)parent_name").Where("user_id=?", userId)
	if parentId != "all" {
		sql = sql.Where("parent_id=?", parentId)
	}
	if dirMask > -1 {
		sql = sql.Where("is_folder=?", dirMask)
	}
	if starMask > -1 {
		sql = sql.Where("star=?", starMask)
	}
	if fileType > 0 {
		if fileType == 99 {
			exts := model.GetFileTypeExtsAll(fileType)
			if len(exts) > 0 {
				sql = sql.Where("ext not IN (?) and is_folder=?", exts, 0)
			}
		} else {
			exts := model.GetFileTypeExts(fileType)
			if len(exts) > 0 {
				sql = sql.Where("ext IN (?)", exts)
			}
		}
	}
	if keyword != "" && isEqual == 0 {
		sql = sql.Where("name LIKE ?", fmt.Sprintf("%%%v%%", keyword))
	}
	if keyword != "" && isEqual == 1 {
		sql = sql.Where("name=?", keyword)
	}
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
	sql = sql.Order("is_folder DESC")
	sql = s.fileOrder(sql, order)

	ret = sql.Find(&list)
	if ret.Error != nil {
		log.Errorf("Find: %v", ret.Error.Error())
		return 0, nil, ret.Error
	}

	return count, list, nil
}

func (s *DbStore) fileOrder(sql *gorm.DB, order int) *gorm.DB {
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

func (s *DbStore) UpdateFileName(file *model.File) error {
	mm := map[string]interface{}{
		"name":      file.Name,
		"ext":       xfile.Ext(file.Name),
		"update_at": time.Now().Unix(),
	}
	return s.updateFile(file.Id, mm)
}

func (s *DbStore) UpdateFileParent(file *model.File) error {
	mm := map[string]interface{}{
		"parent_id": file.ParentId,
	}
	return s.updateFile(file.Id, mm)
}

func (s *DbStore) UpdateDirCache(file *model.File) error {
	mm := map[string]interface{}{
		"size":      file.Size,
		"sub_files": file.SubFiles,
		"update_at": time.Now().Unix(),
	}
	return s.updateFile(file.Id, mm)
}
func (s *DbStore) UpdateFileMd5(id string, md5 string) error {
	mm := map[string]interface{}{
		"md5": md5,
	}
	return s.updateFile(id, mm)
}
func (s *DbStore) UpdateFileCid(id string, cid string) error {
	mm := map[string]interface{}{
		"cid": cid,
	}
	return s.updateFile(id, mm)
}
func (s *DbStore) updateFile(id string, mm map[string]interface{}) error {

	ret := s.db.Model(&model.File{}).Where("id=?", id).Updates(mm)
	if ret.Error != nil {
		log.Errorf("failed to update file: %v", ret.Error)
	}
	return ret.Error
}

func (s *DbStore) UpdateFileStar(userId int, fileIs []string, star bool) error {

	mm := map[string]interface{}{
		"star": star,
	}
	ret := s.db.Model(&model.File{}).Where("user_id=?", userId).Where("id in(?)", fileIs).Updates(mm)
	if ret.Error != nil {
		log.Errorf("failed to update file: %v", ret.Error)
	}
	return ret.Error
}

func (s *DbStore) UpdateSync(id int32, deviceName string, devicePath string, fileId string, status int32) error {

	mm := map[string]interface{}{
		"device_name": deviceName,
		"device_path": devicePath,
		"file_id":     fileId,
		"status":      status,
	}
	ret := s.db.Model(&model.SyncSet{}).Where("id=?", id).Updates(mm)
	if ret.Error != nil {
		log.Errorf("failed to update Sync: %v", ret.Error)
	}
	return ret.Error
}
func (s *DbStore) DelSync(id int32) error {

	ret := s.db.Where("id=?", id).Delete(&model.SyncSet{})
	if ret.Error != nil {
		log.Errorf("failed to DelSync Sync: %v", ret.Error)
	}
	return ret.Error
}
func (s *DbStore) UpdateFileForUpload(file *model.File) error {

	mm := map[string]interface{}{
		"parent_id": file.ParentId,
		"name":      file.Name,
		"cid":       file.Cid,
		"md5":       file.Md5,
		"size":      file.Size,
		"ext":       file.Ext,
		"update_at": file.UpdateAt,
	}
	return s.updateFile(file.Id, mm)
}

func (s *DbStore) GetFileParents(id string) (list []*model.File, _ error) {
	for fid := id; fid != "" && fid != "desktop"; {
		file, err := s.GetFileById(fid)
		if err != nil {
			return list, err
		}
		if fid != id {
			list = append(list, file)
		}
		fid = file.ParentId
	}
	return list, nil
}

func (s *DbStore) GetFileChildrenRecursively(id string) ([]*model.File, error) {

	var files []*model.File
	ret := s.db.Model(&model.File{}).Where("parent_id=?", id).Find(&files)
	if ret.Error != nil {
		return files, ret.Error
	}
	children := files
	for _, child := range files {
		if child.IsFolder {
			list, err := s.GetFileChildrenRecursively(child.Id)
			if err != nil {
				return list, err
			}
			children = append(children, list...)
		}
	}
	return children, nil
}

func (s *DbStore) GetAllFiles() ([]*model.File, error) {

	var files []*model.File
	ret := s.db.Model(&model.File{}).Find(&files)
	if ret.Error != nil {
		return files, ret.Error
	}
	return files, nil
}

func (s *DbStore) GetAllShareFiles() ([]*model.File, error) {

	var files []*model.File
	ret := s.db.Model(&model.File{}).Where("share=1").Find(&files)
	if ret.Error != nil {
		return files, ret.Error
	}
	return files, nil
}

func (s *DbStore) DeleteFiles(topFile *model.File, ids []int) (err error) {

	tx := s.db.Begin()

	ret := tx.Where("auto_id in(?)", ids).Delete(&model.File{})
	if ret.Error != nil {
		tx.Rollback()
		return err
	}

	data, _ := json.Marshal(ids)
	recycle := model.Recycle{
		UserId:    topFile.UserId,
		FileId:    topFile.Id,
		FileIds:   string(data),
		IsFolder:  topFile.IsFolder,
		Name:      topFile.Name,
		Ext:       topFile.Ext,
		Size:      topFile.Size,
		CreatedAt: time.Now().Unix(),
	}
	ret = tx.Create(&recycle)
	if ret.Error != nil {
		tx.Rollback()
		return err
	}
	ret = tx.Commit()
	return ret.Error
}

func (s *DbStore) UpdateFileShare(userId int, fileIs []string, share bool, userList string, startAt int64, endAt int64) error {

	mm := map[string]interface{}{
		"share":     share,
		"user_list": strings.Replace(strings.Trim(fmt.Sprint(userList), "[]"), " ", ",", -1),
		"start_at":  startAt,
		"end_at":    endAt,
		"is_gx":     1,
	}
	ret := s.db.Model(&model.File{}).Where("user_id=?", userId).Where("id in(?)", fileIs).Updates(mm)
	if ret.Error != nil {
		log.Errorf("failed to update file: %v", ret.Error)
	}
	return ret.Error
}
func (s *DbStore) UpdateUserFileShare(userId int, share bool, userList string, startAt int64, endAt int64) error {

	mm := map[string]interface{}{
		"share":     share,
		"user_list": strings.Replace(strings.Trim(fmt.Sprint(userList), "[]"), " ", ",", -1),
		"start_at":  startAt,
		"end_at":    endAt,
	}
	ret := s.db.Model(&model.File{}).Where("user_id=?", userId).Updates(mm)
	if ret.Error != nil {
		log.Errorf("failed to update file: %v", ret.Error)
	}
	return ret.Error
}

//判断是否是共享文件
func (s *DbStore) SearchFileShare(fileIs string) bool {

	var share []model.Share
	ret := s.db.Model(&model.Share{}).Where("file_id=?", fileIs).First(&share)
	if ret.Error != nil {
		return false
	}
	if len(share) > 0 {
		return false
	}
	return true
}

//更新对应文件的共享状态
func (s *DbStore) UpdateFileShareStatus(userId int, fileIs []string, userList string, startAt int64, endAt int64, types int) error {

	ids := make([]string, 0)
	idF := make([]string, 0)
	children, err := s.GetFileShareIdList(fileIs)
	if err != nil {
		log.Errorf("failed to get files: %v", err)
		return err
	}
	for _, v := range children {
		ids = append(ids, v.Id)
		if types == 1 {
			idF = append(idF, v.Id+"*"+strconv.FormatBool(v.IsFolder))
		}
	}

	//取消共享
	if types == 0 {
		errs := s.DeleteShare(ids, userId)
		if errs != nil {
			log.Errorf("failed to DeleteShare file: %v", errs)
		}
	}

	//共享文件
	if types == 1 {
		errs := s.ShareBatchSave(userId, idF, userList, startAt, endAt)
		if errs != nil {
			log.Errorf("failed to BatchSave file: %v", errs)
		}
	}

	//修改共享
	if types == 2 {
		errs := s.UpdateShareTable(ids, userList, startAt, endAt)
		if errs != nil {
			log.Errorf("failed to UpdateShareTable file: %v", errs)
		}
	}

	return nil
}

//获取当前id及子集文件id
func (s *DbStore) GetFileShareIdList(fileIs []string) ([]*model.File, error) {
	var files []*model.File
	ret := s.db.Model(&model.File{}).Where("id in(?)", fileIs).Find(&files)
	if ret.Error != nil {
		return files, ret.Error
	}
	children := files
	for _, child := range files {
		if child.IsFolder {
			list, err := s.GetFileChildrenRecursively(child.Id)
			if err != nil {
				return list, err
			}
			children = append(children, list...)
		}
	}
	return children, nil
}

func (s *DbStore) GetUserShareList(loginUserId, userId, dirMask, fileType, starMask int, keyword string, order int, limit, offset int, parentId string) (count int, list []*model.File, _ error) {

	sql := s.db.Model(&model.File{}).Where("user_id=? and share=?", userId, 1)
	if loginUserId != userId {
		sql = sql.Where("user_list in(?)", loginUserId)
	}
	if dirMask > -1 || starMask > -1 || fileType > 0 || keyword != "" || parentId != "" {
		//sql = s.db.Table("share left join file on share.file_id=file.id").Select("file.*")
		sql = s.db.Table("file").Select("file.*").Joins("left join share on share.file_id=file.id")
		if userId == 0 {
			sql = sql.Where("form_user=?  or instr(to_user,?)", loginUserId, loginUserId).Where("file_end_at>=strftime('%s','now')")
		} else {
			if loginUserId != userId {
				sql = sql.Where("form_user=?  and instr(to_user,?)", userId, loginUserId).Where("file_end_at>=strftime('%s','now')")
			} else {
				sql = sql.Where("form_user=? ", userId)
			}
		}
		if parentId != "" {
			sql = sql.Where("parent_id=?", parentId)
		}
		if dirMask > -1 {
			sql = sql.Where("is_folder=?", dirMask)
		}
		if starMask > -1 {
			sql = sql.Where("share=?", starMask)
		}
		if fileType > 0 {
			if fileType == 99 {
				exts := model.GetFileTypeExtsAll(fileType)
				if len(exts) > 0 {
					sql = sql.Where("ext not IN (?) and is_folder=?", exts, 0)
				}
			} else {
				exts := model.GetFileTypeExts(fileType)
				if len(exts) > 0 {
					sql = sql.Where("ext IN (?)", exts)
				}
			}
		}

		if keyword != "" {
			sql = sql.Where("name LIKE ?", fmt.Sprintf("%%%v%%", keyword))
		}
	}

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
	sql = sql.Order("is_folder DESC")
	sql = s.fileOrder(sql, order)

	ret = sql.Find(&list)
	if ret.Error != nil {
		log.Errorf("Find: %v", ret.Error.Error())
		return 0, nil, ret.Error
	}

	return count, list, nil
}

type ShareCount struct {
	FolderCount int
	FileCount   int
}

func (s *DbStore) GetUserShareCount(id int, loginUser int) (shareCount ShareCount, err error) {

	sql := fmt.Sprintf("SELECT  count(*)folder_count,(SELECT  count(*)file_count FROM share LEFT join file on share.file_id=file.id   WHERE  deleted_at is NULL AND (form_user=? and file_type=0))file_count FROM share LEFT join file on share.file_id=file.id   WHERE  deleted_at is NULL AND (form_user=? and file_type=1)")
	ret := s.db.Raw(sql, id, id)
	if id != loginUser {
		//ret = ret.Where("to_user in(?)", loginUser)
		sql = fmt.Sprintf("SELECT  count(*)folder_count,(SELECT  count(*)file_count FROM share  LEFT join file on share.file_id=file.id  WHERE  deleted_at is NULL AND(form_user=? and instr(to_user,?) and file_type=0 and file_end_at>=strftime('%%s','now')))file_count FROM share  LEFT join file on share.file_id=file.id   WHERE  deleted_at is NULL AND (form_user=? and instr(to_user,?) and file_type=1 and file_end_at>=strftime('%%s','now'))")
		ret = s.db.Raw(sql, id, loginUser, id, loginUser)
	}
	ret.Scan(&shareCount)
	if ret.Error != nil {
		return shareCount, ret.Error
	}

	return shareCount, nil
}

func (s *DbStore) GetFileChildrenShare(id string, folderCount int, fileCount int) (count int, fount int, err error) {

	var files []*model.File
	ret := s.db.Model(&model.File{}).Where("parent_id=?", id).Find(&files)
	if ret.Error != nil {
		return count, fount, ret.Error
	}
	for _, child := range files {
		if child.IsFolder {
			folderCount++
			count, list, err := s.GetFileChildrenShare(child.Id, folderCount, fileCount)
			if err != nil {
				return count, list, ret.Error
			}
		} else {
			fileCount++
		}
	}
	return folderCount, fileCount, nil
}

//更新共享设置
func (s *DbStore) UpdateShareTable(fileIs []string, userList string, startAt int64, endAt int64) error {
	mm := map[string]interface{}{
		"to_user":       userList,
		"file_start_at": startAt,
		"file_end_at":   endAt,
	}
	ret := s.db.Model(&model.Share{}).Where("file_id in(?)", fileIs).Updates(mm)
	if ret.Error != nil {
		log.Errorf("failed to UpdateShareTable file: %v", ret.Error)
	}
	return ret.Error
}
func (s *DbStore) CloseFileShare(userId int) error {

	ret := s.db.Where("form_user=?", userId).Delete(&model.Share{})
	if ret.Error != nil {
		return ret.Error
	}
	return nil
}

//首次共享 BatchSave 批量插入数据
func (s *DbStore) ShareBatchSave(userId int, fileIs []string, userList string, startAt int64, endAt int64) error {
	size := 1000
	page := len(fileIs) / size
	if len(fileIs)%size != 0 {
		page += 1
	}
	uList := strings.Replace(strings.Trim(fmt.Sprint(userList), "[]"), " ", ",", -1)
	sql := "insert into share (form_user,to_user,file_id,file_type,file_start_at,file_end_at) values"
	//var buffer bytes.Buffer
	//if _, err := buffer.WriteString(sql); err != nil {
	//	return err
	//}
	for a := 1; a <= page; a++ {
		var buffer bytes.Buffer
		if _, err := buffer.WriteString(sql); err != nil {
			return err
		}
		bills := make([]string, 0)
		if a == page {
			bills = fileIs[(a-1)*size:]
		} else {
			bills = fileIs[(a-1)*size : a*size]
		}
		for i, e := range bills {
			//fmt.Println(e)
			str1 := strings.Split(e, "*")

			//isFolder, _ := strconv.Atoi(str1[1])
			if i == len(bills)-1 {
				buffer.WriteString(fmt.Sprintf("(%d,'%s','%s',%s,%d,%d);", userId, uList, str1[0], str1[1], startAt, endAt))
			} else {
				buffer.WriteString(fmt.Sprintf("(%d,'%s','%s',%s,%d,%d),", userId, uList, str1[0], str1[1], startAt, endAt))
			}
		}
		errs := s.db.Exec(buffer.String())
		if errs != nil {
			fmt.Println(errs)
		}
	}
	return nil
}

//取消共享、删除文件
func (s *DbStore) DeleteShare(fileIs []string, user int) (err error) {
	size := 1000
	page := len(fileIs) / size
	if len(fileIs)%size != 0 {
		page += 1
	}
	for a := 1; a <= page; a++ {
		bills := make([]string, 0)
		if a == page {
			bills = fileIs[(a-1)*size:]
		} else {
			bills = fileIs[(a-1)*size : a*size]
		}
		ret := s.db.Where("file_id in(?) and form_user=?", bills, user).Delete(&model.Share{})
		if ret.Error != nil {
			return ret.Error
		}
	}

	return nil
}
func (s *DbStore) DelUserShareFiles(userId int, toUser string) error {
	ret := s.db.Where("form_user=? and to_user=?", userId, toUser).Delete(&model.Share{})
	if ret.Error != nil {
		return ret.Error
	}
	return nil
}
func (s *DbStore) DelShareFiles(userId int, fileIs []string) error {
	ret := s.db.Where("form_user=? and file_id in(?)", userId, fileIs).Delete(&model.Share{})
	if ret.Error != nil {
		return ret.Error
	}
	return nil
}

func (s *DbStore) BatchInsert(m string) error {
	ret := s.db.Exec(m)
	if ret.Error != nil {
		if !strings.Contains(ret.Error.Error(), "Duplicate") {
			log.Errorf("failed to BatchInsert item: %v", ret.Error)
			return ret.Error
		}
		return nil
	}
	return ret.Error
}

type FileIdAllList struct {
	Id       string `json:"id"`
	Name     string `json:"name"`
	Ext      string `json:"ext"`
	Size     int    `json:"size"`
	ParentId string `json:"parent_id"`
	IsFolder bool   `json:"is_folder"`
	Paths    string `json:"paths"`
	Md5      string `json:"md5"`
	//Children []FileIdAllList
}

func (s *DbStore) GetFileIdAllList(id string, isFolder int32) ([]FileIdAllList, error) {

	var files []FileIdAllList
	ret := s.db.Table("file").Select("*,name as paths").Where("id=?", id).Where("deleted_at is NULL")
	if isFolder > 0 {
		ret = ret.Where("is_folder=?", 1)
	}
	ret = ret.Find(&files)
	if ret.Error != nil {
		return files, ret.Error
	}

	var filesS []FileIdAllList
	rets := s.db.Table("file").Select("*,name as paths").Where("parent_id=?", id).Where("deleted_at is NULL").Order("is_folder asc")
	if isFolder > 0 {
		rets = rets.Where("is_folder=?", 1)
	}
	rets = rets.Find(&filesS)
	if rets.Error != nil {
		return files, rets.Error
	}
	if len(filesS) > 0 {
		files = append(files, filesS...)
	}

	//fmt.Println(files)
	children := files
	firstName := files[0].Name
	for key, child := range files {
		if child.Id != id {
			var name = firstName + "\\" + child.Name
			children[key].Paths = name
			if child.IsFolder {
				list, err := s.GetFileChildren(child.Id, name, isFolder)
				if err != nil {
					return list, err
				}
				children = append(children, list...)
			}
		}
	}
	return children, nil
}

func (s *DbStore) GetFileChildren(id string, name string, isFolder int32) ([]FileIdAllList, error) {

	var files []FileIdAllList
	sql := fmt.Sprintf("SELECT *,'" + name + "'||'\\'||name as paths from(SELECT * FROM file WHERE (parent_id=?) and deleted_at is NULL)as a")
	if isFolder > 0 {
		sql = fmt.Sprintf("SELECT *,'" + name + "'||'\\'||name as paths from(SELECT * FROM file WHERE is_folder=1 and (parent_id=?) and deleted_at is NULL)as a")
	}
	ret := s.db.Raw(sql, id).Scan(&files)
	//ret := s.db.Table("local_file").Select("*,name as leave").Where("parent_id=?", id).Find(&files)
	if ret.Error != nil {
		return files, ret.Error
	}
	children := files
	for _, child := range files {
		if child.IsFolder {
			list, err := s.GetFileChildren(child.Id, child.Paths, isFolder)
			if err != nil {
				return list, err
			}
			children = append(children, list...)
		}
	}
	return children, nil
}

type FileBackupList struct {
	model.File
	FilePaths string
}

func (s *DbStore) GetFileBackupsList(userId int, offset int, limit int, formDevice string) (files []FileBackupList, count int, err error) {

	sql := s.db.Table("file").Where("user_id=? and form_device=?", userId, formDevice)
	ret := sql.Where("deleted_at is NULL").Count(&count)
	if ret.Error != nil {
		log.Errorf("count: %v", ret.Error.Error())
		return nil, 0, ret.Error
	}
	if count == 0 {
		return files, count, nil
	}
	if offset >= 0 && limit > 0 {
		sql = sql.Offset(offset).Limit(limit)
	}
	sql = sql.Order("auto_id asc")
	ret = sql.Find(&files)
	if ret.Error != nil {
		log.Errorf("Find: %v", ret.Error.Error())
		return nil, 0, ret.Error
	}

	return files, count, nil
}

func (s *DbStore) GetFileBackupChildren(id string) ([]FileBackupList, error) {

	var files []FileBackupList
	sql := fmt.Sprintf("select GROUP_CONCAT(name,'\\')file_paths from(with recursive dg as (SELECT * from file where id =? and deleted_at is null UNION ALL SELECT file.* from dg JOIN file ON dg.parent_id = file.id where dg.deleted_at is null)select * from dg ORDER BY auto_id)")

	ret := s.db.Raw(sql, id).Scan(&files)
	if ret.Error != nil {
		return files, ret.Error
	}

	return files, nil
}

//判断文件md5是否存在
func (s *DbStore) SearchFileMd5(md5 string) (model.File, error) {

	var file model.File
	ret := s.db.Model(&model.File{}).Where("md5=?", md5).First(&file)
	if ret.Error != nil {
		return file, nil
	}
	if file.Id != "" {
		return file, nil
	}
	return file, nil
}
func (s *DbStore) SearchFileMd5List(md5 string) ([]*model.File, error) {

	var file []*model.File
	ret := s.db.Model(&model.File{}).Where("md5=?", md5).Find(&file)
	if ret.Error != nil {
		return file, nil
	}
	return file, nil
}
func (s *DbStore) GetBackupsList(userId int, limit int, offset int) (count int, list []*model.BackupsList, _ error) {

	sql := s.db
	sql = sql.Model(&model.BackupsList{}).Where("user_id=?", userId)

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
func (s *DbStore) GetSyncList(userId int, deviceName string) (count int, list []*model.SyncSet, _ error) {

	sql := s.db
	sql = sql.Model(&model.SyncSet{}).Where("user_id=?", userId)
	if deviceName != "" {
		sql = sql.Where("device_name=?", deviceName)
	}
	ret := sql.Count(&count)
	if ret.Error != nil {
		log.Errorf("count: %v", ret.Error.Error())
		return 0, nil, ret.Error
	}
	if count == 0 {
		return count, list, nil
	}

	sql = sql.Order("created_at DESC")
	ret = sql.Find(&list)
	if ret.Error != nil {
		log.Errorf("Find: %v", ret.Error.Error())
		return 0, nil, ret.Error
	}
	return count, list, nil
}
func (s *DbStore) GetSyncInName(userId int, name string) (*model.SyncSet, error) {

	var file model.SyncSet
	ret := s.db.Model(&model.SyncSet{}).Where("user_id=?", userId).Where("device_name=?", name).First(&file)
	if ret.Error != nil {
		if ret.Error != gorm.ErrRecordNotFound {
			log.Errorf("%v", ret.Error.Error())
		}
	}
	return &file, ret.Error
}

func (s *DbStore) GetFileLogList(userId int, status int, startTime int) (list []*model.FileLog, _ error) {

	sql := s.db
	sql = sql.Model(&model.FileLog{}).Where("user_id=? and status=? and date(created_at, 'unixepoch', 'localtime')=?", userId, status, startTime)

	//sql = sql.Order("created_at DESC")
	ret := sql.Find(&list)
	if ret.Error != nil {
		log.Errorf("Find: %v", ret.Error.Error())
		return nil, ret.Error
	}
	return list, nil
}

func (s *DbStore) GetFileListToday(userId int) bool {

	var list []*model.File
	ret := s.db.Model(&model.File{}).Where("user_id=? and date(created_at, 'unixepoch', 'localtime')=date('now', 'localtime')", userId).Order("created_at").First(&list)
	if ret.Error != nil {
		log.Errorf("Find: %v", ret.Error.Error())
		return false
	}
	var listS []*model.File
	rets := s.db.Model(&model.File{}).Where("user_id=? and date(created_at, 'unixepoch', 'localtime')=date('now', 'localtime')", userId).Order("created_at desc").First(&listS)
	if rets.Error != nil {
		log.Errorf("Find: %v", rets.Error.Error())
		return false
	}
	if len(listS) > 0 {
		list = append(list, listS...)
	}
	var logList []*model.FileLog
	logL := s.db.Model(&model.FileLog{}).Where("user_id=? and status=0 and date(created_at, 'unixepoch', 'localtime')=date('now', 'localtime')", userId).Order("created_at desc").Find(&logList)
	if logL.Error != nil {
		log.Errorf("Find: %v", logL.Error.Error())
		return false
	}
	if len(logList) > 0 {
		if len(list) == 1 {
			mm := map[string]interface{}{
				"id_list": "0," + fmt.Sprintf("%d", list[0].AutoId),
			}
			ret := s.db.Model(&model.FileLog{}).Where("id=?", logList[0].Id).Updates(mm)
			if ret.Error != nil {
				log.Errorf("failed to UpdateShareTable file: %v", ret.Error)
			}
		} else if len(list) == 2 {
			mm := map[string]interface{}{
				"id_list": fmt.Sprintf("%d", list[0].AutoId) + "," + fmt.Sprintf("%d", list[1].AutoId),
			}
			ret := s.db.Model(&model.FileLog{}).Where("id=?", logList[0].Id).Updates(mm)
			if ret.Error != nil {
				log.Errorf("failed to UpdateShareTable file: %v", ret.Error)
			}
		}
	} else {
		idList := ""
		if len(list) == 1 {
			idList = "0," + fmt.Sprintf("%d", list[0].AutoId)
		} else if len(list) == 2 {
			idList = fmt.Sprintf("%d", list[0].AutoId) + "," + fmt.Sprintf("%d", list[1].AutoId)
		}
		sync := model.FileLog{
			UserId:    userId,
			FileId:    "",
			Status:    0,
			IdList:    idList,
			CreatedAt: time.Now().Unix(),
		}
		err := s.CreateItem(&sync)
		if err != nil {
			log.Errorf("failed to create sync: %v", err)
		}
	}

	return true
}

type DiskCount struct {
	DeviceCount int64
	DeviceUsed  int64
}

func (s *DbStore) GetDiskCount() (list DiskCount, _ error) {

	sql := s.db.Table("user").Select("sum(allocated_space)device_count, sum(used_space)device_used").Scan(&list)

	ret := sql.Find(&list)
	if ret.Error != nil {
		log.Errorf("Find: %v", ret.Error.Error())
		return list, ret.Error
	}
	return list, nil
}

func (s *DbStore) GetFileAll(offset int, limit int, id int) (count int, list []*model.File, _ error) {

	sql := s.db
	sql = sql.Model(&model.File{}).Select("*").Where("is_folder=?", 0).Where("size>?", 0).Group("cid").Having("cid<>'' and md5<>''")
	if id > 0 {
		sql = sql.Where("auto_id<=?", id)
	}
	var lists []*model.File
	ret := sql.Find(&lists)
	count = len(lists)
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
	if id == 0 {
		sql = sql.Order("auto_id desc")
	} else {
		sql = sql.Order("auto_id asc")
	}

	ret = sql.Find(&list)
	if ret.Error != nil {
		log.Errorf("Find: %v", ret.Error.Error())
		return 0, nil, ret.Error
	}
	return count, list, nil
}

type SumFile struct {
	Size int64
}

func (s *DbStore) SumFileAll() (count SumFile, _ error) {

	//ret := s.db.Debug().Model(&model.File{}).Select("sum(size)size").Where("is_folder=?", 0).Where("size>?", 0).Where("cid<>'' and md5<>''").Scan(&count)
	sql := fmt.Sprintf("select sum(size)size from(SELECT size FROM \"file\"  WHERE \"file\".\"deleted_at\" IS NULL AND ((is_folder=0) AND (size>0) AND (cid<>'' and md5<>'')) GROUP BY cid )a")

	ret := s.db.Raw(sql).Scan(&count)
	if ret.Error != nil {
		log.Errorf("count: %v", ret.Error.Error())
		return count, ret.Error
	}

	return count, nil
}
func (s *DbStore) GetFileCidAll(offset int, limit int, status int) (count int, list []*model.Cid, _ error) {
	sql := s.db
	sql = sql.Model(&model.Cid{})
	if status == 0 {
		sql = sql.Where("upload_status=?", status)
	} else {
		sql = sql.Where("upload_status=? and status!='StorageDealActive'", status)
	}
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
	ret = sql.Find(&list)
	if ret.Error != nil {
		log.Errorf("Find: %v", ret.Error.Error())
		return 0, nil, ret.Error
	}
	return count, list, nil
}
func (s *DbStore) GetFileUploadStatus(timeS int64) (count int) {
	ret := s.db.Model(&model.Cid{}).Where("piece_cid is not null").Where("piece_cid!=''").Where("created_at=?", timeS).Count(&count)
	if ret.Error != nil {
		log.Errorf("Find: %v", ret.Error.Error())
		return 0
	}
	if count == 0 {
		return count
	}

	return count
}
func (s *DbStore) GetFileUpload(timeS int64) (count int) {
	ret := s.db.Model(&model.Cid{}).Where("created_at=?", timeS).Count(&count)
	if ret.Error != nil {
		log.Errorf("Find: %v", ret.Error.Error())
		return 0
	}
	if count == 0 {
		return count
	}

	return count
}
func (s *DbStore) GetFileVerified(timeS int) (count int) {
	ret := s.db.Model(&model.Cid{}).Where("status=?", "StorageDealActive").Where("created_at=?", timeS).Count(&count)
	if ret.Error != nil {
		log.Errorf("Find: %v", ret.Error.Error())
		return 0
	}
	if count == 0 {
		return count
	}

	return count
}
func (s *DbStore) GetFileBackups(timeS int64) (*model.CidBackups, error) {

	var file model.CidBackups
	ret := s.db.Model(&model.CidBackups{}).Where("created_at=?", timeS).First(&file)
	if ret.Error != nil {
		if ret.Error != gorm.ErrRecordNotFound {
			log.Errorf("%v", ret.Error.Error())
		}
	}
	return &file, ret.Error
}
func (s *DbStore) GetFileCid(cid string, timeS int64) (*model.Cid, error) {

	var file model.Cid
	ret := s.db.Model(&model.Cid{}).Where("ipfs_cid=?", cid).Where("created_at=?", timeS).First(&file)
	if ret.Error != nil {
		if ret.Error != gorm.ErrRecordNotFound {
			log.Errorf("%v", ret.Error.Error())
		}
	}
	return &file, ret.Error
}
func (s *DbStore) UpdateCidInfo(cid string, cidInfo *model.Cid) error {
	mm := map[string]interface{}{
		"deal_cid":  cidInfo.DealCid,
		"piece_cid": cidInfo.PieceCid,
		"status":    cidInfo.Status,
		"verified":  cidInfo.Verified,
		"duration":  cidInfo.Duration,
	}
	return s.updateCid(cid, mm)
}
func (s *DbStore) UpdateCidPage(cid string, cidInfo *model.Cid) error {
	mm := map[string]interface{}{
		"upload_page": cidInfo.UploadPage,
	}
	return s.updateCid(cid, mm)
}
func (s *DbStore) UpdateCidUploadStatus(cid string, status int) error {
	mm := map[string]interface{}{
		"upload_status": status,
	}
	return s.updateCid(cid, mm)
}
func (s *DbStore) updateCid(cid string, mm map[string]interface{}) error {
	ret := s.db.Model(&model.Cid{}).Where("ipfs_cid=?", cid).Updates(mm)
	if ret.Error != nil {
		log.Errorf("failed to update file: %v", ret.Error)
	}
	return ret.Error
}
func (s *DbStore) UpdateCidBackupsToDataCid(timeS int64, dataCid string, dataDealCid string) error {
	mm := map[string]interface{}{
		"data_cid":      dataCid,
		"data_deal_cid": dataDealCid,
	}
	ret := s.db.Model(&model.CidBackups{}).Where("created_at=?", timeS).Updates(mm)
	if ret.Error != nil {
		log.Errorf("failed to update file: %v", ret.Error)
	}
	return ret.Error
}
func (s *DbStore) UpdateCidBackups(timeS int64) error {
	mm := map[string]interface{}{
		"status":    1,
		"update_at": time.Now().Unix(),
	}
	ret := s.db.Model(&model.CidBackups{}).Where("created_at=?", timeS).Updates(mm)
	if ret.Error != nil {
		log.Errorf("failed to update file: %v", ret.Error)
	}
	return ret.Error
}

type CidBackupsList struct {
	model.CidBackups
	SuccessFile int64
}

func (s *DbStore) GetCidBackupsList(limit int, offset int) (count int, list []CidBackupsList, _ error) {

	sql := s.db
	sql = sql.Table("cid_backups").Select("*,(select count(id)  from cid where cid_backups.created_at=cid.created_at and cid.status='StorageDealActive')success_file").Where("status=?", 1)

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
func (s *DbStore) GetBackupCount(timeS int64) (count int, verCount int, _ error) {

	sql := s.db
	sql = sql.Model(&model.Cid{}).Where("created_at=?", timeS)

	ret := sql.Count(&count)
	if ret.Error != nil {
		log.Errorf("count: %v", ret.Error.Error())
		return 0, 0, ret.Error
	}
	sql = sql.Model(&model.Cid{}).Where("created_at=?", timeS).Where("piece_cid is not null").Where("piece_cid!=''")
	rets := sql.Count(&verCount)
	if rets.Error != nil {
		log.Errorf("count: %v", ret.Error.Error())
		return 0, 0, ret.Error
	}
	if count == 0 {
		return count, verCount, nil
	}

	return count, verCount, nil
}
