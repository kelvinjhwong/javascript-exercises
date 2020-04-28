/*
A 'featured number' (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occuring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument, and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

Input:
- integer

Output:
- another integer, greater than input integer, a feature number
- or, error message 'There is no next featured number.'

Rules:

Feature number has these characteristics:
- odd number
- multiple of 7
- each digit occurs exactly once

Edge cases:
- negative numbers or 0?
- special numbers like NaN or Infinity?
- floats?

Algorithm:
- given input integer n
- iterate from n + 1 until I find the next featured number
  - featured number passes all 3 criteria:
    - odd number
    - multiple of 7
    - distinct digits
  - if we get to 9876543201
    - return error message
- return featured number
*/

function featured(number) {
  var currentNumber;
  var MAX_POSSIBLE_FEATURED_NUMBER;

  if (isFeatured(number)) {
    return number;
  }

  currentNumber = nextOddMultipleOf7(number);
  MAX_POSSIBLE_FEATURED_NUMBER = 9876543201;

  while (!isFeatured(currentNumber) && currentNumber <= MAX_POSSIBLE_FEATURED_NUMBER) {
    currentNumber += 14;
  }

  if (currentNumber > MAX_POSSIBLE_FEATURED_NUMBER) {
    return 'There is no next featured number.';
  }

  return currentNumber;
}

function nextOddMultipleOf7(number) {
  var nextMultipleOf7;

  nextMultipleOf7 = number + (7 - number % 7);

  return nextMultipleOf7 % 2 === 1 ? nextMultipleOf7 : nextMultipleOf7 + 7;
}

function isFeatured(number) {
  return (number % 2 === 1 && number % 7 === 0 && areDigitsUnique(number));
}

/*
- Convert number into a string
- Iterate through all the digits;
  - If the digit has already appeared, return false immediately
- Return true after loop
*/

function areDigitsUnique(number) {
  var numberString = String(number);
  var i;
  var len = numberString.length;
  var currentDigit;
  var seen = {};

  for (i = 0; i < len; i += 1) {
    currentDigit = numberString[i];

    if (seen[currentDigit]) {
      return false;
    } else {
      seen[currentDigit] = true;
    }
  }

  return true;
}

// console.log(areDigitsUnique(1234));   // true
// console.log(areDigitsUnique(1223));   // false
// console.log(areDigitsUnique(1));      // true
// console.log(areDigitsUnique(11));     // false
// console.log(areDigitsUnique(12));     // true

// console.log(isFeatured(7));             // true
// console.log(isFeatured(21));            // true
// console.log(isFeatured(35));            // true
// console.log(isFeatured(1029));          // true
// console.log(isFeatured(1043));          // true
// console.log(isFeatured(1023547));       // true
// console.log(isFeatured(1023456987));    // true
// console.log(isFeatured(40));            // false
// console.log(isFeatured(133));           // false
// console.log(isFeatured(98));            // false


console.log(featured(1));            // 7
console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9999999999));   // 'There is no next featured number.'
