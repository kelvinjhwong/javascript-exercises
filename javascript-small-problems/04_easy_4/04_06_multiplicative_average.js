/*
Edge cases:
- Empty array

*/

function showMultiplicativeAverage(numbers) {
  var i;
  var len = numbers.length;
  var product = 1;

  for (i = 0; i < len; i += 1) {
    product *= numbers[i];
  }

  return (product / len).toFixed(3);
}

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"
