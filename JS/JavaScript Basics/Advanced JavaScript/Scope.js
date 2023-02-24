// Scope

function aa() {
    console.log("test");
}

// now, let's run the scope
window.aa()
// returns value = test

//------------------------------------------//

function bb() {
    var a = "hello";
}

window.bb()
//return value = undefined

console.log(a);
//gives an error

//fix it by adding console.log(a) after variable a

function bb() {
    var a = "hello";
    console.log(a);
}

window.bb()
//return value = hello

//------------------------------------------//

//let's declare a variable outside a function
var b = "Can I access this?";

function bb() {
    var a = "hello";
    console.log(b);
}

window.bb()
//return value = Can I access this?

//------------------------------------------//

var b = "Can I access this?";

function bb() {
    b = "hello"; // what if we don't declare a variable
}

console.log(b); // runs the var b but not the function
//return value = Can I access this?

//let's run the function bb()
window.bb()
//return value = undefined

console.log(b);
//return value = hello

//------------------------------------------//

// Root Scope which is (window)

var fun = 5;

function funFunction() {
    // child scope
    var fun = "hello"; // has it's own var inside own function
    console.log(1, fun); // 1 is just for title
}

function funerFunction() {
    // child scope
    var fun = "bye"; // has it's own var inside own function
    console.log(2, fun); // 2 is just for title
}

function funestFunction() {
    // child scope
    fun = "ahhh"; // gets access to root scope, which is var fun = 5
    console.log(3, fun); // 3 is just for title
}

console.log("window", fun); // just runs the variable fun = 5
//return value = window 5

// now, let's run the functions, every time var = fun gets overridden
funFunction(); //return value = hello
funerFunction(); //return value = bye
funestFunction(); //return value = ahhh

// and if now we do console log...
console.log(fun); // it was modified in third function
//return value = ahhh

//------------------------------------------//

// EXERCISE

// For all of these, what is the value of "a" when the function gets called with the alert()
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}
// answer = 3

//#2
var a = 0; // parent scope
function q2() {
    a = 5;
}
// answer = 5

function q22() {
    alert(a); // asks a parent scope for "a" value
}
// answer = 0
// if you ran q2() before q22(), then now it will = 5

//#3
function q3() {
    window.a = "hello";
}

function q32() {
    alert(a); // asks a parent scope for "a" value, if no parent exists, turns to previous child scope
}
// answer = hello

//#4
var a = 1; // parent scope
function q4() {
    var a = "test";
    alert(a);
}
// answer = test

//#5
var a = 2; // parent scope
if (true) {
    var a = 5;
    alert(a); // answer = 5
}
alert(a);
// answer = 5