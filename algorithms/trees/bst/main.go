// BINARY SEARCH TREE
// 1. INSERTION
// 2. Deletion
// 3. Searching
// 4.Travesarls - InOrder, PreOrder, PostOrder

package main

import "fmt"

type TreeNode struct {
	value int
	left  *TreeNode
	right *TreeNode
}

func CreateTreeNode(val int) *TreeNode {
	return &TreeNode{
		value: val,
		left:  nil,
		right: nil,
	}
}

type BST struct {
	root *TreeNode
}

func (b *BST) insert(val int) {
	node := CreateTreeNode(val)
	if b.root == nil {
		b.root = node
		return
	}

	r := b.root
	_insert(r, val)
}

func _insert(node *TreeNode, val int) {
	if val < node.value {
		if node.left == nil {
			node.left = CreateTreeNode(val)
		} else {
			_insert(node.left, val)
		}
	} else {
		if node.right == nil {
			node.right = CreateTreeNode(val)
		} else {
			_insert(node.right, val)
		}
	}
}

func (b *BST) inOrderTraversal(node *TreeNode) {
	if node != nil {
		b.inOrderTraversal(node.left)
		fmt.Print(node.value, " ")
		b.inOrderTraversal(node.right)
	}
}

func (b *BST) preOrderTraversal(node *TreeNode) {
	if node != nil {
		fmt.Print(node.value, " ")
		b.preOrderTraversal(node.left)
		b.preOrderTraversal(node.right)
	}
}

func (b *BST) postOrderTraversal(node *TreeNode) {
	if node != nil {
		b.postOrderTraversal(node.left)
		b.postOrderTraversal(node.right)
		fmt.Print(node.value, " ")
	}
}

func (b *BST) search(node *TreeNode, val int) *TreeNode {
	if node == nil || node.value == val {
		return node
	}

	if val < node.value {
		return b.search(node.left, val)
	}

	if val > node.value {
		return b.search(node.right, val)
	}

	return nil
}

func main() {
	bst := BST{}
	values := []int{8, 3, 10, 1, 6, 4, 7, 14, 13}

	for _, val := range values {
		bst.insert(val)
	}

	// fmt.Println("In order")
	// bst.inOrderTraversal(bst.root)
	// fmt.Println("\nPre order")
	// bst.preOrderTraversal(bst.root)
	// fmt.Println("\nPost order")
	// bst.postOrderTraversal(bst.root)

	ans := bst.search(bst.root, 6)
	fmt.Println(ans)
}
