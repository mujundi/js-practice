// const sayHello = function() {
//   console.log("Hello");
// };

// const sayHello = () => {
//   console.log("Hello");
// };

// Single line function needs no braces
// const sayHello = () => console.log("Hello");

// One line returns
// const sayHello = () => 'Hello';

// return object literal
// const sayHello = () => ({msg: 'Hello'})

// Single param doesn't need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);

// Multiple params need parenthesis
// const sayHello = (firstName, lastName) => console.log(`Hello, ${firstName} ${lastName}.`);

// sayHello("Brad", "Smith");

const users = ["Nathan", "Joe", "Bill"];

// map using function()
// const nameLengths = users.map(function(name) {
//   return name.length;
// });

// map using arrow function
// const nameLengths = users.map((name) => {
//   return name.length;
// });

// same but shorter
const nameLengths = users.map(name => name.length);

console.log(nameLengths);
