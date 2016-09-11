_ = require('lodash');
should = require('chai').should()

quicksort = require('../quicksort.js');

describe('Quicksort', function() {
  it('should sort simple arrays', function() {
    var arr = [ 2, 115, -12, 5, 6, 16, -1 ];
    sorted = quicksort(arr);
    sorted.should.deep.equal([-12, -1, 2, 5, 6, 16, 115]);
  });

  it('should sort duplicated correctly arrays', function() {
    var arr = [ 2, 115, -12, 5, 6, 6, 5, 5, 6, 6, 6, 16, -1 ];
    sorted = quicksort(arr);
    sorted.should.deep.equal([-12, -1, 2, 5, 5, 5, 6, 6, 6, 6, 6, 16, 115]);
  });

  it('shouldn\'t modify the arrray', function() {
    var arr = [ 2, 115, -12, 5, 6, 6, 5, 5, 6, 6, 6, 16, -1 ];
    var cloned = arr.slice(0);
    sorted = quicksort(arr);
    arr.should.deep.equal(cloned);
  });

  it('should sort already sorted arrays', function() {
    var arr = [ 2, 115, -12, 5, 6, 6, 5, 5, 6, 6, 6, 16, -1 ];
    var preSorted = arr.sort(function(a, b) { return a - b });
    sorted = quicksort(preSorted);
    sorted.should.deep.equal(preSorted);
  });

  it('should sort very large arrays', function() {
    var count = 100000;
    var arr = [];
    while (count > 0) {
      arr.push(Math.random() * 1000);
      count--;
    }

    console.time('custom quicksort');
    sorted = quicksort(arr);
    console.timeEnd('custom quicksort');

    console.time('their quicksort');
    var preSorted = arr.sort(function(a, b) { return a - b; });
    console.timeEnd('their quicksort');
    sorted.should.deep.equal(preSorted);
  });


});
