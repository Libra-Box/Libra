package service

import (
	"bufio"
	"bytes"
	"crypto/md5"
	"fmt"
	"github.com/ipfs/go-ipfs-files"
	"io"
	"io/ioutil"
	"net/http"
	"os"
	"os/exec"
	"time"
)

//阻塞式的执行外部shell命令的函数,等待执行完毕并返回标准输出
func exec_shell(s string) (string, error) {
	//函数返回一个*Cmd，用于使用给出的参数执行name指定的程序
	cmd := exec.Command("/bin/bash", "-c", s)
	var out bytes.Buffer
	cmd.Stdout = &out
	err := cmd.Run()
	return out.String(), err
}

//获取字符串Md5
func GetMd5(data string) string {
	d := []byte(data)
	s := fmt.Sprintf("%x", md5.Sum(d))
	return s
}

//获取文件的Md5
//func GetFileMd5(fileUrl string) string {
//	md5Str := ""
//	file, err := os.Open(fileUrl)
//	if err == nil {
//		md5h := md5.New()
//		io.Copy(md5h, file)
//		md5Str = fmt.Sprintf("%x", md5h.Sum([]byte(""))) //md5
//	}
//	return md5Str
//}

func GetFileMd5(file string) string {
	f, err := os.Open(file)
	if err != nil {
		return ""
	}
	defer f.Close()
	r := bufio.NewReader(f)
	h := md5.New()
	_, err = io.Copy(h, r)
	if err != nil {
		return ""
	}
	return fmt.Sprintf("%x", h.Sum(nil))
}

// 判断所给路径文件/文件夹是否存在
func Exists(path string) bool {
	_, err := os.Stat(path) //os.Stat获取文件信息
	if err != nil {
		if os.IsExist(err) {
			return true
		}
		return false
	}
	return true
}

// 发送GET请求
func HttpGet(url string) []byte {
	// 超时时间：5秒
	client := &http.Client{Timeout: 10 * time.Second}
	resp, err := client.Get(url)
	if err != nil {
		panic(err)
	}
	res, _ := ioutil.ReadAll(resp.Body)
	defer resp.Body.Close()
	return res
}

func getFileBytes(nd files.Node, offset int64, size int) ([]byte, error) {
	data := make([]byte, size)
	file := files.NewReaderFile(files.ToFile(nd))
	file.Seek(offset, io.SeekCurrent)
	_, err := file.Read(data)
	return data, err
}
