package main

import "fmt"

type Node struct {
	next *Node
	prev *Node
	val  int16
}

var head *Node = nil

func main() {
	doubleLinkedList()
}

func doubleLinkedList() {
	node1 := createNewNodeDouble(1, nil)
	head = node1

	node2 := createNewNodeDouble(2, node1)
	node1.next = node2

	node3 := createNewNodeDouble(3, node2)
	node2.next = node3

	// print(head)
	// printReverse(head)
	addToFront(10)
	// print(head)
	removeNode(3)
	print(head)
}

func createNewNode(val int16) *Node {
	return &Node{
		next: nil,
		val:  val,
	}
}

func removeNode(val int16) {
	start := head
	for start.val != val {
		start = start.next
	}

	if start.prev == nil { // First node
		head = start.next
		start.next.prev = nil
		start = nil
		return
	}

	if start.next == nil { // Last node
		start.prev.next = nil
		start = nil
		return
	}

	start.prev.next = start.next
	start = nil
}

func createNewNodeDouble(val int16, prev *Node) *Node {
	return &Node{
		next: nil,
		prev: prev,
		val:  val,
	}
}

func addToFront(val int16) {
	node := createNewNodeDouble(val, nil)
	node.next = head
	head = node
}

func print(head *Node) {
	start := head
	for {
		fmt.Println("value ", start.val)
		start = start.next
		if start == nil {
			break
		}
	}
	fmt.Println("finished")
}

func printReverse(head *Node) {
	fmt.Println("printReverse()")
	start := head
	last := start
	for start != nil {
		last = start
		start = start.next
	}

	for last != nil {
		fmt.Println(last.val)
		last = last.prev
	}
}
