function newStack() {
  var elements = [];

  return {
    push: function (element) {
      return elements.push(element);
    },

    pop: function () {
      return elements.pop();
    },

    printStack: function () {
      elements.forEach((element) => console.log(element));
    },
  };
}

var stack = newStack();
stack.printStack;

stack.push('foo');
stack.printStack();
// foo

console.log('--');

stack.push('bar');
stack.printStack();
// foo
// bar

console.log('--');

console.log(stack.pop());
// bar

console.log('--');

stack.printStack();
// foo

console.log('--');

console.log(stack.elements); // undefined
