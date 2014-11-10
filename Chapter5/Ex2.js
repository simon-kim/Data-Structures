var Deque = require("./Ex1");
var deque = new Deque();

Deque.prototype.palindrome = function(word) {
  var str = (word.length/2) + 1;

  for(i=0; i < word.length; i++) {
    deque.addFront(word[i]);
  }

  for(i=0; i < str; i++) {
    if(deque.front() !== deque.back()) {
      return false;
    }
    deque.removeFront();
    deque.front();
    return true;
  }
};

console.log("simon: " + deque.palindrome("simon"));
console.log("sagas: " + deque.palindrome("sagas"));
