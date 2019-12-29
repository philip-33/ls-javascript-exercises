// Create an array from the keys of object obj below, with all values converted to uppercase. Your implementation must not mutate obj. The order of the array does not matter.

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeys = Object.keys(obj);
for (i = 0; i < objKeys.length; i++) {
  objKeys[i] = objKeys[i].toUpperCase();
};

console.log(objKeys);

/*
My solution is functional, but I had a feeling there was a more efficient way to do it on a single line.

Originally I thought to add '.toUpperCase' to Object.keys(), but that is a string method. 

The launch school solution uses .map() to apply .toUpperCase() to all the keys as they are pulled from the object.

let objValues = Object.keys(obj).map((key) => key.toUpperCase());
*/