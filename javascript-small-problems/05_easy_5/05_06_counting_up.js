function sequence(number) {
  var i;
  var integers = [];

  for (i = 1; i <= number; i += 1) {
    integers.push(i);
  }

  return integers;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]
