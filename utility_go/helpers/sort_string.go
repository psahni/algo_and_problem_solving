package helpers

import (
	"regexp"
	"sort"
	"strings"
)

func SortString(str string) string {
	str = removeSpaces(string(str))
	word := []byte(strings.ToLower(str)) // []rune(string)

	sort.Slice(word, func(i int, j int) bool {
		return word[i] < word[j]
	})

	return string(word)
}

func removeSpaces(str string) string {
	regex := regexp.MustCompile(`\s+`)
	out := regex.ReplaceAllString(str, "")
	return strings.TrimSpace(out)
}
