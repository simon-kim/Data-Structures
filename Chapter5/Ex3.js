//Most of this code was in the book, only pRemove and toString were modified.

function Queue() {
  this.dataStore = [];
}

Queue.prototype.add = function(element) {
  this.dataStore.push(element);
};

Queue.prototype.remove = function() {
  return this.dataStore.shift();
};

Queue.prototype.pRemove = function() {
  var entry = 0;
  for (var i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i].code > this.dataStore[entry].code) {
      entry = i;
    }
  }
  return this.dataStore.splice(entry, 1);
};

Queue.prototype.front = function() {
  return this.dataStore[0];
};

Queue.prototype.back = function() {
  return this.dataStore[this.dataStore.length - 1];
};

Queue.prototype.toString = function () {
  var str = "";
  for (var i = 0; i < this.dataStore.length; i++) {
    str += this.dataStore[i].name + " code: " + this.dataStore[i].code + "\n";
    }
  return str;
};

Queue.prototype.empty = function () {
  if (this.dataStore.length === 0) {
    return true;
  } else {
    return false;
  }
};

function Patient(name, code) {
  this.name = name;
  this.code = code;
}

var p = new Patient();
var ed = new Queue();

p = new Patient("Smith", 5);
ed.add(p);

p = new Patient("Jones", 4);
ed.add(p);

p = new Patient("Fehrenbach", 6);
ed.add(p);

p = new Patient("Brown", 1);
ed.add(p);

console.log(ed.dataStore);

var seen = ed.pRemove();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ");
console.log(ed.dataStore);

// another round
var seen = ed.pRemove();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ");
console.log(ed.dataStore);

var seen = ed.pRemove();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ");
console.log(ed.dataStore);
