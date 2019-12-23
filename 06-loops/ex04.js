/*
Does the following code produce an error? Why or why not? What output does this code send to the console?
*/

for (let i = 0; i < 5;) {
  console.log(i += 1);
}

// No error
// Syntax is correct, but the loop incrementer was omitted
/* this will send
1
2
3
4
5
to the console
*/