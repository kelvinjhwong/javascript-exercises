// function swapName(name) {
//   return name.split(' ').reverse().join(', ');
// }

function swapName(name) {
  var names = name.split(' ');
  var firstName = names.slice(0, names.length - 1).join(' ');
  var lastName = names.slice(-1).join();

  return `${lastName}, ${firstName}`;
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Mary Jane Graham'));    // "Roberts, Joe"
