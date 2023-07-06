// TODO: VARIABLES

/*
   * Variable is a named reference to a value, that can be later accessed through that name.
   * In JS we can declare a variable in 3 ways: let, const, var.
*/

// * block-scoped local variable
// ! value can be reassigned
let var1;

// * block-scoped constant global or local variable
// ! value cannot be reassigned or be undefined
const var2 = null;

// * function-scoped or global-scoped variable
// ! value can be reassigned
// ! "var" keyword declaration is not recommended nowadays with presence of "let" and "const"
// ! "var" is considered as legacy
var var3;



// TODO: VARIABLE ASSIGNMENT

// * simple declaration of a variable, which needs to start with a letter but can end with a number
let age;

// * assigning a value to a variable
age = 24;

/*
   * Once a value has been assigned to variable, we have a set of options to do,
   * for example we can perform math operations if we are targeting numeric values.
   * Although, initial variable will not be affected by this calculation, it will
   * stay the same until we redeclare it with a new value.
   * It is only the returned value that changed after calculation.
*/

age + 1;
// ? return value: 25

age;
// ? return value: 24

// * to update given variable, it needs to be reassigned with a new value
age = age + 1;

age;
// ? return value: 25



// * in short...

// * declare
let score = 0;

// * update
score = score + 10;
// ? return value: 10

// * update with a shorthand
score += 1;
// ? return value: 11

// * to update value by 1 we can also use incrementation
score++;
score;
// ? return value: 12

// * variable value can be changed with another variable
let bonusScore = 3;

score *= bonusScore;
score;
// ? return value: 36
// ? 12 * 3 = 36