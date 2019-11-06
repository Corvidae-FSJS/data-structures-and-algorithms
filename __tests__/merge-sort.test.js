const mergeSort = require('../challenges/mergeSort/merge-sort');

describe.skip('Merge Sort', () => {
  it('sorts a given array', () => {
    const arr = [42, 13, 81, 1, 34]

    expect(mergeSort(arr)).toEqual([1, 13, 34, 42, 81]);
  });
});