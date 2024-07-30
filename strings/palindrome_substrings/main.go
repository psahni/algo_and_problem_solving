package main

import "fmt"

// i=0, "b", 0>=0, 0 < 5, b==b, count=1, left=-1, right=1 (exit)
// i=0,1, "b", "a", 0>=0, 1<5, b==a false (exit)
// i=1, "a" 1>=0 1<5, true count =1, left=0, right=2
// 	"b" == "b" s[0] == s[2], left=-1, right=3 count =2, exit
// a, b, left=1, right=2, F
// b i=2, left=2, right=2, count=1
//   left=1, right=3, s[1] == s[3] true, count = 2
// left=0, right=4 F, exit

// You have to take the center. Start from left=0, right=0 and left=0, right=1, two centers will be taken

func main() {
	count := 0
	str := "babad" // b, a, d, bab, aba

	for i := 0; i < len(str); i++ {
		count += find(str, i, i)
		count += find(str, i, i+1)
	}

	fmt.Println("num of palindroms = ", count)
}

func find(s string, left, right int) int {
	count := 0

	for left >= 0 && right < len(s) && s[left] == s[right] {
		count += 1
		left -= 1
		right += 1
	}

	fmt.Println(s[left+1 : right])

	return count
}

// O(n2), O(1)
