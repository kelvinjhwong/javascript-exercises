function randomizer() {
  var callbacksArray = Array.prototype.slice.call(arguments);
  var numberOfCallbacks = callbacksArray.length;
  var timerId;
  var secondsCount = 1;
  var totalDuration = numberOfCallbacks * 2 * 1000;

  if (numberOfCallbacks === 0) {
    return;
  }

  timerId = setInterval(function() {
    console.log(secondsCount);

    if (secondsCount >= numberOfCallbacks * 2) {
      clearInterval(timerId);
    }
    
    secondsCount += 1;
  }, 1000);

  callbacksArray.forEach(function (callback) {
    setTimeout(callback, Math.floor(Math.random() * totalDuration));
  });
}
