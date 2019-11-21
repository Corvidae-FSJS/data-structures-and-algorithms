const { Graph } = require('../challenges/graph/graph');

describe('breadth first traversal of graph class', ()=> {
  it('A collection of all nodes can be properly retrieved from the graph', ()=> {
    let graph = new Graph();
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addNode('D');
    graph.addNode('E');
    graph.addNode('F');
    graph.addNode('G');

    graph.addEdge('A', 'C');
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'D');
    graph.addEdge('D', 'E');
    graph.addEdge('E', 'F');
    graph.addEdge('B', 'G');
    expect(graph.breadthFirst('A')).toEqual(['A', 'B', 'E', 'C', 'D']);
  });
}); 