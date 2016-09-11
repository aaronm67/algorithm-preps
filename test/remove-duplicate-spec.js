var _ = require('lodash');
var should = require('chai').should()
var expect = require('chai').expect;
var removeDuplicate = require('../remove-duplicate.js');

describe('remove-duplicate', function() {
  it('should remove duplicates', function() {
    var arr = removeDuplicate([ 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6 ]);
    arr.should.deep.equal([6]);
  });
});