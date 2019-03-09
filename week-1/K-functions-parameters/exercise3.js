// Write your function here
function createGreeting(name) {
  return "Hello, my name " + name;
}
var greeting = createGreeting("Daniel");

console.log(greeting);

// ignore below

module.exports = { createGreeting };
