var rlSync = require('readline-sync');
var userInput;
// var computeInFeet = false;
var unit;
var alternativeUnit;
var roomLength;
var roomWidth;
var roomArea;
var roomAreaInAlternativeUnit;
var CONVERSION_FACTOR;
var SQMETERS_TO_SQFT = 10.7639;

do {
  userInput = rlSync.question('Would you like to calculate in meters or feet? (m/f)\n');
  if (/[mMfF]/.test(userInput)) break;
  console.log('Invalid input! Please enter m for meters or f for feet.');
} while (true);

unit = (/[mM]/.test(userInput) ? 'meters' : 'feet');
alternativeUnit = (unit === 'meters' ? 'feet' : 'meters');
CONVERSION_FACTOR = (unit === 'meters' ? SQMETERS_TO_SQFT : 1 / SQMETERS_TO_SQFT);

roomLength = rlSync.question(`Enter the length of the room in ${unit}:\n`);
roomLength = parseInt(roomLength, 10);

roomWidth = rlSync.question(`Enter the width of the room in ${unit}:\n`);
roomWidth = parseInt(roomWidth, 10);

roomArea = roomLength * roomWidth;

roomAreaInAlternativeUnit = roomArea * CONVERSION_FACTOR;

console.log(`The area of the room is ${roomArea.toFixed(2)} square ${unit} ` +
            `(${roomAreaInAlternativeUnit.toFixed(2)} square ${alternativeUnit}).`);
