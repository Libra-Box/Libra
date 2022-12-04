package config

import (
	"math/rand"
	"time"
)

type Box struct {
	SignKey string
	JwtKey  string
}

func DefaultBoxConfig() Box {
	return Box{
		SignKey: randString(24),
		JwtKey:  randString(24),
	}
}

type Http struct {
	ListenAddress string
}

func DefaultHttp() Http {
	return Http{
		ListenAddress: "0.0.0.0:9988",
	}
}

var r *rand.Rand

func init() {
	r = rand.New(rand.NewSource(time.Now().Unix()))
}

func randString(len int) string {
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
