const Graph = require('../challenges/graph/graph');

describe('Graph Class Functionality', () => {
  it('adds a new node to the graph', () => {
    const test = new Graph();
    test.addNode('Corvidae');

    expect(test.nodeList.get('Corvidae')).toEqual([]);
  });

  it('adds a new edge between the two nodes in the graph with the weight of their edge', () => {
    const test = new Graph();
    test.addNode('Eks');
    test.addNode('Corvidae');
    test.addEdge('Eks', 'Corvidae', 23);

    expect(test.nodeList.get('Eks')).toEqual([{ 'Corvidae': 23 }]);
    expect(test.nodeList.get('Corvidae')).toEqual([{ 'Eks': 23 }]);
  });

  it('returns all of the nodes in the graph as a collection', () => {
    const test = new Graph();
    test.addNode('Eks');
    test.addNode('Corvidae');
    test.addNode('Kaon');

    expect(test.getNodes()).toEqual(['Eks', 'Corvidae', 'Kaon']);
  });

  it('returns a collection of nodes connected to the given node', () => {
    const test = new Graph();
    test.addNode('Eks');
    test.addNode('Corvidae');
    test.addNode('Kaon');
    test.addNode('no connection');
    test.addEdge('Eks', 'Corvidae', 23);
    test.addEdge('Eks', 'Kaon', 23);

    expect(test.getNeighbors('Eks')).toEqual([{ 'Corvidae': 23 }, { 'Kaon': 23 }]);
    expect(test.getNeighbors('no connection')).toEqual([]);
  });

  it('returns the total number of nodes in the graph', () => {
    const test = new Graph();
    test.addNode('Eks');
    test.addNode('Corvidae');
    test.addNode('Kaon');
    test.addNode('size');

    expect(test.size()).toBe(4);
  });
});