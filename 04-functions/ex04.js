/*
Write a program that consoles the value of 1!, 2!, 3!, 4!, and 5!

Expected output:
> node factorial.js
1
2
6
24
120

While correct, my solution was out in left field from the shown solution
*/

function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}

function factorial(num) {
  let sum = 1;
  for ( num; num > 0; num--) {
    sum = times(num, sum);
  }
  return sum;
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));