// splits an array around a random pivot, such that all items less than the pivot are first, greater than are last
var pivot = function(arr, compare) {
  if (arr.length <= 1) {
    return arr;
  }

  var pivotIdx = arr.length - 1;
  var pivotVal = arr[pivotIdx];
  var before = [];
  var after = [];
  var same = [];

  for (i = 0; i < arr.length; i++) {
    var val = arr[i];
    var compareResult = compare(pivotVal, arr[i]);

    // if greater or equal, push to the front of array
    if (compareResult > 0) {
      before.push(val);
    }
    else if (compareResult < 0) {
      after.push(val);
    }
    // otherwise, push to the end of array
    else {
      same.push(val);
    }
  }

  before = pivot(before, compare);
  after = pivot(after, compare);
  return before.concat(same, after);
}

module.exports = function(arr, compareFunc) {
  // default to a standard a > b 
  arr = arr.slice(0);
  if (!compareFunc) {
    compareFunc = function(a, b) {
      if (a > b) {
        return 1;
      }
      
      if (b > a) {
        return -1;
      }

      return 0;
    };
  }

  return pivot(arr, compareFunc);
};
