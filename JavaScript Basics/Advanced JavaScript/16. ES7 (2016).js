// EcmaScript7 2016

// includes method

'Hello'.includes('o'); // looks if the string has o in it
// return value = true

const pets = ['cat', 'dog', 'bat'];

pets.includes('dog');
// return value = true

pets.includes('bird');
// return value = false

//------------------------------------------//

// exponential operator

// square
const square = (x) => x**2

square(2)
// return value = 4

const square = (x) => x**2

square(5)
// return value = 25

// cube
const cube = (y) => y**3

cube(3)
// return value = 27

cube(4)
// return value = 64

//------------------------------------------//

// EXERCISE

// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.includes('John');
// return value = false


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.filter(name => name.includes('John'));
// return value = ['Johnathan']


// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const power100 = (num) => num**100

power100(2)
// return value = 1.2676506002282294e+30


// #4) Using your function from #3, put in the parameter 10000. What is the result?
// Research for yourself why you get this result
const power100 = (num) => num**100

power100(10000)
// return value = Infinity