/*
Input:
- 3 numbers
- can be integer or float
- won't be special numbers

Output:
- string
- 'equilateral', 'isosceles', 'scalene' or 'invalid'

Rules:
- any side <= 0 => 'invalid'
- two shortest sides sum to less than or equal to
  length of longest side => 'invalid'
- three sides equal => 'equilateral'
- two sides only equal => 'isosceles'
- three sides different => 'scalene'

Edge cases:
- Invalid data types
- Boundary conditions - 0

Algorithm:
- Create array of sides, and sort
- Check for invalid triangles
  - Any side is 0 or less => 'invalid'
  - Smallest 2 sides <= greatest side 'invalid'

- If all equal => 'equilateral'
- If two equal => 'isosceles'
- Else => 'scalene'
*/

function triangle(side0, side1, side2) {
  var sides = [side0, side1, side2].sort((num1, num2) => num1 - num2);

  if (sides.some((side) => side <= 0)) {
    return 'invalid';
  }

  if (sides[0] + sides[1] <= sides[2]) {
    return 'invalid';
  }

  if (sides[0] === sides[2]) {
    return 'equilateral';
  } else if (sides[0] === sides[1] || sides[1] === sides[2]) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
