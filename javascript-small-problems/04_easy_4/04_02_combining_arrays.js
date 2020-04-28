// function union(array1, array2) {
//   var combinedArray = [];

//   copyNonDupsTo(combinedArray, array1);
//   copyNonDupsTo(combinedArray, array2);

//   return combinedArray.sort();
// }

function union() {
  var i;
  var len = arguments.length;
  var combinedArray = [];

  for (i = 0; i < len; i += 1) {
    copyNonDupsTo(combinedArray, arguments[i]);
  }

  return combinedArray.sort();
}

function copyNonDupsTo(resultArray, array) {
  array.forEach(function (element) {
                  if (!resultArray.includes(element)) {
                    resultArray.push(element);
                  }
                });
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
