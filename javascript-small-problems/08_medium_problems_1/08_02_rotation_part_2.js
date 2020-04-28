/*
Input:
- number
- integer n

Output:
- new number
- perform rotation n times

Edge cases:
- 0 - return 0
- Single digit - return itself
- Rotate more digits than the number of digits in number - assume won't get
- Float - assume won't get
- Special numbers - assume won't get

Algorithm:
- Convert number to string, then to array of digit strings
- Rotate last n elements of the array
- Concat first elements with rotated elements
*/

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

console.log(rotateRightmostDigits(7, 1));           // 7
console.log(rotateRightmostDigits(0, 1));           // 7
console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
