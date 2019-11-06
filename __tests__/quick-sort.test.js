const quickSort = require('../challenges/quickSort/quick-sort');

describe('Quick Sort', () => {
  it('sorts a given array', () => {
    const arr = [13, 42, 81, 1, 34];
    const right = (arr.length - 1);
    const left = 0;

    expect(quickSort(arr, left, right)).toEqual([1, 13, 34, 42, 81]);
  });
});