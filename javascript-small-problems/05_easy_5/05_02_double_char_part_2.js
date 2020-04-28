// function doubleConsonants(string) {
//   var i;
//   var len = string.length;
//   var currentChar;
//   var result = '';

//   for (i = 0; i < len; i += 1) {
//     currentChar = string[i];

//     result += currentChar;

//     if (isConsonant(currentChar)) {
//       result += currentChar;
//     }
//   }

//   return result;
// }

// function isConsonant(char) {
//   return CONSONANTS_REGEXP.test(char);
// }

function doubleConsonants(string) {
  return string.replace(/([b-df-hj-np-tv-z])/gi, '$1$1');
}

var CONSONANTS_REGEXP = /[bcdfghjklmnpqrstvwxyz]/gi;

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""
