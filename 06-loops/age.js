let ageMonger = require('readline-sync');

let age = Number(ageMonger.question('How old are you? '));
console.log(`You are ${age} years old?`);

for (i = 1; i <= 4; i++) {
  console.log(`In ${i * 10} years, you will be ${age + (i * 10)}`);
}