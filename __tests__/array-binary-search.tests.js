const { binarySearch } = require('../challenges/arrayBinarySearch/array-binary-search');

describe.skip('search module', () => {
  it('ex. 1', () => {
    const arr = [4, 8, 15, 16, 23, 42];
    const num = 15;
    expect(binarySearch(arr, num)).toEqual(2);
  });

  it('ex. 2', () => {
    const arr2 = [11, 22, 33, 44, 55, 66, 77];
    const num2 = 90;
    expect(binarySearch(arr2, num2)).toEqual(-1);
  });
});



