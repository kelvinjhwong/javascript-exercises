/*
Input:
- positive integer n

Output:
- number
- square of the sum of 1 to n - sum of the squares of 1 to n

Edge cases:
- 0, negative integers, special numbers, floats, octal numbers - won't get
- invalid data types - won't get
- boundary conditions - 1
- empty input - won't get

Algorithm:
- generate sum from 1 to n
- square sum
- generate sum of squares
- return difference

*/

function sumSquareDifference(n) {
  return sumPowersUpTo(n, 1) ** 2 - sumPowersUpTo(n, 2);
}

function sumPowersUpTo(integer, power) {
  var sum = 0;
  var i;

  for (i = 1; i <= integer; i += 1) {
    sum += (i ** power);
  }

  return sum;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
