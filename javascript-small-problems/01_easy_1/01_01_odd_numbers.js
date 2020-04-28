function logOddNumbers(rangeStart, rangeEnd) {
  var i;
  var smallestOddInRange;

  smallestOddInRange = (rangeStart % 2 === 1 ? rangeStart : rangeStart + 1);

  for (i = smallestOddInRange; i <= rangeEnd; i += 2) {
    console.log(i);
  }
}

logOddNumbers(6, 37);
