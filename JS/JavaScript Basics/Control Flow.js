// Control Flow (Conditional execution)

// if statement
var name = "Andri";

if (name === "Andri") {
    alert("hi Andri!");
}
// alert shows = hi Andri!

// else statement
var name = "Andrea"; // we change the name

if (name === "Andri") {
    alert("hi Andri!");
} else {
    alert("hmm, I don't know you!");
}
// alert shows = hmm, I don't know you!

//------------------------------------------//

// Multiple condition (else if statement)

var name = "Andrea";

if (name === "Andri") {
    alert("hi Andri!");
} else if (name === "Andrea") {
    alert("hi Andrea!");
} else {
    alert("hmm, I don't know you!"); 
}
// alert shows if you type Andri = hi Andri!
// alert shows if you type Andrea = hi Andrea!
// alert shows = hmm, I don't know you!

//------------------------------------------//

// Logical operators

// && means AND
// || means OR
// ! means NOT



// || operator (choose one or another)
var name = "Andri";

if (name === "Andri" || name === "Ann") {
    alert("hi Andri or Ann!");
// alert shows if you type Andri or Ann = hi Andri or Ann!



// && operator (basically to check something)
var firstName = "Andri";
var lastName = "Suvorov";

if (firstName === "Andri" && lastName === "Suvorov") {
    alert("hi Andri Suvorov!");
// alert shows = hi Andri Suvorov!



// ! operator (return opposite) (false = true) (good for switching things)
var name = "Andrea";

if (!(name === "Andri")) {
    alert("hi Andri!");
// alert shows = hi Andri!
// although name was Andrea, the alert showed Andri, because ! means opposite

// switch example
!true
// value = false
!false
// value = true

//------------------------------------------//

// EXERCISE

// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:

//using prompt() and alert(), ask a user for their age.

// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"

var age = prompt("What is your age?");

if (Number(age) < 18) {
    alert("Sorry, you are too young to drive this car. Powering off");
} else if (Number(age) === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
} else if (Number(age) > 18) {
    alert("Powering On. Enjoy the ride!");
} else { // this line is optional, you can leave it after last "else if"
    alert("Please type in your age");
}