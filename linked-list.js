
// Determines if a linked-list connects to itself
function hasCycle(node) {

  while (node) {
    if (node.touched) {
      return true;
    }

    node.touched = true;
    node = node.next;
  }

  return false;
}

// Deletes an element from a list given only the node to delete
// NOTE: In JS, it's not possible to remove the last element in a list using this method.
// O(1), O(1) space
function deleteNode(node) {
  // empty list
  if (!node) {
    return;
  }

  // tail of list
  if (!node.next) {
    throw 'Cannot delete last object in the tree'
  }

  var next = node.next;
  node.value = next.value;
  node.next = next.next;
}

// Given a node and a number, return the Nth to last node in a linked list (O(N), O(1) space)
function nthToLast(n, node) {
  var pointer = node;
  while (node.next) {
    node = node.next;
    n--;
    if (n <= 0) {
      pointer = pointer.next;
    }
  }

  return pointer;
}

// Reverse a linked list (destroying the original list, O(1) space, O(N)))
function reverse(n) {
  if (!n) {
    return undefined;
  }

  if (!n.next) {
    return n;
  }

  var last;
  while (n) {
    var tmp = n.next;
    n.next = last;
    last = n;
    n = tmp;
  }

  return last;
}

// turns a linked list with head node N into an array (debugging)
function toArray(n) {
  var arr = [];
  while (n) {
    arr.push(n.value);
    n = n.next;
  }

  return arr;
}

// Turns a linked list into an array (debugging)
function fromArray(arr) {
  var lastNode;
  var firstNode;
  for (i = 0; i < arr.length; i++) {
    var node = new Node(arr[i]);

    if (i === 0) {
      firstNode = node;
    }
    else {
      lastNode.next = node;
    }

    lastNode = node;
  }

  return firstNode;
};

function Node(value, next) {
  this.next = next;
  this.value = value;
}

module.exports = {
  Node: Node,
  nthToLast: nthToLast,
  hasCycle: hasCycle,
  deleteNode: deleteNode,
  reverse: reverse,
  toArray: toArray,
  fromArray: fromArray,
};
