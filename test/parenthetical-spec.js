var _ = require('lodash');
var should = require('chai').should()

var parens = require('../parentheticals.js');

describe('parentheticals', function() {
  it('should print', function() {
    var str = 'Sometimes (when I nest them (my parentheticals) too much (like this (and this)))';
    console.log(parens(str, 10));
  });

});