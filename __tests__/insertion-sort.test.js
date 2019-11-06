const insertionSort = require('../challenges/insertionSort/insertion-sort');

describe('Insertion Sort', () => {
  it('sorts the array given', () => {
    const arr = [13, 42, 1, 81];

    expect(insertionSort(arr)).toEqual([1, 13, 42, 81]);
  });
});