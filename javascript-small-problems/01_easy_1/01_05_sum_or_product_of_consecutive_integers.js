function getOperation() {
  var userInput;

  do {
    userInput = rlSync.question('Enter "s" to compute the sum, or' +
                                '"p" to compute the product. ');

    if (/[sSpP]/.test(userInput)) break;
    console.log('Invalid choice. Please enter s for sum or p for product.');
  } while (true);

  return (userInput === 's' ? 'sum' : 'product');
}

function computeResult(number, operation) {
  var result;
  var i;

  if (operation === 'sum') {
    result = 0;
    for (i = 1; i <= number; i += 1) result += i;
  } else {
    result = 1;
    for (i = 2; i <= number; i += 1) result *= i;
  }

  return result;
}

// function computeResult(numbers, operation) {
//   var result;

//   if (operation === 'sum') {
//     result = numbers.reduce((accum, val) => accum + val);
//   } else {
//     result = numbers.reduce((accum, val) => accum * val);
//   }

//   return result;
// }

var rlSync = require('readline-sync');
var number;
var operation;

number = parseFloat(rlSync.question('Please enter an integer greater than 0: '));
operation = getOperation();

console.log(`The ${operation} of the integers between 1 and ${number} ` +
            `is ${computeResult(number, operation)}.`);
