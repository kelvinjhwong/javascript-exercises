/*
Input:
- Odd integer >= 1

Output:
- Log diamond. Given n, an odd integer, log:
  - (n - 1) / 2 spaces then 1 star, then
  - (n - 3) / 2 spaces then 3 stars, then
  - ...
  - 1 space then n - 2 stars, then
  - 0 space then n stars, then
  - Reverse the above

***Return a value, or log to the console?***

Edge cases:
- n = 1 - log 1 star only

Algorithm:
- Iterate from 1 to n, in increments of 2
  - Log (n - i) / 2 spaces, then i stars
- Iterate from n - 2 to 1, in crements of 2
  - Log (n - i) / 2 spaces, then i stars

- The above should also work for the edge case of n = 1
*/

function diamond(height) {
  var i;

  for (i = 1; i <= height; i += 2) {
    logDiamondRow(i, height);
  }

  for (i = height - 2; i >= 1; i -= 2) {
    logDiamondRow(i, height);
  }
}

function logDiamondRow(rowNumber, diamondHeight) {
  console.log(repeat(' ', (diamondHeight - rowNumber) / 2) + repeat('*', rowNumber));
}

function repeat(char, count) {
  var i;
  var repeated = '';

  for (i = 1; i <= count; i += 1) {
    repeated += char;
  }

  return repeated;
}

// diamond(1);
// diamond(3);
// diamond(9);

function diamondHollow(height) {
  var i;

  for (i = 1; i <= height; i += 2) {
    logHollowDiamondRow(i, height);
  }

  for (i = height - 2; i >= 1; i -= 2) {
    logHollowDiamondRow(i, height);
  }
}

function logHollowDiamondRow(rowNumber, diamondHeight) {
  if (rowNumber === 1) {
    console.log(repeat(' ', (diamondHeight - rowNumber) / 2) + '*');
  } else {
    console.log(repeat(' ', (diamondHeight - rowNumber) / 2) + '*' + repeat(' ', rowNumber - 2) + '*');
  }
}

diamondHollow(1);
diamondHollow(3);
diamondHollow(9);
