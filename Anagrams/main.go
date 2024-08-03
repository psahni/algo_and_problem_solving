package main

import (
	"fmt"
	"os"
	"regexp"
	"sort"
	"strings"
)

func main() {
	s1 := os.Args[1]
	s2 := os.Args[2]

	checkAnagrams(s1, s2)
}

func checkAnagrams(s1 string, s2 string) {
	if len(s1) != len(s2) {
		fmt.Println("Strings are not anagrams")
		return
	}
	sortedS1 := sortString(s1)
	sortedS2 := sortString(s2)
	fmt.Println(sortString(sortedS1))
	fmt.Println(sortString(sortedS2))

	if sortedS1 == sortedS2 {
		fmt.Println("Strings are anagrams")
	} else {
		fmt.Println("Strings are not anagrams")
	}
}

func sortString(str string) string {
	str = removeSpaces(string(str))
	fmt.Println("str = ", str)
	word := []rune(strings.ToLower(str))
	fmt.Println("word = ", word)
	sort.Slice(word, func(i, j int) bool { return word[i] < word[j] })

	return string(word)
}

func removeSpaces(str string) string {
	regex := regexp.MustCompile(`\s+`)
	out := regex.ReplaceAllString(str, "")
	return strings.TrimSpace(out)
}
