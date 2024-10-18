package main

import (
	"fmt"

	"github.com/utility/helpers"
)

func main() {
	// sortStr()
	mapToStruct()
}

func sortStr() {
	str := "ramrajya"
	str = helpers.SortString(str)
	fmt.Println("str = ", str)
}

func mapToStruct() {
	m := map[int]interface{}{
		1: "Pr",
		2: 100,
		3: "Three",
		4: []int{4, 5},
	}

	o := helpers.MapToStruct(m)
	fmt.Println(o)
}
