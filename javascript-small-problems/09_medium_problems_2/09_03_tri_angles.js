/*
Input:
- 3 numbers
- between 0 and 180

Output:
- string
- 'acute', 'right', 'obtuse' or 'invalid'

Rules:
- don't sum to 180 => 'invalid'
- any angle <= 0 => 'invalid'
- one angle is 90 => 'right'
- all three angles < 90 => 'acute'
- one angle >= 90 => 'obtuse'

Edge cases:
- no non-integers
- no negative values
- no invalid data types
- boundary conditions: 0, 180

Algorithm:
- Sort angles
- If smallest <= 0 => 'invalid'
- If don't sum to 180 => 'invalid'
- if largest > 90 => 'obtuse'
- if largest = 90 => 'right'
- else => 'acute'
-
*/

function triangle(angle0, angle1, angle2) {
  var angles = [angle0, angle1, angle2].sort((num1, num2) => num1 - num2);

  if (angles[0] <= 0) {
    return 'invalid';
  }

  if (angle0 + angle1 + angle2 !== 180) {
    return 'invalid';
  }

  if (angles[2] > 90) {
    return 'obtuse';
  } else if (angles[2] === 90) {
    return 'right';
  } else {
    return 'acute';
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
