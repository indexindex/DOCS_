// How JavaScript Works

// let's start off with program

// WHAT IS A PROGRAM?

// - allocate memory (variables, files on our pc)
// - parse and execute (read and run commands)

// Browsers have JS engines, Chrome has V8 engine, it...
// consists of two parts: Memory heap and Call Stack
// Memory heap remembers and stores data
// Call stack (run and execute)

// Locating memory heap
const a = 1; // allocated a memory
const b = 10; // allocated a memory
const c = 100; // allocated a memory

// Memory Leak
// limited amount of memory

// Call Stack - reads the line and adds to call stack and then it runs it
console.log('1');
console.log('2');
console.log('3');
// return value =
// 1
// 2
// 3

const one = () => { // gets run and goes to const two
    const two = () => {
        console.log('4'); // const two returns console.log
    }
    two();
}

// call stack execution order
console.log('4') // comes last but leaves first
two()
one()

// CREATING Stack Overflow
// Recursion - a function is calling itself
function foo() {
    foo() // keeps adding foo() over and over and over, creating overflow
}

foo()

//------------------------------------------//

// JavaScript is single threaded, only one statement is executed at a time

// Asynchronous programming
// creating a timeout
console.log('1');
setTimeout(() => {
    console.log('2');
}, 2000) // first par is the function and the second par is how many seconds we want to wait
console.log('3');
// return value =
// 1
// 3
// 2 - came after 2000ms run out

//------------------------------------------//

// JavaScript Run-Time Environment

console.log('1');
setTimeout(() => {
    console.log('2');
}, 2000)
console.log('3');



setTimeout(() => {
    console.log('2');
}, 2000)
// Call stack

setTimeout(), 2000 // holds setTimeout function for 2s
// Web API

callback() // returns whatever was in setTimeout function
// Callback queue

// checks callbacks and if all is done then returns our callback to call stack
// Event loop