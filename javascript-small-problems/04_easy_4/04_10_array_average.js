function average(integers) {
  var sum = integers.reduce((accum, value) => accum + value);

  return Math.floor(sum / integers.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40
