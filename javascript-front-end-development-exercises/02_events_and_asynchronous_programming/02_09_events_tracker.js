var track;
var tracker;
var divRed;
var divBlue;
var divOrange;
var divGreen;

document.addEventListener('DOMContentLoaded', function () {
  track = function (callback) {
    function isEventTracked(events, event) {
      return events.includes(event);
    }

    return function (event) {
      if (!isEventTracked(tracker.list(), event)) {
        tracker.add(event);
      }

      callback(event);
    }
  }

  tracker = (function () {
    var events = [];

    return {
      list: function () {
        return events.slice();
      },

      elements: function () {
        return events.map((event) => event.target);
      },

      add: function (event) {
        events.push(event);
      },

      clear: function () {
        events = [];
        return 0;
      },
    };
  })();

  divRed = document.querySelector('div#red');
  divRed.addEventListener('click', track(function(event) {
    document.body.style.background = 'red';
  }));

  divBlue = document.querySelector('div#blue');
  divBlue.addEventListener('click', track(function(event) {
    event.stopPropagation();
    document.body.style.background = 'blue';
  }));

  divOrange = document.querySelector('div#orange');
  divOrange.addEventListener('click', track(function(event) {
    document.body.style.background = 'orange';
  }));

  divGreen = document.querySelector('div#green');
  divGreen.addEventListener('click', track(function(event) {
    document.body.style.background = 'green';
  }));
});
