// TODO: MATH

/*
   * In JS we have a "Math" object that has properties and methods for mathematical 
   * constants and functions. 
   * "Math" works with "Number" type values.
*/

// * get PI
Math.PI;
// ? return value: 3.141592653589793

// * rounding a number
Math.round(4.9);
// ? return value: 5

Math.round(4.3);
// ? return value: 4

// * absolute value (positive value of a number)
Math.abs(-456);
// ? return value: 456

// * raises 2 to the 5th power (2 * 2 * 2 * 2 * 2)
Math.pow(2, 5);
// ? return value: 32

// * remove decimal
Math.floor(3.9999);
// ? return value: 3

// * generate random number
Math.random();



// TODO: RANDOM NUMBER FROM 1 - 10

// * generates random number that ranges from 0 - 0.999999999
const step1 = Math.random();

// * number ranges from 0 - 9.999999999
const step2 = step1 * 10;

// * number ranges from 0 - 9
const step3 = Math.floor(step2);

// * number ranges from 1 - 10
const step4 = step3 + 1;

// * shorthand for counting from 1 - 10
Math.floor(Math.random() * 10) + 1;