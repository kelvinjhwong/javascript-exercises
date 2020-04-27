$(function () {
  var App = {
    interval: null,
    timeElapsed: 0,
    $timer: $('h1'),
    $hours: $('#hours'),
    $minutes: $('#minutes'),
    $seconds: $('#seconds'),
    $centiseconds: $('#centiseconds'),
    $start: $('#start'),
    $stop: $('#stop'),
    $reset: $('#reset'),

    toggleStartStop: function (button) {
      switch (button) {
        case 'start':
          this.$stop.hide();
          this.$start.show();
          break;
        case 'stop':
          this.$start.hide();
          this.$stop.show();
          break;
      }
    },

    startTimer: function () {
      var MILLSECONDS_PER_CENTISECOND = 10;

      this.interval = setInterval(function () {
        this.timeElapsed += MILLSECONDS_PER_CENTISECOND;
        this.updateDigits();
      }.bind(this), MILLSECONDS_PER_CENTISECOND);

      this.toggleStartStop('stop');
    },

    stopTimer: function () {
      clearInterval(this.interval);
      this.interval = null;
      this.toggleStartStop('start');
    },

    resetTimer: function () {
      clearInterval(this.interval);
      this.interval = null;
      this.timeElapsed = 0;
      this.updateDigits();
      this.toggleStartStop('start');
    },

    updateDigits: function () {
      var CENTISECONDS_PER_SECOND = 100;
      var SECONDS_PER_MINUTE = 60;
      var MINUTES_PER_HOUR = 60;
      var CENTISECONDS_PER_MINUTE = CENTISECONDS_PER_SECOND * SECONDS_PER_MINUTE;
      var CENTISECONDS_PER_HOUR = CENTISECONDS_PER_MINUTE * MINUTES_PER_HOUR;

      var timeElapsedInCentiseconds = Math.floor(this.timeElapsed / 10);

      var centiseconds = timeElapsedInCentiseconds % CENTISECONDS_PER_SECOND;
      var seconds = Math.floor(timeElapsedInCentiseconds / CENTISECONDS_PER_SECOND) % SECONDS_PER_MINUTE;
      var minutes = Math.floor(timeElapsedInCentiseconds / CENTISECONDS_PER_MINUTE) % MINUTES_PER_HOUR;
      var hours = Math.floor(timeElapsedInCentiseconds / CENTISECONDS_PER_HOUR);

      this.$centiseconds.text(this.padDigits(centiseconds));
      this.$seconds.text(this.padDigits(seconds));
      this.$minutes.text(this.padDigits(minutes));
      this.$hours.text(this.padDigits(hours));
    },

    padDigits: function (duration) {
      var durationString = String(duration);
      return durationString.length < 2 ? durationString.padStart(2, '0') : durationString;
    },

    init: function () {
      this.toggleStartStop('start');
      this.$start.on('click', this.startTimer.bind(this));
      this.$stop.on('click', this.stopTimer.bind(this));
      this.$reset.on('click', this.resetTimer.bind(this));
    },
  };

  App.init();
});
