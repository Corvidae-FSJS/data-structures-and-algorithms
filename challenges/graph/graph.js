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
}

module.exports = Graph;