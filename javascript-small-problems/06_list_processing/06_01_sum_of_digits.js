function sum(number) {
  return String(number).split('').reduce(function (total, digitString) {
    return total + Number(digitString);
  }, 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
