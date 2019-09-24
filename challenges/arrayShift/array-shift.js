/**
 * Array Shift Insert
 * @param {*} arr - the array to be shifted
 * @param {*} num - the number to be inserted into the array
 * @returns {*} the array, modified in-place, with one new element inserted at the middle position
 * @function insertShiftArray
 */

function insertShiftArray(arr, num) {
  for(let i = 0; i < arr.length; i++) {
    arr[arr.length - i] = arr[arr.length - 1 - i];
  }
  arr[0] = num;
  return arr;
}

module.exports = {
  insertShiftArray
}; 



//Marty's Demo Code
// //linear
// function unshiftArray(arr, element) {
//   for(let i = arr.length; i > 0; i--) {
//     arr[i] = arr[i - 1];
//   }
//   arr[0] = element;
// }

// //constant
// function pushArray(arr, element) {
//   arr[arr.length] = element;
// }
