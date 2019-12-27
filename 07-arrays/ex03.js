let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

for (let x = 0; x < myArray.length; x++) {
  for (let y = 0; y < myArray[x].length; y++) {
    if (myArray[x][y] % 2 === 0) {
      console.log(myArray[x][y]);
    }
  }
}

/*
Launch school solution shows how to use
forEach to interact with nested arrays

myArray.forEach(function(nestedArray) {
  nestedArray.forEach(function(value) {
    if (value % 2 === 0) {
      console.log(value); // => 6, 4, 2, 4, 16, 0
    }
  });
});
*/