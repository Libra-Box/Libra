package xjwt

import (
	"errors"
	"github.com/dgrijalva/jwt-go"
)

var (
	TokenExpired     = errors.New("Token is expired")
	TokenNotValidYet = errors.New("Token not active yet")
	TokenMalformed   = errors.New("That's not even a token")
	TokenInvalid     = errors.New("Couldn't handle this token")
)

const (
	defaultJwtSecretKey = "8ni3q2ruj092r4fj490&8^@gag"
)

type Option struct {
	Secret string
}

type JWT struct {
	SigningKey []byte
}

type UserClaims struct {
	Data interface{} `json:"data"`
	jwt.StandardClaims
}

func NewJWT(secret string) *JWT {
	if secret == "" {
		secret = defaultJwtSecretKey
	}
	return &JWT{
		SigningKey: []byte(secret),
	}
}

func (j *JWT) CreateToken(user *UserClaims) (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, user)
	return token.SignedString(j.SigningKey)
}

func (j *JWT) ParseToken(tokenString string) (*UserClaims, error) {

	token, err := jwt.ParseWithClaims(tokenString, &UserClaims{}, func(token *jwt.Token) (interface{}, error) {
		return j.SigningKey, nil
	})

	if err != nil {
		e := err.(*jwt.ValidationError)
		if e.Errors&jwt.ValidationErrorExpired != 0 {
			return nil, TokenExpired
		}
		return nil, err
	}

	if claims, ok := token.Claims.(*UserClaims); ok && token.Valid {
		return claims, nil
	}
	return nil, TokenInvalid
}
