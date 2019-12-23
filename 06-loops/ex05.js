/*
Refactor the code so that you don't need to call randomNumberBetween from two different locations, lines 6 and 10. Do not change the arguments you pass to randomNumberBetween.
*/

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let result = 0;
let tries = 0;
while (result <= 2) {
  result = randomNumberBetween(1, 6);
  tries++;
}

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');