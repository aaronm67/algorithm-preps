var _ = require('lodash');
var should = require('chai').should()
var expect = require('chai').expect;
var stack = require('../stack.js');

describe('max-stack', function() {
  it('should get the maximum element in the stack', function() {
    var maxStack = new stack.MaxStack();

    maxStack.push(1);
    maxStack.push(2);

    maxStack.getMax().should.equal(2);
  });

  it('shouldnt bomb with negatives', function() {
    var maxStack = new stack.MaxStack();

    maxStack.push(-1);
    maxStack.push(4000);
    maxStack.push(-2);
    maxStack.push(400);
    maxStack.push(2);
    maxStack.push(3);
    maxStack.getMax().should.equal(4000);
  });

  it('should update when the max value is at the end', function() {
    var maxStack = new stack.MaxStack();

    maxStack.push(-1);
    maxStack.push(-2);
    maxStack.push(400);
    maxStack.push(2);
    maxStack.push(3);
    maxStack.push(4000);
    maxStack.pop().should.equal(4000);
    maxStack.getMax().should.equal(400);
  });

  it('should return -Infinity when empty', function() {
    var maxStack = new stack.MaxStack();
    maxStack.push(1);
    maxStack.pop();
    maxStack.getMax().should.equal(-Infinity);
  });

});