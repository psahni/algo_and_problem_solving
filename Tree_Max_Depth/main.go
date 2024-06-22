package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func main() {
	rootNode := createNode(1)
	rootNode.Left = createNode(2)
	rootNode.Right = createNode(3)

	rootNode.Left.Left = createNode(4)
	rootNode.Left.Right = createNode(5)
}

func createNode(val int) *TreeNode {
	node := &TreeNode{}
	node.Val = val
	node.Left = nil
	node.Right = nil

	return node
}

func maxDepth(node *TreeNode) int {
	if node == nil {
		return 0
	}

	lDepth := maxDepth(node.Left)
	rDepth := maxDepth(node.Right)

	if lDepth > rDepth {
		return (lDepth + 1)
	} else {
		return (rDepth + 1)
	}
}
