/*
Add a qux property with value 3 to the myObj object we created in the previous exercise. Now, examine the following code snippets:
*/
let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj['qux'] = 3;

//This snip will only return qux
//Object.keys() only returns values for the key itself, not its prototypes
Object.keys(myObj).forEach(function(key) {
  console.log(key);
});

//This snip will show all keys since this way of iteration includes the prototype
for (key in myObj) {
  console.log(key);
}