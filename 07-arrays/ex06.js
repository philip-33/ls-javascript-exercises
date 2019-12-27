//use map to find all lengths
//use filter to discard the even values
//final string returns only odd values
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(inputArray) {
  const wordSize = inputArray.map(element => {
    return element.length;
  });
  const odds = wordSize.filter(x => {
    return (x % 2 !== 0);
  });
  return odds;
};

console.log(oddLengths(arr)); // => [1, 5, 3]

/*
LaunchSchool solution is elegant, 
it strings methods together properly

function odLengths(arr) {

  //the following single line maps the length method to each element
  //but will only write the length value to the filterNum array if it's odd 
  let filterNum = arr
    .map(letters => {return letters.length;})
    .filter(number => {return number % 2 === 1;});

  return filterNum;

*/