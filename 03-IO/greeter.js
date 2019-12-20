let inputLine = require('readline-sync');
let fname = inputLine.question('What is your first name? ');
let lname = inputLine.question('What is your last name? ');
console.log(`Hello, ${fname} ${lname}!`);