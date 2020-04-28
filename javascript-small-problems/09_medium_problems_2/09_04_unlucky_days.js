/*

Input:
- integer
- > 1752

Output:
- integer
- number of 'Friday the 13th's in that year

Edge cases:
- year greater than Number.MAX_SAFE_INTEGER - assume won't happen

Algorithm:
- Initialize count variable to 0;
- Iterate through all 12 days with 13
- If Friday, increment count
- Return count

*/

function fridayThe13ths(year) {
  var count = 0;
  var date;
  var i;

  for (i = 0; i <= 11; i += 1) {
    date = new Date(year, i, 13);
    if (date.getDay() === 5) {
      count += 1;
    }
  }

  return count;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
