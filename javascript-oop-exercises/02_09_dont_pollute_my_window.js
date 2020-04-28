function greeter () {
  var name = 'Naveed';
  var greeting = 'Hello';
  var message = greeting + ' ' + name + '!';

  console.log(message);
}

var greeter = {
  name: 'Naveed',
  greeting: 'Hello',
  sayGreetings: function () {
    var message = this.greeting + ' ' + this.name + '!';
    console.log(message);
  },
};

var greeter = {
  message: (function () {
    var name = 'Naveed';
    var greeting = 'Hello';

    return greeting + ' ' + name + '!';
  })(),

  sayGreetings: function () {
    console.log(this.message);
  },
};
