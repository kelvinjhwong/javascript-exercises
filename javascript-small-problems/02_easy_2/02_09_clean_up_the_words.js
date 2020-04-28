// function cleanUp(text) {
//   return text.replace(/[^a-zA-Z]+/g, ' ');
// }

/*
Initialize result string

Iterate through char:
- If alphabetic
  - Add to result string
- If non-alphetic
  - If previous char is alphabetic, add ' ' to result string

Return result string
*/

function cleanUp(text) {
  var i;
  var textLength = text.length;
  var char;
  var ALPHABETS = 'abcdefghijklmnopqrstuvwxyz';
  var cleanText = '';

  for (i = 0; i < textLength; i += 1) {
    char = text[i];

    if (ALPHABETS.includes(char.toLowerCase())) {
      cleanText += char;
    } else {
      if (i === 0 || ALPHABETS.includes(text[i - 1].toLowerCase())) {
        cleanText += ' ';
      }
    }
  }

  return cleanText;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
