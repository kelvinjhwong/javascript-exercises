/*
Input:
- string
- tokens separated by a single space

Output:
- log the register value for each PRINT token

Edge cases / extra assumptions:
- tokens are always valid
  - upper case
  - string
  - separated by 1 space only
- dividing by 0 - assume won't happen
- special numbers - assume won't get

Algorithm and data structure:
- integer division
*/

function minilang(string) {
  var stack = [];
  var register = 0;
  var tokens = string.split(' ');

  try {
    tokens.forEach(function (token) {
      if (/-?[0-9]+/.test(token)) {
        register = parseInt(token, 10);
      } else {
        switch (token) {
          case 'PUSH':
            stack.push(register);
            break;
          case 'ADD':
            register += popUnlessEmpty(stack);
            break;
          case 'SUB':
            register -= popUnlessEmpty(stack);
            break;
          case 'MULT':
            register *= popUnlessEmpty(stack);
            break;
          case 'DIV':
            register = Math.floor(register / popUnlessEmpty(stack));
            break;
          case 'MOD':
            register = Math.floor(register % popUnlessEmpty(stack));
            break;
          case 'POP':
            register = popUnlessEmpty(stack);
            break;
          case 'PRINT':
            console.log(register);
            break;
          default:
            throw `Invalid token: ${token}`;
        }
      }
    });
  } catch (e) {
    console.log(e);
  }
}

function popUnlessEmpty(array) {
  if (array.length === 0) {
    throw 'Stack is empty!';
  } else {
    return array.pop();
  }
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)

minilang('6 PUSH PULL 8 PUSH PRINT');
// Logs 'Invalid token: PULL'

minilang('6 MULT 9 PUSH ADD PRINT');
// Logs 'Stack is empty!'

