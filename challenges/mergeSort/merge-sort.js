const mergeSort = arr => {
  const len = arr.length;
  let newArr;

  if(len > 1) {
    let center = Math.floor(len / 2);
    let left = arr.slice(0, center);
    let right = arr.slice(center, len);

    mergeSort(left);
    mergeSort(right);
    newArr = merge(left, right, arr);
  }
  return newArr;
};

const merge = (left, right, arr) => {
  let i = 0;
  let j = 0;
  let k = 0;
  
  while(i < left.length && j < right.length) {
    if(left[i] <= right[j]) {
      arr[k] = left[i];
      i += 1;
    } else {
      arr[k] = right[j];
      j += 1;
    }
    k++;
  }
  if(i === left.length) {
    while(j < right.length) {
      arr[k] = right[j];
      i += 1;
      k += 1;
    }
  }
  return arr;
};

module.exports = mergeSort;