package main

import "fmt"

func main() {
	arr := []int{7, 1, 3, 4, 5}

	arr = rotate(arr)

	fmt.Println("After rotation = ", arr)
}

func rotate(arr []int) []int {
	first := 0
	last := len(arr) - 1

	temp := arr[first]
	arr[first] = arr[last]
	first = first + 1

	for {
		if last == first {
			break
		}

		arr[last] = arr[last-1]
		last -= 1
	}

	if last == first {
		arr[last] = temp
	}

	return arr
}
