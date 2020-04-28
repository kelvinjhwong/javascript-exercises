function logEvenNumbers(rangeStart, rangeEnd) {
  var i;
  var smallestEvenInRange;

  smallestEvenInRange = (rangeStart % 2 === 0 ? rangeStart : rangeStart + 1);

  for (i = smallestEvenInRange; i <= rangeEnd; i += 2) {
    console.log(i);
  }
}

logEvenNumbers(105, 143);
