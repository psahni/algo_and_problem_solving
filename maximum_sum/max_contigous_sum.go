package main
import (
    "fmt"
)


func main() {
    arr := []int{-2, 0, -4, 6, 1, 2, -3, 0, 4}
    sum := 0
    max := arr[0]
    start :=0
    end :=0
    
    for index, v := range arr {
        sum += v
        if sum < 0 {
            sum = 0
            max = 0
            start = index + 1
        }
        
        if max < sum {
            max = sum
            end = index
        }
    }
    
    fmt.Println("max sum = ", max, "from ", start, " to", end)
}
