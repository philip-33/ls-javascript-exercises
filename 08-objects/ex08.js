/*
What does the following program log to the console? Why?
*/

let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);

// The output is hi hello, but I assumed it would be hello hello
// function parameters work differently for objects and values
// argument1 is a pointer to the actual foo object
// argument2 is a copy of the contents of qux