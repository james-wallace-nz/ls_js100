// 1.

// Concatenate two or more strings, one with your first name and one with your last, to create a string with your full name as its value. For example, if your name is John Doe, think about how you can put 'John' and 'Doe' together to get 'John Doe'.

console.log('James' + ' ' + 'Wallace');


// 2.

// Use the arithmetic operators to determine the individual digits of a 4-digit number like 4936:

//     thousands place is 4
//     hundreds place is 9
//     tens place is 3
//     ones place is 6

let number = 4936;
let ones = number % 10;                                                    /*   6   */
let tens = (number - ones) / 10  % 10;                                     /*   3   */
let hundreds = ((number - ones) / 10 - tens) / 10 % 10;                    /*   9   */
let thousands = ((((number - ones) / 10 - tens) / 10) - hundreds) / 10;    /*   6   */

console.log(thousands);
console.log(hundreds);
console.log(tens);
console.log(ones);

console.log((number - number % 1000) / 1000);
console.log((number % 1000 - number % 100) / 100);
console.log((number % 100 - number % 10) / 10);
console.log(number % 10);


// 3.

// Identify the data type for each of the following values:

//     'true'
//     false
//     1.5
//     2
//     undefined
//     { foo: 'bar' }

// String
// Boolean
// Number
// Number
// Undefined
// Object


// 4.

// Explain why this code logs '510' instead of 15.

console.log('5' + 10);

// When the `+` operator is called with one operand being a String a String will be retuned no matter what the other operand is. Implicit type coercion will convert the other non-String value to a string then concatenate the two values together. In this case, '5' + '10' evaluates to '510'


// 5.

// Refactor the code from the previous exercise to use explicit coercion, so it logs 15 instead.

console.log(Number('5') + 10);
console.log(parseInt('5') + 10);

// 6.

// Use the template literal syntax along with the expression Number('5') + 10 to log the following sentence to the console:

// The value of 5 + 10 is 15.

console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);


// 7.

// Will an error occur if you try to access an array element with an index that is greater than or equal to the length of the array? For example:

let foo = ['a', 'b', 'c'];
console.log(foo.length);  // => 3
console.log(foo[3]);      // will this result in an error?
// => will return undefined


// 8.

// Create an array named names that contains a list of pet names. For instance:

// Name:
// asta
// butterscotch
// pudding
// neptune
// darwin

// You can use that data or make up your own.

console.log(['asta', 'butterscotch', 'pudding', 'neptune', 'darwin']);


// 9.

// Create an object named pets that contains a list of pet names and the type of animal. For instance:

// Name  Animal
// asta  dog
// butterscotch  cat
// pudding   cat
// neptune   fish
// darwin  lizard

// You can use that data or make up your own.

console.log({
  asta: 'dog',
  butterscotch: 'cat',
  pudding: 'cat',
  neptune: 'fish',
  darwin: 'lizard',
});


// 10.

// What value does the following expression evaluate to?

// 'foo' === 'Foo'

// => false


// 11.

// What value does the following expression evaluate to?

// parseInt('3.1415')

// => 3


// 12.

// What value does the following expression evaluate to?

// '12' < '9'

// => true

// the expression evaluates as true since the operands are strings, not numbers. When you compare two strings, JavaScript performs a character-by-character comparison going from left to right, so on the first comparison, it determines that '1' < '9', so '12' must be less than '9'.'
