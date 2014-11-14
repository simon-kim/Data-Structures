var BST = require("../Chapter10/BST");

var wordCount = function(string) {
  string += " ";
  var num = string.indexOf(" ");
  var wordTree = new BST();
  var wordDict = {};
  while (num !== -1) {
    var word = string.substring(0, num);
    if (!wordDict[word]) {
      wordTree.insert(word);
      wordDict[word] = 1;
    } else {
      wordTree.update(word);
      wordDict[word] += 1;
    }
    string = string.substring(num + 1, string.length);
    num = string.indexOf(" ");
  }
  return wordDict;
};

module.exports = wordCount;
