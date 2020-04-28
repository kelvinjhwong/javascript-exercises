/*

Rotating Matrices
As we saw in the previous exercises, a matrix can be represented by an array of arrays. For example, the 3x3 matrix shown below:

1  5  8
4  7  2
3  9  6
is represented by the following array of arrays:

var matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];
A 90-degree rotation of a matrix produces a new matrix in which each side of the matrix is rotated clockwise by 90 degrees. For example, the 90-degree rotation of the matrix shown above is:

3  4  1
9  7  5
6  2  8
A 90-degree rotation of a non-square matrix is similar. For example, given the following matrix:

3  4  1
9  7  5
its 90-degree rotation is:

9  3
7  4
5  1
Write a function that takes an arbitrary MxN matrix, rotates it clockwise by 90-degrees as described above, and returns the result as a new matrix. The function should not mutate the original matrix.

Examples:

var matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

var matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

var newMatrix1 = rotate90(matrix1);
var newMatrix2 = rotate90(matrix2);
var newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]

-----------------------------------------------------------------------------

Input:
- a nested array
- m * n matrix
- m elements (subarrays)
- each element subarray has length n

Output:
- a new nested array
- n * m matrix
- n elements
- each element subarray has length m

Rules:

var matrixBeforeRotation = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

matrixAfterRotation = [
  [3, 4, 1],
  [9, 7, 5],
  [6, 2, 8],
];

matrixBeforeRotation = [
  [3, 4, 1],
  [9, 7, 5],
]

matrixAfterRotation = [
  [9, 3],
  [7, 4],
  [5, 1],
]

Edge cases:
- Assume that all input matrixes are valid - so always m * n matrixes
  - always m subarrays, each of length n
  - no sparse subarrays - all subarray elements are non-empty
  - m and n are 1 or greater
- Boundary conditions - case of 1 x 1 matrices e.g. [[4]]
- Assume that input is valid - so won't get other data types as input, won't
validate input

Algorithm:

- Go from 'bottom left corner' to 'top left corner' to generate first row of rotated matrix
- Repeat for subsequent columns

--------------------------------------------

- Reverse the input array without mutating the input, or the input's subarrays:

var matrix = [
  [3, 4, 1],
  [9, 7, 5],
]

Take:
- 9, 3: matrix[1][0], matrix[0][0]
- 7, 4: matrix[1][1], matrix[0][1]
- 5, 1: matrix[1][2], matrix[0][2]

- Initialize matrix array
- Iterate from 0 to 2 (i)
  - Initialize empty row
  - Iterate from 1 to 0 (j)
    - Push matrix[j][i] to empty row
  - Push row to matrix array
- Return matrix array

var matrixReversed =
[
  [9, 7, 5],
  [3, 4, 1],
]

- Transposing the reversed matrix:
- Initialize new empty array;
- Take each column of the input matrix, then use that column's elements as the elements of a new row in the rotated matrix
  - Iterate from 0 to 2 (i.e. the indexes of each subarray)
    - Iterate from 0 to 1 (i.e. the indexes of the outer array)
      - Create new subarray with elements matrixReversed[0][0] === 9, then matrixReversed[1][0] === 3

*/

// function rotate90(matrix) {
//   return matrix[0].map((_, rowIndex) => matrix.map((_, colIndex) => matrix[matrix.length - colIndex - 1][rowIndex]));
// }

function rotate90(matrix) {
  var reversedMatrix = matrix.slice().reverse();

  return transposeMatrix(reversedMatrix);
}

function transposeMatrix(matrix) {
  var transposed = [];
  var numberOfRows = matrix.length;
  var numberOfCols = matrix[0].length;
  var i;
  var j;
  var currentRow;

  for (i = 0; i < numberOfCols; i += 1) {
    currentRow = [];
    for (j = 0; j < numberOfRows; j += 1) {
      currentRow.push(matrix[j][i]);
    }
    transposed.push(currentRow);
  }

  return transposed;
}

// -------------------------------------------------------------

var matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

var matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

var newMatrix1 = rotate90(matrix1);
var newMatrix2 = rotate90(matrix2);
var newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
