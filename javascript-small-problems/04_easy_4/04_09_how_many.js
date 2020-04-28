function countOccurrences(array) {
  var i;
  var len = array.length;
  var counts = {};
  var element;

  for (i = 0; i < len; i += 1) {
    counts[array[i]] = counts[array[i]] || 0;
    counts[array[i]] += 1;
  }

  for (element in counts) {
    console.log(`${element} => ${String(counts[element])}`);
  }
}

var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
