var LList = require("./Llist");

LList.prototype.show = function(current) {
  var currentNode = list.find(current);
  console.log("Current element: " + currentNode.element);
  console.log("Current element's next: " + currentNode.next.element);
  console.log("Current element's previous: " + currentNode.previous.element);
};

var list = new LList();

list.insert("Simon", "head");
list.insert("Jasmine", "Simon");
list.insert("Elijah", "Jasmine");
list.insert("Evelyn", "Elijah");
list.insert("Kayden", "Evelyn");
list.display();
console.log("\n");

list.show("Jasmine");
