package main

import (
	"fmt"
	"os"
	"strconv"
)

func main() {
	arg := os.Args[1]
	v, _ := strconv.Atoi(arg)

	switch v {
	case 1:
		str := "abraarba"
		ans := IsValidPalindrome(str)
		if ans {
			fmt.Println(str + " is a valid string")
		} else {
			fmt.Println(str + " is not a valid string")
		}
	}
}

func IsValidPalindrome(str string) bool {
	j := len(str) - 1
	i := 0

	for i = 0; i < len(str)/2; i++ {
		if str[i] != str[j] {
			break
		}

		j = j - 1
	}

	if str[i] == str[j] {
		return true
	}

	return false
}
