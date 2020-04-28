function staggeredCase(string) {
  var toUpper = true;

  return string.split('').map(function (char) {
    if (/[a-z]/i.test(char)) {
      if (toUpper) {
        toUpper = !toUpper;
        return char.toUpperCase();
      } else {
        toUpper = !toUpper;
        return char.toLowerCase();
      }
    } else {
      return char;
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"
