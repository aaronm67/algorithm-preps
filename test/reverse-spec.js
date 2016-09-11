var _ = require('lodash');
var should = require('chai').should()

var reverse = require('../reverse.js');

describe('reverse', function() {
  it('reverse', function() {
    var message = 'find you will pain only go you recordings security the into if';
    var reversed = reverse(message);
    reversed.should.equal('if into the security recordings you go only pain will you find');
  });
});