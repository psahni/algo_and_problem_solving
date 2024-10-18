package helpers

type Pair struct {
	key   int
	value interface{}
}

func MapToStruct(m map[int]interface{}) []Pair {
	pairs := make([]Pair, 0)
	for k, v := range m {
		pairs = append(pairs, Pair{key: k, value: v})
	}

	return pairs
}

func SortStruct() {

}
