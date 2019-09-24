const { insertShiftArray } = require('../challenges/arrayShift/array-shift');

describe('shifts array', () => {
  it('ex. 1', () => {
    const arr = [2, 4, 6, 8];
    const num = 5;
    expect(insertShiftArray(arr, num)).toEqual([5, 2, 4, 6, 8]);
  });

  it('ex. 2', () => {
    const arr2 = [4, 8, 15, 23, 42];
    const num2 = 16;
    expect(insertShiftArray(arr2, num2)).toEqual([16, 4, 8, 15, 23, 42]);
  });
});