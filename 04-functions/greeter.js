let inputLine = require('readline-sync');

function askIt(query) {
  return(inputLine.question(`${query}`));
};

let fname = askIt('What is your first name? ');
let lname = askIt('What is your last name? ');
console.log(`Hello, ${fname} ${lname}!`);