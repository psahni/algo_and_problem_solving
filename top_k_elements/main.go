/*

Given an array of N numbers and a positive integer K. The problem is to find K numbers with the most occurrences,
i.e., the top K numbers having the maximum frequency. If two numbers have the same frequency then the number with a
larger value should be given preference. The numbers should be displayed in decreasing order of their frequencies.
It is assumed that the array consists of at least K numbers.

*/

package main

import (
	"fmt"
	"sort"
)

func main() {
	arr := []int{2, 2, 4, 5, 6, 7, 6, 2, 7}
	frequencyMap := make(map[int]int)
	for _, val := range arr {
		_, found := frequencyMap[val]
		if !found {
			frequencyMap[val] = 1
		} else {
			frequencyMap[val] += 1
		}
	}

	type Pair struct {
		Key   int
		Value int
	}

	frequencyArr := make([]Pair, 0)

	// # SORT BY VALUES
	for k, v := range frequencyMap {
		frequencyArr = append(frequencyArr, Pair{Key: k, Value: v})
	}

	sort.Slice(frequencyArr, func(v1, v2 int) bool {
		return frequencyArr[v1].Value > frequencyArr[v2].Value
	})

	fmt.Println(frequencyArr)

	sort.Slice(frequencyArr, func(v1, v2 int) bool {
		return (frequencyArr[v1].Value == frequencyArr[v2].Value) && (frequencyArr[v1].Key > frequencyArr[v2].Key)
	})

	fmt.Println(frequencyArr)
}
