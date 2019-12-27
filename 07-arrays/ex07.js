// write some code that checks whether the number 3 appears inside these arrays

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

const three = (element) => element === 3;
// a constant
// is assigned an expression
// that uses an arrow function to define a comparison
// constant that actually represents a comparison
// can be used as an expression where necessary

// in this case, it is passed to an array method
// the method .some() returns true if any element matches

console.log(numbers1.some(three));
console.log(numbers2.some(three));
console.log(numbers3.some(three));