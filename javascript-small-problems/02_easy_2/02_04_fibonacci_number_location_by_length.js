function findFibonacciIndexByLength(numOfDigits) {
  var fibonacciIndex = 1;
  var currentFibonacciNum = 1;
  var previousFibonacciNum = 0;
  var temp;

  while(String(currentFibonacciNum).length < numOfDigits) {
    fibonacciIndex += 1;

    temp = currentFibonacciNum;
    currentFibonacciNum = previousFibonacciNum + currentFibonacciNum;
    previousFibonacciNum = temp;
  }

  return fibonacciIndex;
}

console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74
