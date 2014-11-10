function Deque() {
  this.dataStore = [];
}

Deque.prototype.addBack = function(element) {
  this.dataStore.push(element);
};

Deque.prototype.addFront = function(element) {
  this.dataStore.unshift(element);
};

Deque.prototype.removeBack = function() {
  return this.dataStore.pop();
};

Deque.prototype.removeFront = function() {
  return this.dataStore.shift();
};

Deque.prototype.front = function() {
  return this.dataStore[0];
};

Deque.prototype.back = function() {
  return this.dataStore[this.dataStore.length - 1];
};

Deque.prototype.toString = function() {
  var str = '';

  for (var i = 0; i < this.dataStore.length; ++i) {
    str += this.dataStore[i];
  }
  return str;
};

Deque.prototype.empty = function() {
  if (this.dataStore.length === 0) {
    return true;
    } else {
      return false;
    }
};

module.exports = Deque;
