const array1 = [1, 2, 3, 4, 5, 6];
const array2 = [89, 2354, 3546, 23, 10, -923, 823, -12];
const array3 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199];

function reverseArray(arr) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    newArr[i] = arr[arr.length - (i + 1)];
  }
  return newArr;
}

console.log(reverseArray(array1));
console.log(reverseArray(array2));
console.log(reverseArray(array3));



/*
VERSIONS SHOWN IN CLASS
function reverse(arr) {
  const reversed = [];
  for(let i = arr.length - 1; i >= 0; i--) {
    reversed[reversed.length] = arr[i]; 
  }
  return reversed;
}

// eslint-disable-next-line no-irregular-whitespace
MORE PREFERRED USES LESS MEMORY, ENERGY

function reverse2(arr) {
  for(let i =0; i < arr.length/2; i++) {
    const temp = arr[i];
    const otherIndex = arr.length - i - 1;
    arr[i] = arr[otherIndex];
    arr[otherIndex] = temp;
  }
  return arr;
}
*/