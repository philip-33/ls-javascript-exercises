/* Write a function that logs whether a number is between 0 and 50 (inclusive), between 51 and 100 (inclusive), greater than 100, or less than 0. */

function sorter(num) {
  if (num < 0) {
    console.log('less than 0');
  } else if (num >= 0 && num <= 50){
    console.log ('0-50 inclusive');
  } else if (num >= 51 && num <= 100){
    console.log ('51-100 inclusive');
  } else {
    console.log ('above 100');
  }
}

sorter(-5);
sorter(0);
sorter(48);
sorter(55);
sorter(100);
sorter(101);