// JavaScript was created by Netscape
// It was called ECMA international
// ECMAScript === JavaScript
// ES6 is basically EcmaScript version 6

// NEW FEATURES

// let + const
// ! const stands for constant
// use const when you want something to stay unchanged

const player = 'bobby'; // const makes value unchangeable
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true; // let is created inside of "if"
}

wizardLevel
// return value = false 
// bacause it's not inside of a function

const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}

obj = 5; // gets an error, because with constant you can't reassign the variable

obj.wizardLevel = true; // changes it to true, because you can still change properties of the object

//------------------------------------------//



// Destructuring

const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

// These two equal the same as the example below them
const player = obj.player;
const experience = obj.experience;

// Simplified syntax
const { player, experience } = obj;

// Same could be done for let
let wizardLevel = obj.wizardLevel;

// Simplified syntax
let { wizardLevel } = obj;

//------------------------------------------//

// declaring object properties

const name = 'john snow';

const obj = {
    [name]: 'hello',
    ['ray' + ' smith']: 'hihi'
    // or [1 + 2]: 'hihi'
}

obj
//return value = {ray smith: "hihi", john snow: "hello"}
//or second example return value = {3: "hihi", john snow: "hello"}

//------------------------------------------//

const a = "Simon";
const b = true;
const c = {};

// if the property and value are the same then use the method below
const obj = {
    a: a,
    b: b,
    c: c
}

// same property and value syntax
const obj = {
    a,
    b,
    c
}

//------------------------------------------//

// Template strings, they look like this ``
// you can use "" or '' anywhere you want inside `` and it will be a string

// let's use these in greetingBest
const name = "Sally";
const age = 34;
const pet = "horse";

// before we did something like this...
const greeting = "Hello " + name + " you\' seem to be doing " + greeting + "!";

// now we can do something like this...
const greetingBest = `Hello ${name}, you seem to be ${age-10}. What a lovely ${pet} you have`;
 

greetingBest
// return value = "Hello Sally, you seem to be 24. What a lovely horse you have"

//------------------------------------------//

// default arguments

function greet(name='', age=30, pet='cat') {
    return `Hello ${name}, you seem to be ${age-10}. What a lovely ${pet} you have`;    
}

greet
// return value = "Hello , you seem to be 20. What a lovely cat you have"

//------------------------------------------//

// Symbol

// Symbols never create a conflict, they are unique values for object properties

let sym1 = Symbol();
let sym2 = Symbol('abc');
let sym3 = Symbol('abc');

//------------------------------------------//

// Arrow Functions

// before we did functions like this...
function add(a, b) {
    return a + b;
}

// now we can do them like this...
const add = (a, b) => a + b;

//------------------------------------------//

// EXERCISE

// change everything below to the newer Javascript!

// let + const
let a = 'test';
const b = true;
const c = 789;
a = 'test2';

// Destructuring
const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

const firstName = person.firstName;
const lastName = person.lastName;
const age = person.age;
const eyeColor = person.eyeColor;

// Simplified syntax
const { firstName, lastName, age, eyeColor } = person;

// Object properties
const a = 'test';
const b = true;
const c = 789;

const okObj = {a, b, c};

// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

// Simplified syntax
const message = `Hello ${firstName}, have I met you before? I think we met in ${city} last summer no???`;

// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}

const isValidAge = (age = 10) => age;

// Symbol
// Create a symbol: "This is my first Symbol"

const sym = Symbol('This is my first symbol');

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

// Simplified syntax
const whereAmI = (username, location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}