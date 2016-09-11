var _ = require('lodash');
var should = require('chai').should()
var expect = require('chai').expect;
var mergeSort = require('../merge-sort.js');

var intSort = function(a, b) {
    if (a > b) return 1;
    if (b > a) return -1;
    return 0;
};

describe('merge-sort', function() {
  it('should output a single sorted array from two sorted arrays', function() {
    var list1 = [3, 4, 6, 10, 11, 15];
    var list2 = [1, 5, 8, 12, 14, 19];
    var sorted = mergeSort(list1, list2);

    console.log(sorted);

    sorted.should.deep.equal(list1.concat(list2).sort(intSort));
  });

  it('shouldnt bomb on odd inputs', function() {
    var list1 = [];
    var list2 = [];

    var sorted = mergeSort(list1, list2);
    sorted.should.deep.equal([]);

    list1 = [ -1, 2, 9999999];
    list2 = [];
    sorted = mergeSort(list1, list2);
    sorted.should.deep.equal([ -1, 2, 9999999]);

    var count = 10000;
    list1 = [];
    list2 = [];
    while (count > 0) {
      list1.push(Math.random());
      list2.push(Math.random() / 2);
      count--;
    }

    list1 = list1.sort();
    list2 = list2.sort();

    console.time('native sort');
    var nativeSort = list1.concat(list2).sort(intSort);
    console.timeEnd('native sort');

    console.time('merge sort');
    sorted = mergeSort(list1, list2);
    sorted.should.deep.equal(nativeSort);
    console.timeEnd('merge sort');
  });
});