function searchWord(word, text) {
  if (typeof word !== 'string' || word === '') {
    console.log('The word argument must be a non-empty string!');
    return;
  } else if (typeof text !== 'string') {
    console.log('The text argument must be a string!');
    return;
  }

  return (text.match(new RegExp(`\\b${word}\\b`, 'gi')) || []).length;
}

var text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3
console.log(searchWord('qui', text));      // 14
console.log(searchWord('foo', ''));
console.log(searchWord('foo'));
console.log(searchWord('', text));
console.log(searchWord());
