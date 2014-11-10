var LList = require("./Llist");

LList.prototype.back = function(item, n) {
  var cursor = list.find(item);
  var current = list.find(item);

  for(i=0; i < n + 1; i++) {
    current = current.previous;
  }
  cursor.previous.next = cursor.next;
  current.previous.next = cursor;
  cursor.next = current;

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

list.back("Kayden", 3);
console.log("\n");
