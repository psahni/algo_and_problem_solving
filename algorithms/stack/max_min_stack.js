// HERE YOU HAVE TO MAINTAIN TWO STACKS
// ONE STACK IS FOR NORMAL STACK OPERATIONS, ONE STACK FOR
// FINDING MIN AT EVERY LEVEL

function MinStack() {
  this.stack = [];
  this.minValStack = [];
  this.maxValStack = [];

  this.push = function(v) {
    this.stack.push(v);
    let min = v;
    let max = v;
    if (this.minValStack.length) {
      min = Math.min(min, this.minValStack.at(-1));
      max = Math.max(max, this.maxValStack.at(-1));
    }
    this.minValStack.push(min);
    this.maxValStack.push(max);
  }

  this.pop = function() {
    this.stack.pop()
    this.minValStack.pop();
    this.maxValStack.pop();
  }

  this.top = function() {
    return this.stack.at[-1];
  }

  this.getMin = function() {
    return this.minValStack.at(-1);
  }

  this.getMax = function() {
    return this.maxValStack.at(-1);
  }
}

const stackInstance = new MinStack();
stackInstance.push(1);
stackInstance.push(0);
stackInstance.push(2);
stackInstance.push(-1);
stackInstance.push(5);
stackInstance.pop();

console.log(stackInstance.getMin());
console.log(stackInstance.getMax());