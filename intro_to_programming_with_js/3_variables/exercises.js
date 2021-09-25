// 1. Write a program named greeter.js that greets 'Victor' three times. Your program should use a variable and not hard code the string value 'Victor' in each greeting. Here's an example run of the program:

// $ node greeter.js
// Good Morning, Victor.
// Good Afternoon, Victor.
// Good Evening, Victor.

let name = 'Victor';
console.log(`Good Morning, ${name}.`);
console.log(`Good Afternoon, ${name}.`);
console.log(`Good Evening, ${name}`);


// 2. Write a program named age.js that includes someone's age and then calculates and reports the future age in 10, 20, 30 and 40 years. Below is the output for someone 20 years old.

// You are 20 years old.
// In 10 years, you will be 30 years old.
// In 20 years, you will be 40 years old.
// In 30 years, you will be 50 years old.
// In 40 years, you will be 60 years old.

let age = 35;
console.log(`In 10 years, you will be ${age + 10} years old.`);
console.log(`In 20 years, you will be ${age + 20} years old.`);
console.log(`In 30 years, you will be ${age + 30} years old.`);
console.log(`In 40 years, you will be ${age + 40} years old.`);


// 3. What happens when you run the following program? Why do we get that result?

{
  let foo = 'bar';
}

// console.log(foo);

// The `let` statement on `line 2` declares a variable `foo` within block scope and assigned a String with value `'bar'`. The `console.log`` method invocation on `line 5`` is outside of the block scope defined by the `{ }` on `lines 1`` and `3`. Therefore, outside of the block scope the `foo` variable is not accessible. `line 5` will throw an error: ReferenceError: foo is not defined`


// 4. What happens when you run the following code? Why?

const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

// NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

// The following lines are output:
// Good Morning, Victor
// Good Afternoon, Victor
// Good Evening, Victor
// TypeError: Assignment to constant


// 5. Take a look at this code snippet:

let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

// What does this program log to the console? Why?

// The `let` statement on `line 1` declares a variable `foo` and initializes it to the String with value `'bar'`.
// The `{ }` on `lines 2 and 4` define a block scope. On `line 2`, a `let` statement declares a block scope variable `foo` and initializes it to a String with value `'qux'`.
// On `line 6`, the `log` method is invoked on `console` with the variable `foo` passed in as an argument. This is the outer scope variable declared on `line 1`, because the inner scope variable with the same name is not accessible outside of the block. Therefore, `console.log` outputs `'bar'`.

// `line 2` starts a block, which creates a new scope for `let` variables. The `line 1` `foo` variable is still visible inside the block, but `line 3` declares a new variable `foo` that shadows/hides the variable declared on `line 1`.


// 6. Will this program produce an error when run? Why or why not?

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// This will not throw an error becuase `const` is block scoped. A block is created on `line 2` by the `{`. The constant `FOO` can be declared in the block scope to shadow the constant declared on `line 1` with the same name.
// When `console.log(FOO)` is invoked on `line 6`, only the variable declared on `line 1` is visible. `'bar'` will be output.
