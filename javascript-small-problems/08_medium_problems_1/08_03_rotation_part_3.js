/*

Input:
- number

Output:
- number
- rotated n times, where n is the length of number

Edge cases:
- negative number, float, special number - assume won't get
- 0 and 1 - same as any other single-digit number, already covered
  in test cases
- empty input or other invalid types - assume won't get

*/

function maxRotation(number) {
  var i;

  for (i = String(number).length; i >= 2; i -= 1) {
    number = rotateRightmostDigits(number, i);
  }

  return number;
}

function rotateRightmostDigits(number, n) {
  var digitStrings = String(number).split('');

  var notRotated = digitStrings.slice(0, digitStrings.length - n);
  var rotated = rotateArray(digitStrings.slice(digitStrings.length - n));

  return Number(notRotated.concat(rotated).join(''));
}

function rotateArray(array) {
  if (!Array.isArray(array)) {
    return undefined;
  }

  if (array.length === 0) {
    return [];
  }

  return array.slice(1).concat(array[0]);
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
