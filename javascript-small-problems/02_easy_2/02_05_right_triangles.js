function triangle(sideLength) {
  var i;
  var j;
  var stars = '';

  for (i = 1; i <= sideLength; i += 1) {
    for (j = 1; j <= i; j += 1) {
      stars += '*';
    }
    console.log(stars.padStart(sideLength, ' '));
    stars = '';
  }
}

triangle(5);
triangle(9);
