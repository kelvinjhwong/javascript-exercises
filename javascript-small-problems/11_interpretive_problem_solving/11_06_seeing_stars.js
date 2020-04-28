/*

Input:
- Odd integer
- Height (in lines) and width (in chars) of the star

Output:
- Logs the star

Rules:
- Given height h, compute max distance from middle line md (=== floor(h/2))
- Given distance from middle line d
  - If d between 1 and md
    - Log md - d spaces, then 3 asterisks separated by (d - 1) spaces
  - If d === 0
    - Log h asterisks

Edge cases:
- Input is not odd integer - negative/0, float, even, special number
  or too large, or octal
- Input is of invalid data type - assume won't happen
- Boundary condition: height === 1
- Extra arguments - won't get

Algorithm:
- Compute middle row position => Math.floor(height / 2)
- Compute max distance from middle row => height - middle row position
- Iterate from max distance from middle row down to 0, then back up to
  max distance again
  - Log star row
    - If distance between 1 and max distance
      - Log max distance - d spaces, then 3 asterisks separated by (d-1) spaces
    - Else if distance === 0
      - Log height asterisks
*/

function star(height) {
  var middleRowPosition = Math.ceil(height / 2);
  var maxDistanceFromMiddleRow = height - middleRowPosition;
  var i;
  var distanceFromMiddleRow;
  var leftPadding;
  var stars;
  var starRow;

  for (i = 1; i <= height; i += 1) {
    distanceFromMiddleRow = Math.abs(i - middleRowPosition);

    if (distanceFromMiddleRow > 0) {
      leftPadding = ' '.repeat(maxDistanceFromMiddleRow - distanceFromMiddleRow);
      stars = ['*', '*', '*'].join(' '.repeat(distanceFromMiddleRow - 1));
      starRow = leftPadding + stars;
    } else if (distanceFromMiddleRow === 0) {
      starRow = '*'.repeat(height);
    }

    console.log(starRow);
  }
}

star(1);
// *
console.log('');

star(3);
// ***
// ***
// ***
console.log('');

star(7);
// Logs:
// *  *  *
// * * *
//   ***
// *******
//   ***
// * * *
// *  *  *
console.log('');

star(9);
//Logs:
// *   *   *
// *  *  *
//   * * *
//   ***
// *********
//   ***
//   * * *
// *  *  *
// *   *   *
