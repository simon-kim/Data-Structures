var LList = require("./Llist");

LList.prototype.advance = function(item, n) {
  var cursor = list.find(item);
  var current = list.head;
  var previous;

  for (var i = 0; i < n + 1; i++){
    current = current.next;
  }

  previous = list.findLast(item);

  previous.next = cursor.next;
  cursor.next = current.next;
  current.next = cursor;

  list.display();
};

var list = new LList();

list.insert("Simon", "head");
list.insert("Jasmine", "Simon");
list.insert("Elijah", "Jasmine");
list.insert("Evelyn", "Elijah");
list.insert("Kayden", "Evelyn");
list.display();
console.log("\n");

list.advance("Simon", 3);
console.log("\n");
