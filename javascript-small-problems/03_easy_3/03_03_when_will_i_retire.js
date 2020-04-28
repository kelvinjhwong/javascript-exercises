var rlSync = require('readline-sync');
var age;
var retirementAge;
var currentDate;
var currentYear;
var yearsLeftToWork;
var retirementDate;
var retirementYear;

age = parseInt(rlSync.question('What is your age? '), 10);
retirementAge = parseInt(rlSync.question('At what age would you like to retire? '), 10);

currentDate = new Date();
currentYear = currentDate.getFullYear();

yearsLeftToWork = retirementAge - age;
retirementYear = currentYear + yearsLeftToWork;

console.log(`\nIt's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${yearsLeftToWork} years of work to go!`);
