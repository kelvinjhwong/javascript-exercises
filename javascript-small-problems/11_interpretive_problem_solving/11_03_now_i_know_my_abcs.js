/*
Input:
- String
- Assume no non-alpha chars

Output:
- true or false

Rules:
- Ignore case
- If every letter comes from a different block, then true
- Else false

Examples / edge cases:
- Empty string - assume won't get
- Invalid data types - assume won't get

Algorithm & data structure:
- Convert all letters to lower case
- Iterate through all chars
  - Retrieve the block containing the current char, and its mirror block
  - If undefined, return false
  - Else remove the block containing the current char
- After loop, return true

*/

function isBlockWord(word) {
  var spellingBlocks = { b: 'o', o: 'b', x: 'k', k: 'x',
                        d: 'q', q: 'd', c: 'p', p: 'c',
                        n: 'a', a: 'n', g: 't', t: 'g',
                        r: 'e', e: 'r', f: 's', s: 'f',
                        j: 'w', w: 'j', h: 'u', u: 'h',
                        v: 'i', i: 'v', l: 'y', y: 'l',
                        z: 'm', m: 'z' };
  var i;
  var len = word.length;
  var wordLowerCase = word.toLowerCase();
  var currentLetter;
  var counterpartLetter;

  for (i = 0; i < len; i += 1) {
    currentLetter = wordLowerCase[i];
    counterpartLetter = spellingBlocks[currentLetter];

    if (spellingBlocks[currentLetter] === undefined) {
      return false;
    } else {
      delete spellingBlocks[currentLetter];
      delete spellingBlocks[counterpartLetter];
    }
  }

  return true;
}

function isBlockWord(word) {
  var spellingBlocks = [ /b|o/gi, /x|k/gi, /d|q/gi, /c|p/gi,
                         /n|a/gi, /g|t/gi, /r|e/gi, /f|s/gi,
                         /j|w/gi, /h|u/gi, /v|i/gi, /l|y/gi,
                         /z|m/gi ];

  return spellingBlocks.every(function (spellingBlock) {
    return (word.match(spellingBlock) || []).length <= 1;
  });
}

console.log(isBlockWord('BATCH'));        // true - only uses each block once
console.log(isBlockWord('BUTCH'));        // false - uses one block twice
console.log(isBlockWord('jest'));         // true - case ignored
console.log(isBlockWord('bab'));          // false - uses same letter twice
console.log(isBlockWord('floW'));         // true
console.log(isBlockWord('APPLE'));        // false
console.log(isBlockWord('apple'));        // false
console.log(isBlockWord('apPLE'));        // false
console.log(isBlockWord('Box'));          // false
