// Advanced Functions

// old way of writing
function first() {
    var greet = 'Hi';
    function second() {
        alert(greet);
    }
    return second;
}

var newFunc = first();
newFunc();

// new way of writing
const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();
// return value = Hi

//------------------------------------------//

// Closures

// A function ran, the function executed,
// it's never going to execute again,
// but it's going to remember that there are...
// references to those variables, so the child scope...
// always has access to the parent scope.

const first = () => {
    const greet = 'Hi';
    const second = () => {
        const name = "bobby"; // parents can't access child scope
        // but children can access parent scope
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();
// return value = Hi

//------------------------------------------//

// Currying (it's the process of converting a 
// function that takes multiple arguments into a 
// function that takes them one at a time)

// it's more extensible

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3);
// return value = (b) => a * b

// this code means...
const multiply = (a, b) => a * b;
const curriedMultiply = (3) => (b) => 3 * b; // (a) = 3
curriedMultiply(3);
// return value = (b) => a * b

// to actually get a value we need to do this...
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3)(4);
// return value = 12

// anytime you want to multiply a number by 5...
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);
multiplyBy5(5);
// return value = 25

// always multiply by 5
multiplyBy5(10);
// return value = 50

//------------------------------------------//

// Compose

const compose = (f, g) => (a) => f(g(a));
// f is a function
// g is also a function

const sum = (num) => num + 1;

// f and g are sum & a is 5
compose(sum, sum)(5);
// return value = 7;

// step by step
// 1
const compose = (f, g) => (a) => f(sum(5));
// 2
const compose = (f, g) => (a) => f(6);
// 3 (6+1)
const compose = (f, g) => (a) => f(7);

//------------------------------------------//

// Avoiding Side Effects, functional purity

var a = 1;

// side effect (better to avoid)
// (something that the function is doing to affect the outside world)
function b() {
    a = 2;
}

// functional purity, always return something (deterministic)
// always returns the same value from input

//------------------------------------------//

// EXERCISE

//Solve these problems:

//#1 Create a one line function that adds two parameters
const exeRcise = (a, b) => a + b;

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)
// return value = 13

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)
// return value = 31

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)
// return value = 17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)
// return value = 16

//What are the two elements of a pure function?

// 1. Deterministic --> always produces the same results given the same inputs
// 2. No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements.