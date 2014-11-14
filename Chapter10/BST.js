function Node(data, left, right) {
    this.data = data;
    this.count = 1;
    this.left = left;
    this.right = right;

}

Node.prototype.show = function() {
  return this.data;
};

function BST() {
    this.root = null;
    this.count = 0;
    this.eCount = 0;
}

BST.prototype.insert = function(data) {
  var n = new Node(data, null, null);
  this.count++;
  if (this.root === null) {
    this.root = n;
  } else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current === null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if (current === null) {
          parent.right = n;
          break;
        }
      }
    }
  }
};

BST.prototype.inOrder = function(node) {
  if (node !== null) {
    inOrder(node.left);
    console.log(node.show() + " ");
    inOrder(node.right);
  }
};

BST.prototype.getMin = function() {
  var current = this.root;
  while (current.left !== null) {
    current = current.left;
  }
  return current.data;
};

BST.prototype.getMax = function() {
  var current = this.root;
  while (current.right !== null) {
    current = current.right;
  }
  return current.data;
};

BST.prototype.find = function(data) {
  var current = this.root;
  while (current && current.data != data) {
    if (data < current.data) {
      current = current.left;
    } else {
      current = current.right;
      }
  }
  return current;
};

BST.prototype.countNodes = function(node, num) {
  if(node!==null) {
    num++;
    num = this.countNodes(node.left, num);
    num = this.countNodes(node.right, num);
  }
  return num;
};

BST.prototype.edgeCount = function(node) {
  this.eCount++;
  if (node !== null) {
    this.edgeCount(node.left);
    this.edgeCount(node.right);
  }
};

BST.prototype.update = function(data) {
  var word = this.find(data);
  word.count++;
  return word;
};

module.exports = BST;
