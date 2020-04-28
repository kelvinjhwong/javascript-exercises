function reverseWords(sentence) {
  var words = sentence.split(' ');

  words.forEach(function (word, index, array) {
    if (word.length >= 5) {
      array[index] = word.split('').reverse().join('');
    }
  });

  return words.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"
