// Given a list of numbers, 
// write some code to 
// find and display the largest numeric value in the list.

let a = [1, 6, 3, 2];
let b = [-1, -6, -3, -2];
let c = [2, 2];

function topNum(inputArray) {
  console.log(Math.max(...inputArray));
};

topNum(a);
topNum(b);
topNum(c);

// found this ... notation on stack overflow
// It's called "spread syntax"
// it will explode any array or string where
// multiple (or no) arguments are expected.
