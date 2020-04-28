/*
Input:
- string

Output:
- new string

Rules:
- any occurence of number word => its corresponding digit char
- only replace 'zero' to 'nine', and not any other number words

Edge cases:
- empty string => return empty string
- case insensitive - so e.g. also replace 'Zero' with '0'
- Don't replace words contained by other words e.g. 'one' in 'tone'

(?<=^|[^a-z])one(?=$|[^a-z]), gi

Algorithm:
- Save number words in array
- Iterate through number words; for each number word
  - Construct a regex
  - Replace matches against that regex with index of the number word converted
    to string
  - Re-assign the string to point to this new value
- Return the updated string
*/

// function wordToDigit(sentence) {
//   var NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four',
//                       'five', 'six', 'seven', 'eight', 'nine'];
//   var sentenceWithDigits = sentence;

//   NUMBER_WORDS.forEach(function (numberWord, index) {
//     var pattern = new RegExp(`(?<=^|[^a-z])${numberWord}(?=$|[^a-z])`, 'gi');
//     sentenceWithDigits = sentenceWithDigits.replace(pattern, String(index));
//   });

//   return sentenceWithDigits;
// }

function wordToDigit(sentence) {
  var NUMBER_WORDS =
    ['zero', 'one', 'two', 'three', 'four',
     'five', 'six', 'seven', 'eight', 'nine'];

  var numberWordsPattern =
    new RegExp('(?<=^|[^a-z])' +
               '((zero)|(one)|(two)|(three)|(four)|' +
               '(five)|(six)|(seven)|(eight)|(nine))' +
               '(?=$|[^a-z])',
               'gi');

  return sentence.replace(numberWordsPattern, function (match) {
    return NUMBER_WORDS.indexOf(match.toLowerCase());
  });
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigit('Here are two fivers. Take them.'));
// 'Here are 2 fivers. Take them.'
// Don't replace number words contained in other words

console.log(wordToDigit('Five SIX seVEN'));
// '5 6 7'
// Case-insensitive, number words at start and end of string

console.log(wordToDigit("One's good enough"));
// "1's good enough"
// Case-insensitive, replace number words that aren't followed by whitespace

console.log(wordToDigit('two_three_FOUR asix'));
// '2_3_4 asix'
// Can't use word boundary
