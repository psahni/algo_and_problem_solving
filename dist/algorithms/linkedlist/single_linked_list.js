import { Node } from './node.js';
class SingleLinkedList {
    constructor() {
        this.lastNode = null;
        this.headNode = null;
    }
    addNode(value) {
        this.createNode(value, this.lastNode);
    }
    createNode(val, prev) {
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
        let current = this.lastNode;
        while (current) {
            console.log(current.val);
            current = current.prev;
        }
    }
}
const list = new SingleLinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.print();
