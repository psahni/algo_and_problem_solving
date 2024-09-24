package main

import "fmt"

type Node struct {
	next *Node
	prev *Node
	val  int16
}

var head *Node = nil

func main() {
	singleLinkedList()
}

func singleLinkedList() {
	node1 := createNewNode(1)
	head = node1
	node1.next = nil

	node2 := createNewNode(2)
	node1.next = node2
	node2.next = nil

	node3 := createNewNode(3)
	node2.next = node3
	node3.next = nil

	print(head)
}

func createNewNode(val int16) *Node {
	return &Node{
		next: nil,
		val:  val,
	}
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
