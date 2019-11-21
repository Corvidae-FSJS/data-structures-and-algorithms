const { Queue } = require('../stacksAndQueues/stacks-and-queues');
//const { Hashtable } = require('../hashTable/hash-table');

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

  // breadthFirst(node, addNode) {
  //   // Create a Queue and add the initial node in it
  //   let q = new Queue();
  //   let explored = new Set();
  //   q.enqueue(node);
 
  //   // Mark the first node as explored.
  //   addNode(node);
 
  //   // Continue till the queue gets empty
  //   while(!q.isEmpty()) {
  //     let t = q.dequeue();
 
  //      // Log every element that comes out of the Queue
  //     console.log(t);
 
  //      // In the edges object, search for nodes this node is directly connected to.
  //      // Filter out the nodes that have already been explored.
  //      // Then mark each unexplored node as explored and add it to the queue.
  //     this.edges[t]
  //       .filter(n => !explored.has(n))
  //       .forEach(n => {
  //         explored.add(n);
  //         q.enqueue(n);
  //       });
  //   }
  // }


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