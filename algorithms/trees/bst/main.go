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

func (b *BST) delete(val int) {
	b.root = _delete(b.root, val)
}

func _delete(node *TreeNode, val int) *TreeNode {
	if node == nil {
		return nil
	}

	if val < node.value {
		node.left = _delete(node.left, val)
	} else if val > node.value {
		node.right = _delete(node.right, val)
	} else { // Node with one children
		if node.left == nil {
			return node.right
		} else if node.right == nil {
			return node.left
		}
	}

	// Node with two children
	// Case 3: Node has two children
	// Find the smallest value in the right subtree (successor)
	successor := findMin(node.right)
	// // Copy successor's value to current node, Delete the successor
	node.value = successor.value

	// node.right = _delete(node.right, successor.value)

	return node
}

// findMin finds the node with the minimum value in the given tree
func findMin(node *TreeNode) *TreeNode {
	current := node
	for current != nil && current.left != nil {
		current = current.left
	}
	return current
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

func (b *BST) kthSmallest(k int) int {
	node := b.root
	stack := make([]*TreeNode, 0, 0)
	for true {
		for node != nil {
			stack = append(stack, node)
			node = node.left
		}

		node = stack[len(stack)-1]
		stack = stack[0 : len(stack)-1]
		k = k - 1
		if k == 0 {
			break
		}
		node = node.right
	}

	if k == 0 {
		return node.value
	}
	return -1
} // TC: O(n), SC: O(n)

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

	fmt.Println("In order")
	bst.inOrderTraversal(bst.root)
	// fmt.Println("\nPre order")
	// bst.preOrderTraversal(bst.root)
	// fmt.Println("\nPost order")
	// bst.postOrderTraversal(bst.root)

	// ans := bst.search(bst.root, 6)
	// fmt.Println(ans)

	// bst.delete(6)
	// fmt.Println("\nIn order")
	// bst.inOrderTraversal(bst.root)
	fmt.Println("\nkth smallest\n")
	a := bst.kthSmallest(3)
	fmt.Println("kth = ", a)
}
