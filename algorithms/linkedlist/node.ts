export class Node {
  prev: Node | null;
  next: Node | null;
  val: any;

  constructor(val: any, prev: Node | null = null, next: Node | null = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;  
  }
}
