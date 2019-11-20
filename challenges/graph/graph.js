const { Queue } = require('../stacksAndQueues/stacks-and-queues');
const { Hashtable } = require('../hashTable/hash-table');

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class Graph {
  constructor() {
    this.nodeList = new Map();
  }

  addNode(value) {
    this.nodeList.set(value, []);
    return this.nodeList.get(value);
  }

  addEdge(node1, node2, weight) {
    this.nodeList.get(node1).push({ [node2]: weight });
    this.nodeList.get(node2).push({ [node1]: weight });
  }

  getNodes() {
    let nodeCollection = [];
    const keys = this.nodeList.keys();

    for(let key of keys) {
      nodeCollection.push(key);
    }
    return nodeCollection;
  }

  getNeighbors(node) {
    return this.nodeList.get(node);
  }

  size() {
    return this.nodeList.size;
  }

  breadthFirst(initial) {
    let visitList = new Queue();
    let visited = new Map();

    let result = [];
    visitList.enqueue(initial);
    while(visitList.front !== null) {
      let node = visitList.dequeue();
      if(node && !visited.has(node)) {
        result.push(node.value);
        visited.set(node);
        if(this.getNeighbors(node)){
          this.getNeighbors(node).forEach(neighbor => visitList.enqueue(neighbor.node));
        }
      }
    }
    return result;
  }
}

module.exports = { Graph, Node };