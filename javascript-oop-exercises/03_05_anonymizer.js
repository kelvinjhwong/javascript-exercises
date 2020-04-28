var Account = (function () {
  function generateDisplayName() {
    var i;
    var lettersAndNumbers =
      'abcdefghijklmnopqrstuvwxyz' +
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
      '0123456789';
    var len = lettersAndNumbers.length;
    var newChar;
    var newDisplayName = '';

    for (i = 1; i <= 16; i += 1) {
      newChar = lettersAndNumbers[Math.floor(Math.random() * len)];
      newDisplayName += newChar;
    }

    return newDisplayName;
  }

  function isValidPassword(correctPassword, passwordInput) {
    return correctPassword === passwordInput;
  }

  function partiallyApply(constructorObject, methodKey, data, context) {
    return function (...args) {
      return constructorObject[methodKey].apply(context, [data].concat(args));
    };
  }

  return {
    init: function (email, password, firstName, lastName) {
      var accountData = { email, password, firstName, lastName };
      var propName;

      this.displayName = generateDisplayName();

      for (propName in Account) {
        if (typeof Account[propName] === 'function' && propName !== 'init') {
          this[propName] = partiallyApply(Account, propName, accountData, this);
        }
      }

      return this;
    },

    reanonymize: function (accountData, passwordInput) {
      if (isValidPassword(accountData.password, passwordInput)) {
        this.displayName = generateDisplayName();
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    resetPassword: function (accountData, passwordInput, newPassword) {
      if (isValidPassword(accountData.password, passwordInput)) {
        accountData.password = newPassword;
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    firstName: function (accountData, passwordInput) {
      if (isValidPassword(accountData.password, passwordInput)) {
        return accountData.firstName;
      } else {
        return 'Invalid Password';
      }
    },

    lastName: function (accountData, passwordInput) {
      if (isValidPassword(accountData.password, passwordInput)) {
        return accountData.lastName;
      } else {
        return 'Invalid Password';
      }
    },

    email: function (accountData, passwordInput) {
      if (isValidPassword(accountData.password, passwordInput)) {
        return accountData.email;
      } else {
        return 'Invalid Password';
      }
    },
  };
})();

var fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                      // returns the firstName function
console.log(fooBar.email);                          // returns the email function
console.log(fooBar.firstName('123456'));            // logs 'foo'
console.log(fooBar.firstName('abc'));               // logs 'Invalid Password'
console.log(fooBar.displayName);                    // logs 16-character sequence
console.log(fooBar.resetPassword('123', 'abc'));    // logs 'Invalid Password'
console.log(fooBar.resetPassword('123456', 'abc')); // logs true

var displayName = fooBar.displayName;
console.log(fooBar.reanonymize('abc'));             // logs true
console.log(displayName === fooBar.displayName);    // logs false

var bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('abc'));               // logs 'foo'.
console.log(fooBar.email('abc'));                   // logs 'foo@bar.com'

console.log(bazQux.firstName('123456'));            // logs 'baz'
console.log(bazQux.lastName('123456'));             // logs 'qux'
console.log(bazQux.email('123456'));                // logs 'baz@qux.com'
console.log(bazQux.resetPassword('123', 'abc'));    // logs 'Invalid Password'
console.log(bazQux.resetPassword('123456', 'abc')); // logs true
console.log(bazQux.displayName);                    // logs 16-character sequence
console.log(bazQux.reanonymize('abc'));             // logs true
console.log(bazQux.displayName);                    // logs new 16-character sequence