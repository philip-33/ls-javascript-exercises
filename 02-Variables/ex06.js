const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// This shouldn't produce an error, and log bar to the console