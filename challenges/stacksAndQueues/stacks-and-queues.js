class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  /**
   * Push, takes any value as an argument and adds a new node with that value to the top of the stack.
   * @param value
   */
  push(value) {
    const node = new Node(value);
    if(!this.top) this.top = node;
    else {
      node.next = this.top;
      this.top = node;
    }
  }

  /**
   * Pop, takes any value as an argument and adds a new node with that value to the top of the stack
   * @param
   */
  pop() {
    let result;
    if(this.top) {
      result = this.top.value;
      this.top = this.top.next;
    }
    else result = null;
    return result;
  }

  /**
   * Peek, takes an argument and returns the value of the node located on top of the stack, without removing it from the stack.
   * @param
   */
  peek() {
    return this.top.value;
  }
}

class Queue {
  constructor() {
    this.front = null;
  }

  /**
   * enqueue, takes any value as an argument and adds a new node with that value to the back of the queue.
   * @param value
   */
  enqueue(value) {
    let newNode = new Node(value);
    let currentNode = this.front;
    if(!currentNode) {
      this.front = newNode;
    } else {
      while(currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(value);
    }
  }

  /**
   * dequeue, does not take any argument, removes the node from the front of the queue, and returns the node’s value.
   * @param
   */
  dequeue() {
    let currentNode = this.front;
    let result;
    if(!currentNode) {
      return 'queue is desolate';
    } else {
      result = currentNode.value;
      this.front = currentNode.next;
    }
    return result;
  }

  /**
   * Peek, does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.
   * @param
   */
  peek() {
    return this.front.value;
  }
}


module.exports = {
  Node,
  Stack,
  Queue
};