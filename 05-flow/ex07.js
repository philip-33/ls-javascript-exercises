/*
Write a function that takes a string as an argument and returns an all-caps version of the string when the string is longer than 10 characters. Otherwise, it should return the original string. Example: change 'hello world' to 'HELLO WORLD', but don't change 'goodbye'.
*/

function sillyString(words) {
  if (words.length <= 10) {
    return words;
  } else {
    return words.toUpperCase();
  }
}

console.log(sillyString('hello world'));
console.log(sillyString('goodbye'));
console.log(sillyString("Sue Smith"));
console.log(sillyString("Sue Robertson"));