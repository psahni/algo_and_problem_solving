import { Node } from './node.js';

class SingleLinkedList {
  lastNode: Node | null;
  headNode: Node | null;

  constructor() {
    this.lastNode = null;
    this.headNode = null;
  }

  addNode(value: any) {
    this.createNode(value, this.lastNode);
  }

  createNode(val: any, prev: Node | null) {
    const node = new Node(val, prev);
    if (!this.headNode) {
      this.headNode = node;
    }

    // When new node is created, the previous node's(which is your last node) next should point to the new node, 
    // and the new node's next should be null  
    // then new node becomes the last node

    if (prev) {
      prev.next = node;
      node.next = null;
    }
    this.lastNode = node;
  }


  print() {
    let current = this.headNode;
    while (current !== null) {
      console.log(current.val);
      current = current.next;
    }
  }
}

const list = new SingleLinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.print();