$(function () {
  var App = {
    $operationWindow: $('#operation-window'),
    $entryWindow: $('#entry-window'),
    $keypad: $('#keypad'),
    $digits: $('li.digit'),
    $operators: $('li.operator'),
    $negate: $('li#negate'),
    $equal: $('li#equal'),
    $clear: $('li#clear'),
    $clearEntry: $('li#clear-entry'),
    isNewEntry: false,

    init: function () {
      this.bindButtonEvents();
      this.bindKeyboardEvents();
    },

    bindButtonEvents: function () {
      var buttonSelectors = Object.keys(this.buttonEvents());

      buttonSelectors.forEach(function (selector) {
        this.$keypad.on('click', selector, this.buttonEvents()[selector].bind(this));
      }, this);
    },

    buttonEvents: function () {
      return {
        'li.digit': this.enterDigitOrPoint,
        'li#negate': this.negate,
        'li.operator': this.enterOperator,
        'li#equal': this.equal,
        'li#clear': this.clear,
        'li#clear-entry': this.clearEntry,
      };
    },

    enterDigitOrPoint: function (e) {
      var newEntry = $(e.target).text();

      if (this.isNewOperation) {
        this.clear();
      } else if (this.isNewEntry) {
        this.clearEntry();
      }

      this.$entryWindow.text(function (_, currentEntry) {
        if (currentEntry === '0') {
          return newEntry;
        } else if (newEntry === '.' && currentEntry.includes('.')) {
          return currentEntry;
        } else {
          return currentEntry + newEntry;
        }
      }.bind(this));
    },

    negate: function () {
      if (this.isNewOperation) {
        this.clearOperation();
      }

      if (this.$entryWindow.text() !== '0') {
        if (this.$entryWindow.text()[0] === '-') {
          this.$entryWindow.text(function (_, currentEntry) {
            return currentEntry.slice(1);
          });
        } else {
          this.$entryWindow.text(function (_, currentEntry) {
            return '-' + currentEntry;
          });
        }
      }
    },

    enterOperator: function (e) {
      var operator = $(e.target).text();

      if (this.isNewOperation) {
        this.clearOperation();
      }

      if (operator === 'x') {
        operator = '*';
      }

      this.$operationWindow.text(function (_, currentOperation) {
        return currentOperation + ' ' + this.$entryWindow.text() + ' ' + operator;
      }.bind(this));

      this.toggleNewEntry(true);
    },

    equal: function () {
      var result;

      if (!this.isNewEntry && !this.isNewOperation) {
        if (this.$operationWindow.text().length > 0) {
          this.$operationWindow.text(function (_, currentOperation) {
            return currentOperation + ' ' + this.$entryWindow.text();
          }.bind(this));

          result = eval(this.$operationWindow.text());

          this.$entryWindow.text(result);

          this.toggleNewEntry(true);
          this.toggleNewOperation(true);
        }
      }
    },

    clear: function () {
      this.$entryWindow.text('0');
      this.$operationWindow.text('');

      this.toggleNewEntry(false);
      this.toggleNewOperation(false);
    },

    clearEntry: function () {
      if (this.isNewOperation) {
        this.clearOperation();
      }

      this.$entryWindow.text('0');
      this.toggleNewEntry(false);
    },

    clearOperation: function () {
      this.$operationWindow.text('');
      this.toggleNewOperation(false);
    },

    toggleNewOperation: function (isNewOperation) {
      this.isNewOperation = isNewOperation;
    },

    toggleNewEntry: function (isNewEntry) {
      this.isNewEntry = isNewEntry;
    },

    bindKeyboardEvents: function () {
      $(document).on('keydown', this.keyboardEvents.bind(this));
    },

    keyboardEvents: function (e) {
      var entry = e.key;
      var digitOrPointRegExp = /^\d|\.$/;
      var operatorRegExp = /^\+|-|x|\/|%|=$/;

      if (entry === '*') {
        entry = 'x';
      } else if (entry === 'Enter') {
        entry = '=';
      }

      if (digitOrPointRegExp.test(entry) || (operatorRegExp.test(entry))) {
        this.$keypad.find(`li:contains(${entry})`).trigger('click');
      } else if (entry === 'Backspace') {
        this.removeLastDigit();
      } else if (entry === 'Escape') {
        this.clear();
      } else if (entry === 'n' || entry === 'N') {
        this.negate();
      }
    },

    removeLastDigit: function () {
      var currentEntry = this.$entryWindow.text();

      if (this.isNewOperation) {
        this.clearOperation();
      } else if (this.isNewEntry) {
        this.toggleNewEntry(false);
      }

      if (currentEntry.length === 1) {
        this.$entryWindow.text('0');
      } else if (currentEntry[0] === '-' && currentEntry.length === 2) {
        this.$entryWindow.text('0');
      } else {
        this.$entryWindow.text(currentEntry.slice(0, -1))
      }
    }
  };

  App.init();
});
