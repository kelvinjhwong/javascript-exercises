function fibonacci(n) {
  var first = 1;
  var second = 1;
  var temp;
  var i;

  if (n === 1) return 1;
  if (n === 2) return 1;

  for (i = 3; i <= n; i += 1) {
    temp = second;
    second = first + second;
    first = temp;
  }

  return second;
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
