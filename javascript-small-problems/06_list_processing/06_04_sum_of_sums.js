// function sumOfSums(numbers) {
//   var sumOfSums = 0;

//   var sum = numbers.reduce(function (sum, number) {
//     sumOfSums += sum;
//     return sum + number;
//   });
//   sumOfSums += sum;

//   return sumOfSums;
// }

function sumOfSums(numbers) {
  return sumArray(numbers.map(function (number, index) {
    return sumArray(numbers.slice(0, index + 1));
  }));
}

function sumArray(array) {
  return array.reduce((accum, element) => accum + element);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35
