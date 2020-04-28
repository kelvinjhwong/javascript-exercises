var rlSync = require('readline-sync');
var noun = rlSync.question('Enter a noun: ');
var verb = rlSync.question('Enter a verb: ');
var adjective = rlSync.question('Enter an adjective: ');
var adverb = rlSync.question('Enter an adverb: ');

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
