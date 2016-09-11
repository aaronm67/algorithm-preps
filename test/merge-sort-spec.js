var _ = require('lodash');
var should = require('chai').should()
var expect = require('chai').expect;
var mergeSort = require('../merge-sort.js');

describe('merge-sort', function() {
  it('should output a single sorted array from two sorted arrays', function() {
    var list1 = [3, 4, 6, 10, 11, 15];
    var list2 = [1, 5, 8, 12, 14, 19];
    var sorted = mergeSort(list1, list2)
    sorted.should.deep.equal(list1.concat(list2).sort(function(a, b) {
      if (a > b) return 1;
      if (b > a) return -1;
      return 0;
    }));
  });
});