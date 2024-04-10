package main

import (
	"fmt"
	"time"
)

func main() {
	randomChars := []rune("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0987654321")
	num := generateUniqueID()
	var (
		remainder int64
		shortUrl  string
	)

	shortUrl = ""
	iterations := 7 // 7 chars means 62^7 => 3.5 trillions combinations
	for iterations >= 1 {
		remainder = (num % 62)
		num = (num / 62)
		shortUrl += fmt.Sprintf("%c", randomChars[remainder])
		iterations -= 1
	}

	fmt.Printf("http://myshorturl.com/%s", shortUrl)

}

func generateUniqueID() int64 {
	start := time.Now()
	id := start.UnixNano()
	return id
}
