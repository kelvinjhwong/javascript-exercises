/*

Input:
- string - decrypted message
- keyword

Output:
- string - encrypted message

Rules:
- Given each char in the input string
  - Determine its 'effective index'
    - Remove all whitespace chars from the input string
    - Return the char's index in this string
  - Offset char based on its effective index, and the keyword chars' indexes
    - Effective index 0 => offset by keyword[0]'s char index
    - Effective index 1 => offset by keyword[1]'s char index
    - Etc.
    - When reach keyword's last char, start again at keyword's first char

Edge cases:
- Empty string => return empty string
- Case in the message string is preserved
- Case in the keyword string is ignored
- Non-alpha chars in the input string are unchanged
- Assume message string and keyword string are always valid strings
- Assume keyword string is always passed in, always non-empty and contains only
  alpha chars
- Boundary conditions - 1 char

Algorithm:
- Map keyword to an array of char indexes
  - Transform to all lower case
  - Map to charCodeAt - base
- Initialize effectiveIndex to 0
- Split message into chars array
  - Iterate through each char in the array
  - If alpha
    - Use current effectiveIndex value % keyword.length to offset
      char, and mutate array
    - Increment effectiveIndex
- Return joined chars array

*/

function vigenereEncrypt(message, keyword) {
  var BASE = 97;
  var shiftValues =
    keyword.toLowerCase().split('').map((char) => char.charCodeAt(0) - BASE);
  var shiftValueIndex;
  var keywordLength = keyword.length;
  var effectiveIndex = 0;
  var chars = message.split('');

  chars.forEach(function (char, index) {
    if (/[a-z]/i.test(char)) {
      shiftValueIndex = effectiveIndex % keywordLength;
      chars[index] = offsetCharByKey(char, shiftValues[shiftValueIndex]);
      effectiveIndex += 1;
    }
  });

  return chars.join('');
}

function offsetCharByKey(char, key) {
  var LETTERS = 'abcdefghijklmnopqrstuvwxyz';
  var NUMBER_OF_LETTERS = 26;

  var normalizedKey = key % NUMBER_OF_LETTERS;
  var letterCase = /[a-z]/.test(char) ? 'lowercase' : 'uppercase';

  var charIndex = LETTERS.indexOf(char.toLowerCase());
  var offsetIndex = charIndex + normalizedKey;

  if (offsetIndex >= NUMBER_OF_LETTERS) {
    offsetIndex = offsetIndex % 26;
  }

  return letterCase === 'lowercase' ? LETTERS[offsetIndex] : LETTERS[offsetIndex].toUpperCase();
}

console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'meat'));
// "Bmnxmtpeqw dhz'x gh ar pbldal!"

console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'A'));
// "Pineapples don't go on pizzas!"

console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'Aa'));
// "Pineapples don't go on pizzas!"

console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'cab'));
// "Riogaqrlfu dpp't hq oo riabat!"

console.log(vigenereEncrypt('Dog', 'Rabbit'));
// 'Uoh'

console.log(vigenereEncrypt('', 'meat'));
// ''

console.log(vigenereEncrypt('p', 'messy'));
// 'b'