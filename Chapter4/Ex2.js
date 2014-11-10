var Stack = require("./stack");

var inflix = function(postfix) {
  var operands = new Stack();
  var operators = new Stack();

  for (i = postfix.length - 1; i >= 0; i--) {
    if(postfix[i] == "+" || postfix[i] == "-") {
      operators.push(postfix[i]);
    } else {
      operands.push(postfix[i]);
    }
  }

  var output = '';
  var operandTop = operands.top;
  var operatorTop = operators.top;

  for(i=0; i < operandTop; i++) {
    output += operands.pop();
    output += ' ';
  }

  for(i=0; i < operatorTop; i++) {
    output += operators.pop();
    output += ' ';
  }
  return output;
};

console.log(inflix("5 + 7"));
