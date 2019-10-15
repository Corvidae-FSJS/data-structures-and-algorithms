function multiBracketValidation(input) {

  const { Stack } = require('../stacksAndQueues/stacks-and-queues.js');
  
  const stack = new Stack();
  const brackets = ['(', ')', '{', '}', '[', ']'];
  let result;
  let array = [];

  for(let i = 0; i < input.length; i++) {
    if(input[i] === '(' || input[i] === '{' || input[i] === '['){
      stack.push(input[i]);
    }
    if(input[i] === ')' || input[i] === '}' || input[i] === ']'){
      const leftClose = stack.pop();
      let rightBrackets = brackets.indexOf(input[i]);
      let leftBrackets = brackets.indexOf(leftClose);
      let test = rightBrackets - leftBrackets;
      array.push(test);
    }
  }
  if(stack.top) {
    return false;
  }
  for(let j = 0; j < array.length; j++){
    if(array[j] !== 1){
      result = false;
    } else {
      result = true;
    }
  }
  return result;
}

module.exports = multiBracketValidation;