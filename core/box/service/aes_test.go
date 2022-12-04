package service

import (
	"bufio"
	"io"
	"math/rand"
	"os"
	"testing"
	"time"
)

func TestEncryptFile(t *testing.T) {
	//以原始文件1MB文件为单位计算
	t2 := randString(32)
	t.Logf("加密前大小：%v", len(t2))
	encryptData := AesEncrypt([]byte(t2), "12345678901234567890123456789012")
	t.Logf("加密后大小:%v", len(encryptData))
	//加密后存储的文件
	fd, err := os.OpenFile("./test.txt", os.O_RDWR|os.O_CREATE|os.O_APPEND, 0666)
	if err != nil {
		t.Log(err)
	}
	_, err = fd.Write(encryptData)
	if err != nil {
		t.Log(err)
	}
	defer fd.Close()
}

func TestCTREncrypt(t *testing.T) {
	t2 := randString(17)
	t.Logf("加密字符串：%v", t2)
	t.Logf("加密前大小：%v", len(t2))
	encryptData, _ := CTREncrypt([]byte(t2), "12345678901234567890123456789012")
	t.Logf("加密后大小:%v", len(encryptData))
	//加密后存储的文件
	fd, err := os.OpenFile("./test.txt", os.O_RDWR|os.O_CREATE|os.O_APPEND, 0666)
	if err != nil {
		t.Log(err)
	}
	_, err = fd.Write(encryptData)
	if err != nil {
		t.Log(err)
	}
	defer fd.Close()
}

func TestCTRDecrypt(t *testing.T) {
	filePath := "/Users/litai/Desktop/QmPrPkEixeezfSmoGZeihQR4b8QwZJwuTvq6oSPtz7ViEH"
	f, err := os.Open(filePath)
	if err != nil {
		panic(err)
	}
	defer f.Close()
	r := bufio.NewReader(f)
	buf := make([]byte, (1024*1024 + 16))
	for {
		size, err := r.Read(buf)
		log.Infof("size%v", size)
		//log.Infof("buf%v", buf)
		if err != nil && err != io.EOF {
			log.Error(err)
			return
		}
		if size == 0 {
			break
		}
		data, err := CTRDecrypt(buf[:size], "132862a3ec13149671f27b00d460d022")
		if err != nil {
			t.Log(nil)
		}
		log.Infof("data%v", len(data))
		//还原文件
		fd, err := os.OpenFile("./test.jpg", os.O_RDWR|os.O_CREATE|os.O_APPEND, 0666)
		defer fd.Close()
		if err != nil {
			t.Log(err)
		}
		_, err = fd.Write(data)
		if err != nil {
			t.Log(err)
		}
	}

}

func ReadChunk(filename string, byteFrom int64) []byte {
	f, err := os.Open(filename)
	if err != nil {
		panic(err)
	}
	defer f.Close()
	buf := make([]byte, byteFrom)
	r := bufio.NewReader(f)
	size, err := r.Read(buf)
	log.Infof("size%v", size)
	if err != nil {
		log.Error(err)
	}
	return buf
}

func randString(len int) string {
	r := rand.New(rand.NewSource(time.Now().Unix()))
	bytes := make([]byte, len)
	for i := 0; i < len; i++ {
		b := r.Intn(36)
		if b < 10 {
			b += '0'
		} else {
			b += 'a' - 10
		}
		bytes[i] = byte(b)
	}
	return string(bytes)
}
