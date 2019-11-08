const { Stack, Queue } = require('../challenges/stacksAndQueues/stacks-and-queues');

describe.skip('Stacks and Queues', () => {
  it('pushes a node onto the top of  a stack', () => {

    const testStack = new Stack();
    testStack.push('Cult of Luna');
    expect(testStack.top.value).toBe('Cult of Luna');
  });

  it('pushes multiple nodes onto the stack', () => {
    const testStack = new Stack;
    testStack.push('Cult of Luna');
    testStack.push('Dödsrit');
    testStack.push('Auðn');
    expect(testStack.top.value).toBe('Auðn');
    expect(testStack.top.next.value).toBe('Dödsrit');
    expect(testStack.top.next.next.value).toBe('Cult of Luna');
  });

  it('pops a node off of the top of a stack', () => {
    const testStack = new Stack;
    testStack.push('Cult of Luna');
    testStack.push('Dödsrit');
    testStack.push('Auðn');
    const result = testStack.pop();
    expect(result).toBe('Auðn');
  });

  it('empties a stack after multiple pops', () => {
    const testStack = new Stack;
    testStack.push('Cult of Luna');
    testStack.push('Dödsrit');
    testStack.push('Auðn');
    testStack.pop();
    testStack.pop();
    testStack.pop();
    const result = testStack.pop();
    expect(result).toBe(null);
  });

  it('peeks at the top value of a stack', () => {
    const testStack = new Stack;
    testStack.push('Cult of Luna');
    testStack.push('Dödsrit');
    testStack.push('Auðn');
    expect(testStack.peek()).toBe('Auðn');
  });

  it('can instantiate an empty stack', () => {
    const testStack = new Stack;
    expect(testStack.top).toBe(null);
  });

  it('enqueues a new node onto the back of a queue', () => {
    const newQueue = new Queue();
    newQueue.enqueue('Ef');
    expect(newQueue.front.value).toBe('Ef');
  });

  it('enqueues multiple nodes onto a queue', () => {
    const newQueue = new Queue();
    newQueue.enqueue('Ef');
    newQueue.enqueue('Caspian');
    newQueue.enqueue('Alcest');
    expect(newQueue.front.value).toBe('Ef');
    expect(newQueue.front.next.value).toBe('Caspian');
    expect(newQueue.front.next.next.value).toBe('Alcest');
  });

  it('can dequeue the first node', () => {
    const newQueue = new Queue();
    newQueue.enqueue('Ef');
    newQueue.enqueue('Caspian');
    newQueue.enqueue('Alcest');
    const result = newQueue.dequeue();
    expect(result).toBe('Ef');
  });

  it('can empty a queue after several dequeues', () => {
    const newQueue = new Queue();
    newQueue.enqueue('Ef');
    newQueue.enqueue('Caspian');
    newQueue.enqueue('Alcest');
    newQueue.dequeue();
    newQueue.dequeue();
    newQueue.dequeue();
    const result = newQueue.dequeue();
    expect(result).toBe('queue is desolate');
  });

  it('can peek into a queue', () => {
    const newQueue = new Queue();
    newQueue.enqueue('Ef');
    newQueue.enqueue('Caspian');
    newQueue.enqueue('Alcest');
    const result = newQueue.dequeue();
    expect(result).toBe('Ef');
  });

  it('can instantiate a new queue', () => {
    const newQueue = new Queue();
    expect(newQueue.front).toBe(null);
  });
});