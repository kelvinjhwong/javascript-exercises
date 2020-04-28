document.addEventListener('DOMContentLoaded', function () {
  function delegateEvent(parentElement, selector, eventType, callback) {
    if (parentElement === null || !(parentElement instanceof Element)) {
      return;
    }
    
    parentElement.addEventListener(eventType, function (event) {
      var validTargets = Array.prototype.slice.call(
        parentElement.querySelectorAll(selector)
      );

      if (validTargets.includes(event.target)) {
        callback(event);
      }
    });

    return true;
  }

  // function isDescendantOf(parentElement, candidate) {
  //   while (candidate !== parentElement && candidate !== document) {
  //     if (candidate.parentElement === parentElement) {
  //       return true;
  //     }

  //     candidate = candidate.parentElement;
  //   }

  //   return false;
  // }

  var element1 = document.querySelector('table');
  var element2 = document.querySelector('main h1');
  var element3 = document.querySelector('main');
  
  var callback = function(event) {
    alert('Target: ' + event.target.tagName + '\nCurrent Target: ' + event.currentTarget.tagName);
  };
  
  // console.log(delegateEvent(element1, 'p', 'click', callback));
  // console.log(delegateEvent(element2, 'p', 'click', callback));
  // console.log(delegateEvent(element2, 'h1', 'click', callback));
  // console.log(delegateEvent(element3, 'h1', 'click', callback));
  // console.log(delegateEvent(element3, 'aside p', 'click', callback));
  console.log(delegateEvent(element2, 'p', 'click', callback));

  var newP = document.createElement('P');
  var newContent = document.createTextNode('New Paragraph');
  newP.appendChild(newContent);

  element2.appendChild(newP);
});
