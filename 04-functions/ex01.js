/* What does this code log to the console? Does executing the foo function affect the output? Why or why not? */

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

// bar is evaluated to 1 because the function only ever 
// sets a scoped version of bar = 2 that never influences the global