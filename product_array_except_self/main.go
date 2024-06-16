package main

import "fmt"

// [1, 2, 3, 4]
// [24, 12, 8, 6] 0 = 2*3*4
// [24, 12, 8, 6] 1 = 3*4
// With division it's easy
// Create Prefix product array
// Create Suffix product array
// Multiply both arrays
// Or find suffix product and keep multiplying to prefix product array

func main() {
	productExceptSelf([]int{1, 2, 3, 4})
}

func productExceptSelf(arr []int) {
	prefixProductArr := make([]int, len(arr))
	prefixProductArr[0] = 1
	product := 1

	var i int

	for i = 1; i < len(arr); i++ {
		product = arr[i-1] * product
		prefixProductArr[i] = product
	}

	fmt.Println(prefixProductArr)

	i = 0
	j := len(arr) - 1

	suffixProduct := 1
	i = 0

	for j = len(arr) - 2; j >= 0; j-- {
		suffixProduct = suffixProduct * arr[j+1]
		prefixProductArr[j] = suffixProduct * prefixProductArr[j]
	}

	fmt.Println(prefixProductArr)

}
