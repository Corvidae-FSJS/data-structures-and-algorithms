const { BinaryTree } = require('../challenges/tree/tree');
const treeIntersection = require('../challenges/treeIntersection/tree-intersection');

describe.skip('Tree Intersection Functionality', () => {
  it('returns values found in both trees', () => {
    const tree1 = new BinaryTree();
    tree1.add('Dylan');
    tree1.add('Elizabeth');
    tree1.add('Bentley');
    tree1.add('Kaon');

    const tree2 = new BinaryTree();
    tree2.add('Dylan');
    tree2.add('Ethan');
    tree2.add('Bentley');
    tree2.add('Jake');
    tree2.add('Reuben');
    
    expect(treeIntersection(tree1, tree2)).toEqual(['Bentley', 'Dylan']);
  });
});