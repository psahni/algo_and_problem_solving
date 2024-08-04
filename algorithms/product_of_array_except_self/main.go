package main

import "fmt"

/*
	Input:   [1, 2, 3, 4]; Product of array = 24, now divide each num
	Output:  [24, 12, 8, 6]
*/

func main() {
	arr := []int{1, 2, 3, 4}
	product := 1

	for i := 0; i < len(arr); i++ {
		product = product * arr[i]
	}

	output := make([]int, len(arr))
	for i := len(arr) - 1; i >= 0; i-- {
		num := arr[i]
		output[i] = product / num
	}

	fmt.Println("output = ", output)
}

/*
	Other solution is find prefix and suffix product

	prefix product = [1, 1, 2, 6]	  // Prefix of 1 is 1, prefix of 2 is 1, prefix of 3 is 2
	suffix product = [24, 12, 4, 1] // Suffix of 4 is 1, suffix of 3 is 4 and so on
	O(n) complexity

	You can do it in 1 array too. Just find the prefix array and then keep multiplying the
	number by suffix num (starting from end of array)
	[1, 1, 2, 6]
	6*1
	2*4 (suffix of 3 is 4)
	1*12 (suffix of 2 is 3*4 => 12)
	..
*/
