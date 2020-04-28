// 1st attempt
Object.prototype.ancestors = function () {
  var prototypeChain = [];
  var ancestor = Object.getPrototypeOf(this);

  while (ancestor !== Object.prototype && ancestor !== null) {
    prototypeChain.push(ancestor.name);
    ancestor = Object.getPrototypeOf(ancestor);
  }

  if (ancestor === Object.prototype) {
    prototypeChain.push('Object.prototype');
  }

  return prototypeChain;
};

// 2nd attempt
Object.prototype.ancestors = function () {
  var ancestorNames = [];
  var proto;

  if (this === Object.prototype) {
    return [];
  }

  proto = Object.getPrototypeOf(this);

  while (proto !== Object.prototype) {
    ancestorNames.push(proto.name);
    proto = Object.getPrototypeOf(proto);
  }

  ancestorNames.push('Object.prototype');

  return ancestorNames;
};

// name property added to make objects easier to identify
var foo = {name: 'foo'};
var bar = Object.create(foo);
bar.name = 'bar';
var baz = Object.create(bar);
baz.name = 'baz';
var qux = Object.create(baz);
qux.name = 'qux';

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']
