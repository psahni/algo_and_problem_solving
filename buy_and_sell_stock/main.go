package main

import "fmt"

// [7, 1, 5, 3, 6, 4]

func main() {
	findMaxProfit([]int{7, 1, 5, 3, 6, 4})
}

func findMaxProfit(arr []int) int {
	minPrice := 7
	profit := 0
	day1 := 0
	day2 := 1

	for i, price := range arr {
		if i == len(arr)-1 {
			break
		}

		if price < minPrice {
			minPrice = price
			day1 = i
		}

		sellingPrice := arr[i+1]
		tempProfit := sellingPrice - minPrice

		if tempProfit > profit {
			profit = tempProfit
			day2 = i + 1
		}
	}

	fmt.Println("max profit = ", profit, "buying day = ", day1+1, " and selling day = ", day2+1)
	return profit
}

/*
	// JAVA SOLUTION
	class Solution {
    public int maxProfit(int[] prices) {
        int profit = 0, left = 0;
        for (int i = 1; i < prices.length; i++) {
            if (prices[i] > prices[left]) {
                profit = Math.max(profit, prices[i] - prices[left]);
            } else {
                left = i;
            }
        }
        return profit;
    }
} // TC: O(n), SC: O(1)
*/
