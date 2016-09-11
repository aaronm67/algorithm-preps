// Given two sorted arrays, merges the two into a single sorted array
// Works in O(N) time, O(N) space.
module.exports = function(arr1, arr2) {
  arr1 = arr1.slice(0);
  arr2 = arr2.slice(0);
  var i = 0;
  var j = 0;

  var newArr = [];

  while(i < arr1.length && j < arr2.length) {
    var val1 = arr1[i];
    var val2 = arr2[j];

    if (val1 <= val2) {
      newArr.push(arr1.shift());
    }
    else {
      newArr.push(arr2.shift());
    }
  }

  return newArr.concat(arr1).concat(arr2);
}