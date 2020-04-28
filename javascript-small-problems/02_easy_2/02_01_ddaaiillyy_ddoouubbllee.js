/*
Iterate through chars
- If char different from last char in crunchedString, then add to crunchedString
- Else do nothing

Handle edge case of the first char
*/

// function crunch(string) {
//   var i;
//   var stringLength = string.length;
//   var char;
//   var crunchedString = '';

//   for (i = 0; i < stringLength; i += 1) {
//     char = string[i];
//     if (char !== string[i - 1]) {
//       crunchedString += char;
//     }
//   }

//   return crunchedString;
// }

function crunch(string) {
  return string.replace(/(.)\1+/g, '$1')
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
