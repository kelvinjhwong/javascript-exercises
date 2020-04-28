function buyFruit(fruitsList) {
  return fruitsList.reduce(function (fruits, fruit) {
    var i;

    for (i = 1; i <= fruit[1]; i += 1) {
      fruits.push(fruit[0]);
    }

    return fruits;
  }, []);
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
