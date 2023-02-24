// Math object

Math.PI
// 3.14

// --- --- --->

// rounding a number
Math.round(4.9)
// 5
Math.round(4.3)
// 4

// --- --- --->

// absolute value
Math.abs(-456)
// 456

// --- --- --->

// raises 2 to the 5th power (2 * 2 * 2 * 2 * 2)
Math.pow(2,5)
// 32

// --- --- --->

// removes decimal
Math.floor(3.9999)
// 3

// --- --- --->

// generate random numbers
Math.random()

// --- --- --->

// getting random number from 1 - 10
const step1 = Math.random();
// gives me random number 0.123456789
// number ranges from 0 - 0.999999999

const step2 = step1 * 10
// 0.123456789 * 10
// number ranges from 0 - 9.999999999

const step3 = Math.floor(step2);
// 9
// gives me random whole number
// number ranges from 0 - 9

const step4 = step3 + 1;
// adding up + 1
// number ranges from 1 - 10

// --- --- --->

// shorthand for counting from 1 - 10
Math.floor(Math.random() * 10) + 1;