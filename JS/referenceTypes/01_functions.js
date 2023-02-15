// TODO: FUNCTIONS

/*
   * JS function is a block of code designed to perform a particular task,
   * it is first defined, then executed when it is called.
   * Functions are in fact considered objects.
   * Example with "alert" popup (although it is a window method, we still execute it like a normal function):
   *    alert = is a function, but it does nothing yet;
   *    alert() = is a function that has been called, popup will appear;
   *    alert("Hi!") = is a function that has been called with argument, popup will appear with text "Hi!".
*/
// * function declaration
function sayHello() {
    console.log('Hello');
}
// * function call
sayHello();
// ? return value: "Hello"

/*
   * Function expression (assigning function to a variable).
   * Assigned function has no name, thus it is called "anonymous function".
   * Anonymous function is then called through reference varibale.
*/
const sayBye = function() {
    console.log('Bye');
}
sayBye();
// ? return value: "Bye"



// TODO: FUNCTION ARGUMENTS
 
/*
   * Function argument is very much like a placeholder.
   * Argument is usually what we call our function with,
   * that argument will then be delivered to the function that was called.
   * There is also a function parameter, which is a named variable passed into a function.
   * It is easy to get confused about "argument" and "parameter" differences,
   * mainly one is set to "export" and other is set to "import".
*/
function greet(name) { // * <-- this is the function with a parameter
    console.log('Hi', name);
}
greet('Andri'); // * <-- this is the function call with argument
// ? return value: "Hi Andri"

// * in short...
greet(a, b); // * <-- (a, b) are parameters

greet('A', 'B'); // * <-- ("A", "B") are arguments



// * calling a function through another function with "dice game" example
// * 🎲 dice will have 1 - 6 dots
function rollDice() {
    /*
       * "Math.random() * 6" will give a random number ranging from 1 - 5 (with decimal).
       * We add +1 to make random number go up to 6.
       * Finally using "Math.floor()" to remove decimal.
    */
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`🎲 rolled: ${roll}`);
    // ? example return value: "🎲 rolled: 4"
}
rollDice();

// * calling "throwDice" will call "rollDice" number of times
function throwDice(numRolls) {
    for (let i = 0; i < numRolls; i++) { rollDice(); };
}
throwDice(6);
/*
    ? example return value:
    ?    "🎲 rolled: 6"
    ?    "🎲 rolled: 6"
    ?    "🎲 rolled: 3"
    ?    "🎲 rolled: 1"
    ?    "🎲 rolled: 4"
    ?    "🎲 rolled: 5"
*/



// * Arguments in action

// * one argument
function square(num) {
    console.log(num * num);
}
square(4);
// ? return value: 16

// * multiple arguments, order doesn't matter when passing values
function sum(x, y) {
    console.log(x + y);
}
sum(4, 5);
// ? return value: 9

// * multiple arguments, order does matter when passing values
function divide(x, y) {
    console.log(x / y);
}
divide(1, 4);
// ? return value: 0.25



// TODO: RETURN STATEMENT

/*
   * "return" will stop all the code execution after it was declared.
   * Value can either be "true" of "false".
*/
function isPurple(color) {
    if (color.toLowerCase() === 'purple') {
        return true;
    }
    /*
       * We don't always need "else" statement, with first condition
       * being "false", code still moves on and tackles "return", at which point
       * code execution will be stopped.
    */
    return false;
}

// * even shorter way, works mostly for simple yes/no situations
function isGreen(color) {
    return color.toLowerCase() === 'green';
}

// * run through an array of colors and return "true" if match was found
function containsPurple(array) {
    for (let color of array) {

        if (color === 'purple' || color === 'green') {
            return true;
        }
    }
    return false;
}

// * run the first condition if numbers are not greater than 10, else return multiplied value
function multiply(a, b) {

    if (a > 10 || b > 10) {
        return 'keep numbers under 10';
    }
    return a * b;
}
multiply(5, 10);
// ? return value: 50
multiply(5, 4);
// ? return value: 20
multiply(5, 40);
// ? return value: "keep numbers under 10"



// TODO: DRY METHOD (D:DON'T R:REPEAT Y:YOURSELF)

// * duplicating code example
function abc() {
    console.log('a');
    console.log('b');
    console.log('c');
}
abc();
/*
    ? return value:
    ?    "a"
    ?    "b"
    ?    "c"
*/

function def() {
    console.log('d');
    console.log('e');
    console.log('f');
}
def();
/*
    ? return value:
    ?    "d"
    ?    "e"
    ?    "f"
*/

// * DRY code ecample
function alphabet(letter) {
    console.log(letter);
}
alphabet('a');
alphabet('b');
alphabet('c');
alphabet('d');
alphabet('e');
alphabet('f');
/*
    ? return value:
    ?    "a"
    ?    "b"
    ?    "c"
    ?    "d"
    ?    "e"
    ?    "f"
*/



// TODO: ASSIGNING FUNCTIONS TO VARIABLES

const combine = function(a, b) {
    return a + b;
}
combine('abc', 'def');
// ? return value: "abcdef"



// TODO: USEFUL IMPLEMENTATIONS

// * check if password has all conditions met before validation
function isValidPassword(username, password) {
    const tooShort = password.lenght < 8;
    const hasSpace = password.indexOf(' ') !== -1;
    const tooSimilar = password.indexOf(username) !== -1;

    if (tooShort || hasSpace || tooSimilar) return false;
    return true;
}
isValidPassword('user', 'securepassword');
// ? return value: true



// * return an average number from array of numbers
function avg(array) {
    let total = 0;

    array.forEach(num => { total += num; });

    return total / array.length;
}
avg([0, 25]);
// ? return value: 12.5



// * pick a random card from the deck of cards
function pick(array) {
    /*
       * "Math.random() * array.length" will give a random number ranging from 1 - items in array (with decimal).
       * We use "Math.floor()" to remove decimal and get a whole number.
    */
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}

function getCard() {
    const values = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ];
    const suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];

    return { value: pick(values), suit: pick(suits) };
}
getCard();
/*
    ? example return value:
    ?    {value: "Q", suit: "diamonds"}
    ?    {value: "2", suit: "clubs"}
    ?    {value: "9", suit: "clubs"}
    ?    {value: "9", suit: "spades"}
    ?    {value: "3", suit: "hearts"}
    ?    {value: "5", suit: "spades"}
*/



// * check if you are allowed to sit behind a wheel
function checkDriverAge(age) {
    if (age < 18) {
        alert('Sorry, you are too young to drive this car. Powering off.');
    } else if (age === 18) {
        alert('Congratulations on your first year of driving. Enjoy the ride!');
    } else if (age > 18) {
        alert('Powering On. Enjoy the ride!');
    } else {
        alert('Please type in your age');
    }
}
checkDriverAge(25);