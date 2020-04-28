// function substrings(string) {
//   return string.split('').map(function (_, idx) {
//     return substringsAtStart(string.slice(idx));
//   }).flat();
// }

function substrings(string) {
  return flattenArray(string.split('').map(function (_, idx) {
    return substringsAtStart(string.slice(idx));
  }));
}

/*
Iterate through elements
- If not an array, push to flattened, continue
- If an array, iterate through elements
  - If not an array, push to flattened, continue
  - If an array, iterate through elements
    - ...
*/

function flattenArray(array) {
  var flattened = [];

  array.forEach(function (element) {
    if (Array.isArray(element)) {
      flattened = flattened.concat(flattenArray(element));
    } else {
      flattened.push(element);
    }
  });

  return flattened;
}

function substringsAtStart(string) {
  return string.split('').map(function (char, idx) {
    return string.slice(0, idx + 1);
  });
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]
