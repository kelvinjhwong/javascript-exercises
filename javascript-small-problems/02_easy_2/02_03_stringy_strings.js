// function stringy(num) {
//   return ''.padEnd(num, '10')
// }

function stringy(num) {
  var i;
  var resultString = '';

  for (i = 1; i <= num; i += 1) {
    resultString += (i % 2 === 1 ? '1' : '0');
  }

  return resultString;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"
