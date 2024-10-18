// https://leetcode.com/problems/coin-change/description/

package main

import (
	"fmt"
	"math"
)

func main() {
	coins := []int{1, 2, 5}
	target := 2

	counters := make([]int, target+1) // index is the amount.

	for i := 1; i < len(counters); i++ {
		amount := i
		min := math.MaxInt
		for _, coinVal := range coins {
			if coinVal > amount {
				continue
			}

			remaining := amount - coinVal // [3,5,6] amount = 6 | 6-3 = 3 counters[3], 6-5 = 1 counters[1], 6-6 = 0 counters[0]

			if counters[remaining] == -1 {
				continue
			}

			if counters[remaining] < min { // counters[remaining] is the num of coins required for amount
				min = counters[remaining]
			}
		}
		if min == math.MaxInt {
			counters[i] = -1
		} else {
			min = min + 1
			counters[i] = min
		}
	}

	fmt.Printf("Number of coins required for %d is %d\n", target, counters[target])
}
