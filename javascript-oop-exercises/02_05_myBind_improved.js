function myBind(func, context) {
  var args1 = Array.prototype.slice.call(arguments, 2);

  return function () {
    var args2 = Array.prototype.slice.call(arguments);
    return func.apply(context, args1.concat(args2));
  };
}
