package main

import (
	"fmt"
)

// x + y = 9
// y = 9 - x

func main() {
	arr := []int{2, 1, 3, 5, 6}
	findTarget(arr, 8)
}

func findTarget(arr []int, target int) {
	diffMap := make(map[int]int)
	var diff int
	for pos, val := range arr {
		diff = target - val
		_, ok := diffMap[diff]

		if ok {
			o := fmt.Sprintf("target found at %d and %d", diffMap[diff], pos)
			fmt.Println(o)
			break
		} else {
			diffMap[val] = pos
		}
	}
}
