let head = null;

function BuildList() {
  node1 = createNode(1, null)
  head  = node1

  node2 = createNode(2, node1)
  node1.next = node2

  node3 = createNode(3, node2)
  node2.next = node3 
}


function createNode(val, prev) {
  return  {
    val: val,
    prev: prev,
    next: null,
  }
}

function addToFront(val) {
  newNode = createNode(val)
  newNode.next = head
  newNode.prev = null
  head = newNode
}


function print() {
  start = head;
  while (start!=null) {
    console.log("value = ", start.val)
    start = start.next
  }
  console.log("finished")
}

function reversePrint() {
  console.log("reversePrint()")
  start = head;
  while (start!=null) {
    last = start
    start = start.next
  }


  while(last!=null) {
    console.log(last.val)
    last = last.prev
  }
}


BuildList()

addToFront(10)
// reversePrint()

print()