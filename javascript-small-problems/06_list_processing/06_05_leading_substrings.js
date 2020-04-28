function substringsAtStart(string) {
  return string.split('').map(function (char, idx) {
    return string.slice(0, idx + 1);
  });
}

console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
console.log(substringsAtStart('a'));        // ["a"]
console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
