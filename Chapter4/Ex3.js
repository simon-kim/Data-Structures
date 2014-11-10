var Stack = require('./stack');

function discrimination(candy, filter) {
  var stack = new Stack();
  var yellow = new Stack();

  for(i = 0; i < candy.length ; i++){
    stack.push(candy[i]);
  }

  //thanks to Jake for this next part
  var length = stack.length();
  for (i = 0; i < length; i++){
    if (stack.peek() !== filter) {
      yellow.push(stack.pop());
    } else {
      stack.pop();
    }
  }

  var yLength = yellow.length();
  for (i = 0; i < yLength; i++){
    console.log(yellow.pop());
  }
  return;
}

discrimination(["r", "w", "y", "r", "w", "y", "r", "w", "y"], "y");
discrimination(["r", "r", "r", "y", "y", "y", "w", "w", "w"], "y");
