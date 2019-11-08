const { BinaryTree } = require('../challenges/tree/tree');
const { fizzBuzzTree } = require('../challenges/fizzbuzz-tree/fizz-buzz-tree');

describe.skip('FizzBuzz Tree', () => {
  it('determines if value of each node is divisble by 3, 5, or both', () => {
    const tree = new BinaryTree();
    tree.add(5);
    tree.add(15);
    tree.add(3);

    expect(fizzBuzzTree(tree.root.left)).toBe('Fizz');
    expect(fizzBuzzTree(tree.root.right)).toBe('FizzBuzz');
    expect(fizzBuzzTree(tree.root)).toBe('Buzz');
  });
});