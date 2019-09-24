/**
 * Array Binary Search
 * @param {*} arr - a sorted array, to be used for searching
 * @param {*} num - the search key
 * @returns {*} the index of an element in the array that matches the search key, or notFound(-1) if the search key does not exist in the array
 * @function binarySearch
 */

function binarySearch(arr, num) {
  let startIndex = 0;
  let endIndex = arr.length - 1;
  const notFound = -1;
  while(startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    if(num === arr[middleIndex]) {
      return middleIndex; 
    }
    if(num > arr[middleIndex]) {
      startIndex = middleIndex + 1;
    }
    if(num < arr[middleIndex]) {
      endIndex = middleIndex - 1;
    }
  }
  return notFound;
}


module.exports = {
  binarySearch
};