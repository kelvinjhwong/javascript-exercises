// function runningTotal(numbers) {
//   return numbers.map(function (number, index, array) {
//     return sumArray(array.slice(0, index + 1));
//   });
// }

// function sumArray(array) {
//   var i;
//   var len = array.length;
//   var sum = 0;

//   for (i = 0; i < len; i += 1) {
//     sum += array[i];
//   }

//   return sum;
// }

function runningTotal(numbers) {
  var i;
  var len = numbers.length;
  var sum = 0;
  var totals = [];

  for (i = 0; i < len; i += 1) {
    sum += numbers[i];
    totals.push(sum);
  }

  return totals;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
