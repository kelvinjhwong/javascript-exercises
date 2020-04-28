function interleave(array1, array2) {
  var i;
  var len = array1.length;
  var interleaved = array1.slice();

  for (i = len; i > 0; i -= 1) {
    interleaved.splice(i, 0, array2[i - 1]);
  }

  return interleaved;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));
