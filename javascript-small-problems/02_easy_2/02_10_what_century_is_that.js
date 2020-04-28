/*
Calculate century number
Calculate century suffix
- number ends in 1 && number % 100 not 11 => 'st'
- number ends in 2 && number % 100 not 12 => 'nd'
- number ends in 3 && number % 100 not 13 => 'rd'
- else 'th'
Concatenate number and suffix
*/

function century(year) {
  var centuryNumber = Math.ceil(year / 100);
  var centurySuffix = computeCenturySuffix(centuryNumber);

  return String(centuryNumber) + centurySuffix;
}

function computeCenturySuffix(centuryNumber) {
  if (centuryNumber % 10 === 1 && centuryNumber % 100 !== 11) {
    return 'st';
  } else if (centuryNumber % 10 === 2 && centuryNumber % 100 !== 12) {
    return 'nd';
  } else if (centuryNumber % 10 === 3 && centuryNumber % 100 !== 13) {
    return 'rd';
  } else {
    return 'th';
  }
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
