function twice(num) {
  if (isDoubleNum(num)) return num;
  else return num * 2;
}

function isDoubleNum(num) {
  var numString = String(num);
  var numLength = numString.length;
  var leftHalf = numString.substr(0, numLength / 2);
  var rightHalf = numString.substr(numLength / 2, numLength / 2);

  return (numLength % 2 === 0 && leftHalf === rightHalf);
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676
