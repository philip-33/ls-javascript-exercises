let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

// this logs bar to the console, because that's what's in scope