/*
Write a function that searches an array of strings for every element that matches the regular expression given by its argument. The function should return all matching elements in an array.
*/

let words = [
  'critical',
  'roll',
  'saving throw',
  'goblin',
  'crossbow',
  'dragon',
  'wizard',
  'Fireball'
];

function logMatch(content, filter) {
  //apply filter (regex) to each item in the array
  content.forEach(value => {
    if (filter.test(value)) {
      //all matches are dumped to the console
      console.log(value);
    }
  });
};

logMatch(words, /al/);
// 'critical'
// 'Fireball'
logMatch(words, /ow/);
// 'saving throw'
// 'crossbow;