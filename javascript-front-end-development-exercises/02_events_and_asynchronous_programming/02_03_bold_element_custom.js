// function makeBold(element, callback) {
//   element.style.fontWeight = 'bold';
//   if (callback !== undefined && typeof callback === 'function') {
//     callback(element);
//   }
// }

function makeBold(element) {
  var boldedEvent = new CustomEvent('bolded');

  element.style.fontWeight = 'bold';
  element.dispatchEvent(boldedEvent);
}

var sectionElement = document.querySelector('section');

sectionElement.addEventListener('bolded', function(event) {
  event.target.classList.add('highlight');
});

makeBold(sectionElement);

sectionElement.classList.contains('highlight');

sectionElement.style.fontWeight;
