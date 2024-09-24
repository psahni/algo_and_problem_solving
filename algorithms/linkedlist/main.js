let head = null


function BuildList() {
  node1 = createNode(1)
  head = node1

  node2 = createNode(2)
  node1.next = node2

  node3 = createNode(3)
  node2.next = node3
}


function createNode(v) {
  return  {
    val: v,
    next: null
  }
}


function addToFront(val) {
  newNode = createNode(val)
  newNode.next = head
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

BuildList()
// print()

addToFront(10)
print()