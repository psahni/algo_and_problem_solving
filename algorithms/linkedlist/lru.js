class Node {
 constructor(key, value) {
  this.key = key;
  this.value = value;
  this.prev = null;
  this.next = null;
 } 
}

//#-----------------------------------------------------------------------------

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.tail.prev = this.head;
    this.head.next = this.tail;
    this.cache = {};
  }

  put(key, value) {
    const currentSize = Object.keys(this.cache).length;
    if (currentSize == this.capacity) {
      const lastNode = this.tail.prev;
      this.removeLastNode(lastNode);
      delete this.cache[lastNode.key];
    }

    let node = new Node(key, value)
    this.addToFront(node);
    this.cache[key] = node;
  }


  get(key) {
    if (typeof(this.cache[key])!="undefined") {
      const node = this.cache[key];
      if (node == this.tail.prev) {
        this.removeLastNode();
      } else {
        this.removeNode(node);
      }
      
      this.addToFront(node);
      return node.value;
    }
    
    return -1;
  }


  addToFront(node) {
    node.next = this.head.next;
    node.next.prev = node;

    node.prev = this.head;
    this.head.next = node;
  }

  removeLastNode(node) {
    const lastNode = node;
    lastNode.prev.next = this.tail;
    this.tail.prev = lastNode;
  }

  removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  print() {
    console.log("print()");
    let start = this.head.next;
    while (start.next!=null) {
      console.log(start.value);
      start = start.next; 
    }
  }
}

var cache = new LRUCache(5);

cache.put(1, 11);
cache.put(2, 22);
cache.put(3, 33);
cache.put(4, 44);
cache.put(5, 55);
cache.put(6, 66);

// console.log(cache.get(1));
// console.log(cache.get(6));
console.log("cache access:- ", cache.get(5));

cache.print();

console.log("cache access:- ", cache.get(2));

cache.print();
