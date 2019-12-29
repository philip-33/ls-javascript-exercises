let person = {
  name:       'Bob',
  occupation: 'web developer',
  hobbies:    'painting',
};

//access the name

console.log(person.name);
console.log(person[name]); //doesn't work
console.log(person['name']); //works
// all object keys are strings in javascript