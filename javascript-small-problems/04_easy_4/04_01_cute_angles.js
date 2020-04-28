var MAX_NUMBER_OF_DEGREES = 360;
var MINUTES_PER_DEGREE = 60;
var SECONDS_PER_MINUTE = 60;
var SECONDS_PER_DEGREE = SECONDS_PER_MINUTE * MINUTES_PER_DEGREE;
var DEGREE_SYMBOL = '\xB0'

function dms(number) {
  var normalizedNumber = number % MAX_NUMBER_OF_DEGREES;
  normalizedNumber = normalizedNumber >= 0 ? normalizedNumber : normalizedNumber + MAX_NUMBER_OF_DEGREES;
  var degrees = Math.floor(normalizedNumber);

  var numberDecimalPart = normalizedNumber - degrees;
  var secondsTotal = Math.round(numberDecimalPart * SECONDS_PER_DEGREE);
  var minutes = Math.floor(secondsTotal / SECONDS_PER_MINUTE);
  var seconds = secondsTotal % SECONDS_PER_MINUTE;

  var minutesFormatted = String(minutes).padStart(2, '0');
  var secondsFormatted = String(seconds).padStart(2, '0');

  return `${degrees}${DEGREE_SYMBOL}${minutesFormatted}'${secondsFormatted}"`;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"
