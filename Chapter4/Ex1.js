var Stack = require("./stack");

function tester(exp) {
  var stack = new Stack();
  for(i = 0; i < exp.length; i++) {
    //pushes the parenthesis into the new stack object
    if(exp[i] === "(") {
      stack.push(i);
    } else if(exp[i] === ")") {
      //pops the last parenthesis out of the stack object
      if(stack.length() > 0) {
        stack.pop();
      } else {
        return "A parenthesis is missing at position " + i;
      }
    }
  }

  if(stack.length() > 0) {
    //checks to see if an opening parenthesis is missing
    return "A parenthesis is missing at position " + stack.pop();
  } else {
    return "All parentheses are matched";
  }
}

console.log(tester('(()'));
console.log(tester('((())'));
