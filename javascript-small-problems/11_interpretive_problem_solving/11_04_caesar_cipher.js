/*

Input:
- string
- number

Output:
- string
- encrypted message

Rules:
- each letter char in plaintext is offset by the key i.e. replaced by the letter
  at `key` positions to the right of the char
  - if reach beyond end of alphabet after offsetting, then wrap around from the
    beginning
    - if greater than 26, just work with remainder after dividing by 26
  - case is preserved
- non-letter chars are unchanged

Edge cases:
- empty string => empty string
- negative integers, floats, special numbers, octal numbers - assume won't get
- boundary conditions - 0 and 25
- invalid data types - won't get
- extra or missing arguments - won't get

Algorithm - high-level:
- Replace all letters in string with their offset values, using regex and an
  'offset' helper function

Algorithm - offsetting:
- Initialize array of letters

- save letter case to variable
- Normalize key to the 0-25 range
- Get letter index from array of letters
- Add key to index to get offset index
  - if offset index > 25, normalize to 0-25 range
- retrieve and return offset letter based on letter case

*/

function caesarEncrypt(message, key) {
  return message.replace(/[a-z]/gi, char => offsetCharByKey(char, key));
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

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
