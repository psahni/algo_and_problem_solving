package main

import (
        "bufio"
        "fmt"
        "os"
        "strconv"
        "strings"
)

type TreeNode struct {
        Val   int
        Left  *TreeNode
        Right *TreeNode
}

func reverseInOrder(root *TreeNode, count []int, result []int) {
	if root == nil || count[0] >= 2 {
		return;
	}

	reverseInOrder(root.Right, count, result)

	count[0]++

	if (count[0] == 2) {
		result[0] = root.Val
		return
	}

	reverseInOrder(root.Left, count, result)
}

// Candidate Function
func findSecondLargest(root *TreeNode) (int, int) {
  count := []int{0}
  result := []int{-1}

  reverseInOrder(root, count, result)
  return [result[0], count[0]]
}

// Function to construct BST from array
func constructBST(nums []int) *TreeNode {
    if len(nums) == 0 {
        return nil
    }

    // Create the root node
    root := &TreeNode{Val: nums[0]}
    current := root

    // Iterate through the remaining values in nums
    for i := 1; i < len(nums); i++ {
        if nums[i] != -1 {
            // Create a new node
            newNode := &TreeNode{Val: nums[i]}

            // Insert the new node into the BST
            current = root
            for {
                // If the new value is less than the current node's value, move left
                if newNode.Val < current.Val {
                    if current.Left == nil {
                        current.Left = newNode
                        break
                    }
                    current = current.Left
                } else { // Otherwise, move right
                    if current.Right == nil {
                        current.Right = newNode
                        break
                    }
                    current = current.Right
                }
            }
        }
    }

    return root
}

// Main
func main() {
        // Get input
        reader := bufio.NewReader(os.Stdin)
        line, _ := reader.ReadString('\n')
        line = strings.TrimSpace(line)
        numStr := strings.Fields(line)
        bst := make([]int, len(numStr))

        for i, num := range numStr {
                val, _ := strconv.Atoi(num)
                bst[i] = val
        }

        // Construct BST
        root := constructBST(bst)

        // Call Candidate Function
        result, level := findSecondLargest(root)

        // Print Result
        fmt.Println(fmt.Sprintf("[%d,%d]", result, level))
}