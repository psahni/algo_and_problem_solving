// WRITE A PROGRAM TO COUNT THE FREQUENCY OF EACH WORD
package main

import (
	"fmt"
	"strings"
)

const SENTENCE = `
	Sarah ran from the serial killer holding a jug of milk.
	When cat comes to house.
	Everything was going so well until I was accosted by a purple giraffe.
	The tour bus was packed with teenage girls heading toward their next adventure.
	He was the type of guy who liked Christmas lights on his house in the middle of July.
	Seek success, but always be prepared for random cat
`

type FreqMap map[string]int

func main() {
	words := strings.Fields(SENTENCE)

	frequenceMap := countEachWord(words)

	fmt.Println(frequenceMap["was"])
	fmt.Println(frequenceMap["cat"])
}

func countEachWord(words []string) FreqMap {
	frequenceMap := make(map[string]int)
	for _, word := range words {
		frequenceMap[word]++
	}

	return frequenceMap
}
