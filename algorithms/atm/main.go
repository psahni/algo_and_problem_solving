package main

import (
	"fmt"
	"sort"
)

var notes = []int{1000, 500, 100}

var notesCount = map[int]int{
	1000: 2,
	500:  4,
	100:  10,
}

type Denominations struct {
	Value int
	Count int
}

func main() {
	output := countDenominations2(5000)
	fmt.Println(output)
}

func countDenominations1(amount int) []Denominations {
	tempAmt := amount
	var denominations []Denominations
	for i := 0; i < len(notes); i++ {
		note := notes[i]
		rem := tempAmt % note
		denominations = append(denominations, Denominations{Value: note, Count: (tempAmt / note)})
		tempAmt = rem
		if rem == 0 {
			break
		}
	}

	if tempAmt > 0 {
		fmt.Println("Can't be dispersed")
		return []Denominations{Denominations{Value: 0, Count: 0}}
	}

	return denominations
}

func countDenominations2(amount int) []Denominations {
	var notesArr []int
	var denominations []Denominations
	var totalBalance int

	for note, value := range notesCount {
		notesArr = append(notesArr, note)
		totalBalance += note * value
	}

	if amount > totalBalance {
		fmt.Println("[countDenominations2] Amount is not available")
		return []Denominations{Denominations{Value: 0, Count: 0}}
	}
	sort.Sort(sort.Reverse(sort.IntSlice(notesArr)))

	tempAmt := amount
	for i := 0; i < len(notesArr); i++ {
		note := notes[i]
		count := (tempAmt / note)
		rem := tempAmt % note
		if notesCount[note] >= count {
			tempAmt = rem
			denominations = append(denominations, Denominations{Value: note, Count: count})
		} else {
			denominations = append(denominations, Denominations{Value: note, Count: notesCount[note]})
			count = count - notesCount[note]
			tempAmt = (count * note) + rem
		}
	}

	if tempAmt > 0 {
		fmt.Println("[countDenominations2] Can't be dispersed")
		return []Denominations{Denominations{Value: 0, Count: 0}}
	}

	return denominations
}
