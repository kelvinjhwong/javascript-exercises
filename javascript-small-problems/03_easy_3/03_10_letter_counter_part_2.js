function wordSizes(words) {
  var wordsArray = words.split(' ');
  var wordSizeCounts = {};

  wordsArray.forEach((word) => {
    var letters = word.replace(/[^a-zA-Z]/, '');
    var len = letters.length;

    if (len === 0) return;

    if (wordSizeCounts[len] === undefined) {
      wordSizeCounts[len] = 1;
    } else {
      wordSizeCounts[len] += 1;
    }
  });

  return wordSizeCounts;
}


console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}
