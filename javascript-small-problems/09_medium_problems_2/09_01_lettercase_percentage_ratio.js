/*

Input:
- string
- at least one char

Output:
- object

Rules:
- object = { lowercase: ${percentString1}, uppercase: ${percentString2}, neither: ${percentString3} }
- percentString1 = percentage of chars in string that are lowercase letters
- percentString2 = percentage of chars in string that are uppercase letters
- percentString3 = percentage of chars in string that are not letters

Edge cases:
- Empty string - won't get
- Non-alpha chars - handle as instructed
- Invalid data type - assume won't get
- Extra arguments - ignore
- Boundary conditions - 0.00 and and 100.00

Algorithm and data structure:
- Get string length
- Initialize lowercase, uppercase and neither variables
- Iterate through string
  - If lower case letter, increment lowercase variable
  - If upper case letter, increment uppercase variable
  - Else, increment neither variable
- Return object
  - Divide variables by string length, convert to string with toFixed(2)

*/

function letterPercentages(string) {
  var len = string.length;
  var lowercaseCount = 0;
  var uppercaseCount = 0;
  var nonAlphaCount = 0;
  var i;

  for (i = 0; i < len; i += 1) {
    if (/[a-z]/.test(string[i])) {
      lowercaseCount += 1;
    } else if (/[A-Z]/.test(string[i])) {
      uppercaseCount += 1;
    } else if (/[^a-zA-Z]/.test(string[i])) {
      nonAlphaCount += 1;
    }
  }

  return {
    lowercase: (lowercaseCount * 100 / len).toFixed(2),
    uppercase: (uppercaseCount * 100 / len).toFixed(2),
    neither: (nonAlphaCount * 100 / len).toFixed(2),
  };
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
