function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
   console.log('Empty');
  }
}

isArrayEmpty([]);   // [] is an empty Array

// after confirming [] == 0 is true I believed it would display 'Empty'
// However, this exercise is based on truthiness/falsiness.
// [] is truthy, so this shows 'Not Empty'