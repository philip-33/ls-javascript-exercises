function evenOrOdd(num) {
  if (!Number.isInteger(num)) {
    console.log('not an integer');
    return;
  }
  num % 2 === 0 ? console.log('even') : console.log('odd');
}

evenOrOdd(2);
evenOrOdd(3);
evenOrOdd(3.14);
