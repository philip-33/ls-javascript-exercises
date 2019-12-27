//  extract the word 'mem' from the following nested array

let arr = [["test", "hello", "world"], ["example", 6, "mem", null], [4, 8, 12]];

arr.forEach(function(nestedArray) {
  nestedArray.forEach(function(value) {
    if (value === "mem") {
      console.log(value);
      nestedArray.splice(nestedArray.indexOf("mem"), 1);
    }
  })
})

console.log(arr);

/*
previous solution is useful!
myArray.forEach(function(nestedArray) {
  nestedArray.forEach(function(value) {
    if (value % 2 === 0) {
      console.log(value); // => 6, 4, 2, 4, 16, 0
    }
  });
});
*/

// LOL the solution is arr[1][2]. Mine's better.