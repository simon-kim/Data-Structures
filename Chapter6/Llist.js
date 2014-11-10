var Node = function(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
};

var LList = function() {
  this.head = new Node("head");
};

LList.prototype.dispReverse = function() {
    var currNode = this.head;
    currNode = this.findLast();
    while (currNode.previous !== null) {
      console.log(currNode.element);
      currNode = currNode.previous;
    }
};

LList.prototype.findLast = function() {
  var currNode = this.head;
  while (currNode.next !== null) {
    currNode = currNode.next;
  }
  return currNode;
};

LList.prototype.remove = function(item) {
  var currNode = this.find(item);
  if (currNode.next !== null) {
    currNode.previous.next = currNode.next;
    currNode.next.previous = currNode.previous;
    currNode.next = null;
    currNode.previous = null;
  }
};

LList.prototype.find = function(item) {
  var currNode = this.head;
  while(currNode.element !== item) {
    currNode = currNode.next;
  }
  return currNode;
};

LList.prototype.insert = function(newElement, item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  newNode.previous = current;
  current.next = newNode;
};

LList.prototype.display = function() {
  var currNode = this.head;
  while (currNode.next !== null) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
};

module.exports = LList;
