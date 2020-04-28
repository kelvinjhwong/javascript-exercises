var rlSync = require('readline-sync');
var i;
var numberSuffix = ['th', 'st', 'nd', 'rd', 'th', 'th', 'th'];
var currentNumber;
var lastNumber;
var numbers = [];
var numbersGreaterThan25;

for (i = 1; i <= 6; i += 1) {
  // currentNumber = prompt(`Enter the ${i + numberSuffix[i]} number: `);
  currentNumber = rlSync.question(`Enter the ${i + numberSuffix[i]} number: `);

  // if (i === 6) {
  //   lastNumber = currentNumber;
  //   break;
  // }

  numbers.push(currentNumber);
}

console.log('');

// if (numbers.indexOf(lastNumber) === -1) {
//   console.log(`The number ${lastNumber} does not appear in [${numbers.join(', ')}].`);
// } else {
//   console.log(`The number ${lastNumber} appears in [${numbers.join(', ')}].`);
// }

numbersGreaterThan25 = numbers.filter(number => number > 25);

if (numbersGreaterThan25.length === 0) {
  console.log('There are no numbers greater than 25.');
} else {
  console.log(`The numbers ${numbersGreaterThan25.join(', ')} are greater than 25.`);
}
