function getMiddle(arr) {
  arr = arr.sort()
  return arr[Math.floor(arr.length / 2)];
}

function BTree(maxLength) {
  this.children = [];
  this.maxLength = maxLength;
  this.root = new Node(this);
}

BTree.prototype.insert = function(val) {
  var leaf = this.findLeaf(val);

  // if node is full, split into two nodes

    // select a median

    // values less than median are put in left node

    // values greater than median are put in right now

    // the separation is inserted into the node's parent.

    // If this causes it to be split, split the parent

    // If there is no parent, create a new root above this node
};

BTree.prototype.findLeaf = function(val) {




}

BTree.prototype.print = function() {
  this.root.print();
};


function Node(tree) {
  this.parent = this.value = null;
  this.values = [];
  this.bTree = tree;
  this.leftTree = null;
  this.rightTree = null;
}

Node.prototype.isLeaf = function() {
  return !this.leftTree && !this.rightTree;
};

Node.prototype.insert = function(val) {
  var that = this;
  if (val.length) {
    return val.forEach(function(item) {
      that.insert(item);
    });
  }

  this.values.push(val);

  // if a node contains fewer than maximum # of elements, insert new element in node
  if (this.values.length < this.bTree.maxLength) {
    return;
  }

  


  // if node is full, split into two nodes
  this.split();
}

Node.prototype.split = function() {
  // select a median
  var median = getMiddle(this.values);
  var leftVals = this.values.slice(0, median);
  var rightVals = this.values.slice(median + 1);
  var left = new Node(this.tree);
  var right = new Node(this.tree);

  parent.parent = this.parent;
  this.values = [this.values[median]];
  left.insert(leftVals);
  right.insert(rightVals);
  parent.leftTree = left;
  parent.rightTree = right;
}

Node.prototype.print =  function() {
  return this.values;
}

