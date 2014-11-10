var LList = require("./Llist");

function Grade(name, grade) {
  this.name = name;
  this.grade = grade;
  this.next = null;
  this.prev = null;
}

LList.prototype.addStudent = function(name, grade) {
  var score = new Grade(name, grade);
  if(this.mark === undefined) {
    this.mark = score;
  } else {
    var current = this.mark;
    while (current.next) {
      current = current.next;
    }

    current.next = score;
    score.prev = current;
  }
};

var list = new LList();
list.addStudent("Simon", "A");
list.addStudent("Jasmine", "A");
list.addStudent("Elijah", "B");
list.addStudent("Evelyn", "B");
list.addStudent("Kayden", "C");

console.log(list.mark.name);
console.log(list.mark.grade);
console.log(list.mark.next.next.next.name);
console.log(list.mark.next.next.next.grade);
