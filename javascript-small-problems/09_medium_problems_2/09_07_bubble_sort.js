/*
Input:
- array
- at least 2 elements

Output:
- same array
- elements sorted with <, ===, >

Edge cases:
- array not sparse
- ignore object properties
- array elements are of different types - assume won't get
- assume only have numbers and strings
  - strings compared according to lexicographic order
- boundary conditions - 2 elements
- when comparing 2 values that are the same - don't swap

Algorithm:
- Get array's length, assign to len variable
- Pass through array len times
  - Set swapped flag to false;
  - Each pass iterate from index 1 to len - 1
    - At each element, compare with previous element. If previous element
      greater than current element
      - Swap
      - Toggle swapped flag
    - If after a pass, no elements were swapped, return same array
- Return same array
*/

function bubbleSort(array) {
  var len = array.length;
  var i;
  var j;
  var elementsSwapped;
  var lastSwappedIndex;
  var lastIndexToCheck;

  for (i = 1; i <= len; i += 1) {
    elementsSwapped = false;

    if (lastIndexToCheck === undefined) {
      lastIndexToCheck = len - i;
    }

    for (j = 1; j <= lastIndexToCheck; j += 1) {
      if (array[j - 1] > array[j]) {
        [array[j - 1], array[j]] = [array[j], array[j - 1]];
        elementsSwapped = true;
        lastSwappedIndex = j;
      }
    }

    if (!elementsSwapped) {
      break;
    }

    lastIndexToCheck = lastSwappedIndex - 1;
  }
}

var array = [5, 3];
console.log(bubbleSort(array));   // undefined
console.log(array);    // [3, 5]

var array = [6, 2, 7, 1, 4];
console.log(bubbleSort(array));   // undefined
console.log(array);    // [1, 2, 4, 6, 7]

var array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
console.log(bubbleSort(array));   // undefined
console.log(array);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
