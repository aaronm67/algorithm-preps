// Given an array, returns an array with any #s with duplicates removed
module.exports = function(arr) {
  var positions = {}

  for (var i = 0; i < arr.length; i++) {
    var val = arr[i];
    if (typeof(positions[val]) !== 'undefined') {
      delete(arr[i]);
      delete(arr[positions[val]]);
    }
    else {
      positions[val] = i;
    }
  }

  var ret = [];
  for (var i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) !== 'undefined') {
      ret.push(arr[i]);
    }
  };

  return ret;
};