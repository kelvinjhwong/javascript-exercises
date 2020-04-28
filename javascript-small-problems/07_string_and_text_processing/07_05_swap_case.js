function swapCase(string) {
  return string.replace(/[a-z]/gi, function (char) {
    return /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase();
  });
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
