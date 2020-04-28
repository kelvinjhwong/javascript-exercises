function shortLongShort(str1, str2) {
  // var str1Length = str1.length;
  // var str2Length = str2.length;
  // var shorterString = (str1Length < str2Length ? str1 : str2);
  // var longerString = (shorterString === str1 ? str2 : str1);

  // return shorterString + longerString + shorterString;

  if (str1.length < str2.length) {
    return str1 + str2 + str1;
  } else {
    return str2 + str1 + str2;
  }
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"
