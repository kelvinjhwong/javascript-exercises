document.addEventListener('DOMContentLoaded', function () {
  function highlight(event) {
    var navId;
    var navTarget;
    event.stopPropagation();

    removeAllHighlights();

    if (event.target.tagName === 'A') {
      navId = event.target.getAttribute('href');
      navTarget = document.querySelector(navId);
      navTarget.classList.add('highlight');
    } else if (event.target.tagName === 'ARTICLE') {
      event.target.classList.add('highlight');
    } else if (event.target.parentNode.tagName === 'ARTICLE') {
      event.target.parentNode.classList.add('highlight');
    } else {
      document.querySelector('main').classList.add('highlight');
    }
  }

  function removeAllHighlights() {
    var highlighted = 
      Array.prototype.slice.call(
        document.getElementsByClassName('highlight')
      );
    
    highlighted.forEach((element) => element.classList.remove('highlight'));
  }

  document.addEventListener('click', highlight);
});
