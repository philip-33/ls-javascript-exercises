// What does the following function do?

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

// This function takes a string
// splits it at the spaces into an array of 'words'
// reverses the order of the 'words'
// then breaks because value is not defined? or generates an array of lengths

console.log(doSomething('There is no reason to do anything'));

// after seeing the result (array of lengths), I remembered that a string can be
// manipulated like an object with a key value pair
// In this case, the key is a numerical index and the value is the letter
// This is what allows .map((value) => value.length); to work