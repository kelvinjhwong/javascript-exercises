var rlSync = require('readline-sync');
var billAmount;
var tipPercentage;
var tipAmount;
var billTotal;

billAmount = parseFloat(rlSync.question('What is the bill? '));
tipPercentage = parseFloat(rlSync.question('What is the tip percentage? ')) / 100;

tipAmount = billAmount * tipPercentage;
billTotal = billAmount + tipAmount;

console.log(`The tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${billTotal.toFixed(2)}`);
