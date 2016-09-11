// Given two sorted arrays, merges the two into a single sorted array
// Works in O(N) time, O(N) space.
module.exports = function(arr1, arr2) {
  var i = 0;
  var j = 0;

  var newArr = [];

  while(i < arr1.length && j < arr2.length) {
    var val1 = arr1[i];
    var val2 = arr2[j];

    if (val1 <= val2) {
      newArr.push(val1);
      i++;
    }
    else {
      newArr.push(val2);
      j++;
    }
  }

  while (i < arr1.length) {
    newArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    newArr.push(arr2[j]);
    j++;
  }

  return newArr;
}