/*
Input:
- number
- number of switches, n

Output:
- array
- the numbers of the lights that are on

Rules:
- Toggle all lights n times
- At the ith time, only toggle lights whose numbers are multiples
  of i

Examples:

Edge cases / extra assumptions:
- 0 lights - assume won't get
- 1 light - should return [1]
- negative numbers, floats and special numbers - assume won't get

Algorithm / data structure:
- Initialize n lights to false
- Iterate through lights n times
  - Each time, toggle the lights at positions that are multiples of i
- Return indexes of the lights that are true

*/

function lightsOn(switches) {
  var lights = [];
  var i;
  var j;

  for (i = 0; i < switches; i += 1) {
    lights.push(false);
  }

  for (j = 1; j <= switches; j += 1) {
    lights.forEach(function (light, index) {
      if ((index + 1) % j === 0) {
        lights[index] = !light;
      }
    });
  }

  return lights.reduce(function (switchedOn, light, index) {
    if (light) {
      return switchedOn.concat(index + 1);
    } else {
      return switchedOn;
    }
  }, []);
}

console.log(lightsOn(1));        // [1]
console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
