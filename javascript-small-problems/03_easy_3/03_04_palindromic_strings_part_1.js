/**
 * How about empty strings?
*/

function isPalindrome(string) {
  // var chars = string.split('');
  // var reversedChars = chars.slice().reverse();

  // return isArrayElementsEqual(chars, reversedChars);
  return string === string.split('').reverse().join('');
}

// function isArrayElementsEqual(array1, array2) {
//   var i;
//   var len = array1.length;

//   if (array1.length !== array2.length) return false;

//   for (i = 0; i < len; i += 1) {
//     if (array1[i] !== array2[i]) return false;
//   }

//   return true;
// }

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true
