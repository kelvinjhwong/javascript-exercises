function repeater(string) {
  var i;
  var len = string.length;
  var doubled = '';

  for (i = 0; i < len; i += 1) {
    doubled += string[i];
    doubled += string[i];
  }

  return doubled;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""
