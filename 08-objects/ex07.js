/*
Create a function that creates and returns a copy of an object. The function takes two arguments: the object to copy and an array of the keys that you want to copy. You can omit the array of keys, in which case you should copy all the keys of the object.

Here are some examples for your reference:
*/

/*
let objToCopy = {
  foo: 1,
  bar: 2,
};

let newObj = copyObj(objToCopy);
console.log(newObj.foo);    // => 1
console.log(newObj.bar);    // => 2

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2.foo);   // => 1
console.log(newObj2.bar);   // => undefined
*/

let objToCopy = {
  foo: 1,
  bar: 2,
};

function copyObj (inputObject, keyArray) {
  //instance the final copied object
  let outputObject = {};

  //check if keyArray was defined. If not, generate it
  keyArray = keyArray || Object.keys(inputObject);
  
  //generate a copy of the object based on the key list
  keyArray.forEach(key => {
    outputObject[key] = inputObject[key];
  });

  return outputObject;
};

console.log(copyObj(objToCopy));
console.log(copyObj(objToCopy, ['foo']));
console.log(copyObj(objToCopy, ['bar']));
console.log(copyObj(objToCopy, ['bar','foo']));