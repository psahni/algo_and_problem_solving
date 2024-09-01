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
		// # IsValidPalindrome
		str := "abraarba"
		ans := IsValidPalindrome(str)
		if ans {
			fmt.Println(str + " is a valid string")
		} else {
			fmt.Println(str + " is not a valid string")
		}
	// # Longest Palindrome Substring
	case 2:
		str := "bcca" // "cbbd"
		l := LongestPalindromSubstring(str)
		fmt.Printf("Longest palindromic substring for %v =  %v", str, l)
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

// Find the center
// And expand around center

func LongestPalindromSubstring(s string) string {
	if len(s) < 2 {
		return s
	}

	start := 0
	end := 0

	// Helper function to expand around center
	expandAroundCenter := func(left, right int) {
		for left >= 0 && right < len(s) && s[left] == s[right] {
			left--
			right++
		}

		left = left + 1
		right = right - 1

		if end-start+1 < right-left+1 {
			start = left
			end = right
		}
	}

	for i := 0; i < len(s); i++ {
		expandAroundCenter(i, i)   // Odd length palindrome
		expandAroundCenter(i, i+1) // Even length palindrome
	}

	return s[start : end+1]
}

func findMax(a, b int) int {
	if a > b {
		return a
	}
	return b
}
