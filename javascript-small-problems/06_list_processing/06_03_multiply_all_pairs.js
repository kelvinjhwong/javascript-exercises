function multiplyAllPairs(numbers1, numbers2) {
  var products = [];

  numbers1.forEach(function (number1) {
    numbers2.forEach(function (number2) {
      products.push(number1 * number2);
    });
  });

  return products.sort(numberSort);
}

function numberSort(number1, number2) {
  return number1 - number2;
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
