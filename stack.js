function Stack() {
  this.items = [];
}

Stack.prototype.push = function(item) {
  this.items.push(item);
}

Stack.prototype.pop = function() {
  return this.items.pop();
};

Stack.prototype.peek = function() {
  return this.items[this.items.length - 1];
};

function MaxStack() {
  Stack.apply(this);
  this.max = -Infinity;
  this.maxHistory = [];
};

MaxStack.prototype = new Stack();

MaxStack.prototype.pop = function(a) {
  var end = Stack.prototype.pop.apply(this, [a]);

  if (this.max === end) {
    if (this.items.length === 0) {
      this.max = -Infinity;
    }
    // expensive case -- popping the last element is the current maximum
    else {
      this.max = Math.max.apply(this, this.items);
    }
  }

  // for O(1) pops
  // if (this.items.length === 0) {
  //   this.max = -Infinity;
  // }
  // else {
  //   this.maxHistory.pop();
  //   this.max = this.maxHistory[this.maxHistory.length - 1];
  // }

  return end;
};

MaxStack.prototype.push = function(a) {
  Stack.prototype.push.apply(this, [a]);
  if (this.max < a) {
    this.max = a;
  }

  // For O(1) pops, takes more space
  // this.maxHistory.push(this.max);
};

MaxStack.prototype.getMax = function() {
  return this.max;
};

module.exports = {
  Stack: Stack,
  MaxStack: MaxStack
};