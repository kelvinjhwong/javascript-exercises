function multiplyList(array1, array2) {
  var i;
  var len = array1.length;
  var arrayProduct = [];

  for (i = 0; i < len; i += 1) {
    arrayProduct.push(array1[i] * array2[i]);
  }

  return arrayProduct;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
