// solution has this line under the "askIt" function. Scoped.
let inputLine = require('readline-sync');

function multiply(a, b) {
  return (a * b)
}

function askIt(query) {
  return(inputLine.question(`${query}`));
};

let a = askIt('What is the first number? ');
let b = askIt('What is the second number? ');
console.log(`${a} * ${b} = ${a * b}`);