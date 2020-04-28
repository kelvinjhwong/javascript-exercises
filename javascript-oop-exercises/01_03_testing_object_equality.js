function objectsEqual(object1, object2) {
  var key;

  if (object1 === object2) {
    return true;
  }

  if (typeof object1 !== typeof object2) {
    return false;
  }

  if (typeof object1 !== 'object') {
    return false;
  }

  if (Array.isArray(object1) !== Array.isArray(object2)) {
    return false;
  }

  if (!arraysEqual(Object.keys(object1), Object.keys(object2))) {
    return false;
  }

  for (key in object1) {
    if (!objectsEqual(object1[key], object2[key])) {
      return false;
    }
  }

  return true;
}

function arraysEqual(array1, array2) {
  var i;
  var len;
  var array1Sorted;
  var array2Sorted;

  if (array1.length !== array2.length) {
    return false;
  }

  array1Sorted = array1.slice().sort();
  array2Sorted = array2.slice().sort();

  len = array1Sorted.length;

  for (i = 0; i < len; i += 1) {
    if (array1Sorted[i] !== array2Sorted[i]) {
      return false;
    }
  }

  return true;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false

var array = [1, 2, 3];
array['foo'] = 'bar';
var object = { 0: 1, 1: 2, 2: 3, foo: 'bar' };
console.log(objectsEqual(array, object)); // false

console.log(objectsEqual(                 // true
  { a: {t: 2}, b: 'c' },
  { a: {t: 2}, b: 'c' }
));

console.log(objectsEqual(                 // true
  { a: {t: [3, 4, 1]}, b: 'c' },
  { a: {t: [3, 4, 1]}, b: 'c' }
));
