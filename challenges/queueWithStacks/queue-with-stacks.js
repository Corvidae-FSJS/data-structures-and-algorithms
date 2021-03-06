const stackNQueue = require('../stacksAndQueues/stacks-and-queues.js');

class PseudoQueue {
  constructor() {
    this.stackIn = new stackNQueue.Stack();
    this.stackOut = new stackNQueue.Stack();
  }

  enqueue(value){
    while(this.stackIn.peek()) {
      this.stackOut.push(this.stackIn.pop());
    }
    this.stackIn.push(value);
    while(this.stackOut.peek()) {
      this.stackIn.push(this.stackOut.pop());
    }
  }

  dequeue() {
    while(this.stackIn.top.next) {
      this.stackOut.push(this.stackIn.pop());
    }
    const poppedResult = this.stackIn.pop();
    while(this.stackOut.peek()) {
      this.stackIn.push(this.stackOut.pop());
    }
    return poppedResult;
  }
}

module.exports = PseudoQueue;