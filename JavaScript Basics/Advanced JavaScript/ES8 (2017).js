// EcmaScript8 2017

// string padding
.padStart()
.padEnd()

'Turtle'.padStart(10);
// return value = "    Turtle"
// has 10 spaces in total, spaces before letter

'Turtle'.padEnd(10);
// return value = "Turtle    "
// has 10 spaces in total, spaces after letter

//------------------------------------------//

// trailing commas in function's parameter lists and calls

// basically what it does is that it...
// makes ending comma valid and it won't give out an error
const fun = (a,b,c,d,) => {
    console.log(a);
}

fun(1,2,3,4,)
//return value = 1

//------------------------------------------//

// new object methods

Object.values

Object.entries

//before we had
Object.keys

let obj = {
    username0: 'Itachi',
    username1: 'Kisame',
    username2: 'Sasuke'
}

// using object like an array
Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
    // now we can loop objects through, just like in array
})
//for each username we have the index that is 0,1,2

// return value =     
    // username0 Itachi
    // username1 Kisame
    // username2 Sasuke



// let's do it the easier way
Object.values(obj).forEach(value => {
    console.log(value);
})

// return value =     
    // Itachi
    // Kisame
    // Sasuke



// you can treat entries method with foreach, map, filter, reduce
// it gives much power in variation
Object.entries(obj).forEach(value => {
    console.log(value);
})

// return value =     
    // (2) ["username0", "Itachi"]
    // (2) ["username1", "Kisame"]
    // (2) ["username2", "Sasuke"]



// real example
Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
    // return Itachi + username0.replace(to empty string)
})

// return value = (3) ["Itachi0", "Kisame1", "Sasuke2"]

//------------------------------------------//

// EXERCISE

// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

turtle = turtle.padStart(8);
rabbit = rabbit.padStart(8);

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);

// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');
// The trim() method removes whitespace from both ends of a string

// return value = 

'     ||<- Start line'
'🐢======='
'       🐇'

// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

Object.entries(obj).map(value => value.join(" ")).join(' ');