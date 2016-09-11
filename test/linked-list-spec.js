var _ = require('lodash');
var should = require('chai').should()
var expect = require('chai').expect;
var linkedlist = require('../linked-list.js');
var Node = linkedlist.Node;

describe('linked-list', function() {
  it('should get the nth to last', function() {

    var e = new linkedlist.Node("Eccles");
    var d = new linkedlist.Node("Devil's Food", e);
    var c = new linkedlist.Node("Cheese", d);
    var b = new linkedlist.Node("Bundt", c);
    var a = new linkedlist.Node("Angel Food", b);
    var node = linkedlist.nthToLast(2, a);

    node.value.should.equal("Devil's Food");
  });
});

describe('reverse-linked-list', function() {
  it('should reverse a list', function() {
    var list = linkedlist.fromArray([1, 2, 3, 4, 5]);
    var arr = linkedlist.toArray(list);

    var reversed = linkedlist.toArray(linkedlist.reverse(list));
    arr.reverse().should.deep.equal(reversed);
  });

  it('should not throw an exception with an empty list', function() {
    var node = undefined;
    var reversed = linkedlist.reverse(node);
  });

  it('should return the list with only a single item', function() {
    var list = new linkedlist.Node(5);
    linkedlist.reverse(list).should.have.property('value', 5)
  });

});

describe('delete-list', function() {
  it('should delete a node', function() {

    var c = new Node('c');
    var b = new Node('b', c);
    var a = new Node('a', b);

    linkedlist.deleteNode(b);
    linkedlist.toArray(a).should.deep.equal(['a', 'c']);
  });

  it('should log an error at the end of the list', function() {

    var c = new Node('c');
    var b = new Node('b', c);
    var a = new Node('a', b);
    expect(function() {
      linkedlist.deleteNode(c)
    }).to.throw();
  });

  it('shouldnt explode at the start of the list', function() {
    var c = new Node('c');
    var b = new Node('b', c);
    var a = new Node('a', b);

    linkedlist.deleteNode(a);
    linkedlist.toArray(b).should.deep.equal(['b', 'c']);
  });

});


describe('cycle-list', function() {
  it('should detect a cycle', function() {
    var back = new Node(3);
    var mid = new Node(4, back);
    var head = new Node(5, mid);
    back.next = head;
    linkedlist.hasCycle(head).should.equal(true);
  });

  it('should detect a non cycle', function() {
    var back = new Node(3);
    var mid = new Node(4, back);
    var head = new Node(5, mid);
    linkedlist.hasCycle(head).should.equal(false);
  });

  it('shouldnt fail on a single node', function() {
    var head = new Node(5);
    linkedlist.hasCycle(head).should.equal(false);
  });
});