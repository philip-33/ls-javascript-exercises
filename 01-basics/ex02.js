/*
Use the arithmetic operators to determine the individual digits of a 4-digit number like 4936
*/

num = 4936;

ones = num % 10;
num = (num - ones)/10
tens = num % 10;
num = (num - tens)/10
hundreds = num % 10;
num = (num - hundreds)/10
thousands = num % 10;
num = (num - thousands)/10

console.log(thousands + ' ' + hundreds + ' ' + tens + ' ' + ones);