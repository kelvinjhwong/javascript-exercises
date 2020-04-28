function asciiValue(str) {
  var i;
  var strLength = str.length;
  var sum = 0;

  for (i = 0; i < strLength; i += 1) {
    sum += str.charCodeAt(i);
  }

  return sum;
}

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0
