//Final length values?
let array1 = [1, 2, undefined, 4];
//4
//correct

let array2 = [1];
array2.length = 5;
//5
//correct

let array3 = [];
array3[-1] = [1];
//1
//incorrect, length must be positive
//this is interpreted like a key:value pair
//['-1':1]

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;
//3
//correct, the extra elements are removed

let array5 = [];
array5[100] = 3;
//100
//incorrect, the highest index with a value is 100
//so the length is 101

console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);
console.log(array5);