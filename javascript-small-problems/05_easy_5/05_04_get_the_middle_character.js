function centerOf(string) {
  var len = string.length;
  var startingIndex = Math.ceil(len / 2 ) - 1;
  var numOfCharsToReturn = len % 2 === 0 ? 2 : 1;

  return string.substring(startingIndex, startingIndex + numOfCharsToReturn);
}

console.log(centerOf('I Love Ruby'));      // "e"
console.log(centerOf('Launch School'));    // "  "
console.log(centerOf('Launch'));           // "un"
console.log(centerOf('Launchschool'));     // "hs"
console.log(centerOf('x'));                // "x"
