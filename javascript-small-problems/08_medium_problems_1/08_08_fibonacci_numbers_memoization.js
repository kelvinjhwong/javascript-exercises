/*
- base case
- if 3, then initialize object
  - call function for 2, which mutates object with value for 2
  - calls function for 1, which mutates object with value for 1
- mutate object with value for 3, and also return the value
*/

function fibonacci(n, memo = {}) {
  if (n === 1) {
    memo[1] = 1;
    return memo[1];
  } else if (n === 2) {
    memo[1] = 1;
    memo[2] = 1;
    return memo[2];
  } else {
    fibonacci(n - 1, memo);
    memo[n] = memo[n - 1] + memo[n - 2];
    return memo[n];
  }
}

// function fibonacci(n) {
//   var memo = { 1: 1, 2: 1 };
//   return (function fibo(n) {
//     return memo[n] || (memo[n] = fibo(n - 1) + fibo(n - 2));
//   })(n);
// }

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
console.log(fibonacci(50));      // 12586269025
console.log(fibonacci(75));      // 2111485077978050
