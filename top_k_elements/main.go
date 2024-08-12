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


/*
  scores := map[string]int{
      "Bob": 90,
      "Smith": 95,
      "Alex": 85,
      "Michel": 87,
      "Shemar": 92,
  }
  
  scores_values := make(map[int]string)
  sorted_vals := make([]int, 0)
  for k, v := range scores {
      scores_values[v] = k
      sorted_vals = append(sorted_vals, v)
  }
  
  sort.Slice(sorted_vals, func(i, j int) bool {
      return sorted_vals[i] > sorted_vals[j]
  }) 
  
  fmt.Println(sorted_vals)
  
  for _, v := range sorted_vals {
      fmt.Println(scores_values[v], " => ", v)
  }
  

*/
