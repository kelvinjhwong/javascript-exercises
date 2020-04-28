function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}

function isPalindrome(string) {
  return string.length > 1 && string === string.split('').reverse().join('');
}

function substrings(string) {
  return flattenArray(string.split('').map(function (_, idx) {
    return substringsAtStart(string.slice(idx));
  }));
}

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

// --------------------------------------------------------------

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
