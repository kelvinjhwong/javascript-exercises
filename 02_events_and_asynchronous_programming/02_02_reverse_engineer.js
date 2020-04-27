document.querySelector('html :not(#container)').addEventListener('click', function() {
  document.querySelector('#container').style = 'display: none';
});

// ------------------------------------------------------------------

document.querySelector('html').addEventListener('click', function() {
  document.querySelector('#container').style = 'display: none';
}, true);

document.querySelector('#container').addEventListener('click', function(event) {
  document.querySelector('#container').style = 'display: block';
});

// ------------------------------------------------------------------

document.querySelector('html').addEventListener('click', function(event) {
  var container = document.querySelector('#container');

  if (!container.contains(event.target)) {
    container.style = 'display: none';
  }
});
