function swap(text) {
  var words = text.split(' ');
  var swappedWords;

  swappedWords = words.map((word) => swapWord(word));

  return swappedWords.join(' ');
}

function swapWord(word) {
  if (word.length === 1) return word;

  var firstChar = word[0];
  var lastChar = word.slice(-1);
  var middleChars = word.slice(1, -1);

  return lastChar + middleChars + firstChar;
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
