var name = "Billy";

if (name === "Billy") {
    alert("hi Billy!"); 
} 
  else if (name === "Susy") 
{
    alert("hi Susy!"); 
} else {
    alert("hmm, i don't know you");
} 

//  && = and - used when combining variable names for example
var firstName = "Bob";
var lastName = "Smith";
if (firstName === "Bob" && lastName === "Smith") {
    alert("Hi Bob Smith");
}

//  || = or
if (name === "Billy" || name === "Ann") {   
}

//! = it's not an operator, turns false to true, it's opposite sign
var firstName = "Joan";

if (!(name === "Bob")) {
    alert("Hi Bob");
}
//outcome is still Bob, because it return false as a value



// Unlock car with age
var age = prompt("What is your age?");

if (Number(age) === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!"); 
} 
  else if (Number(age) > 18) 
{
    alert("Powering On. Enjoy the ride!"); 
} else if (Number(age) < 18) {
    alert("Sorry, you are too young to drive this car. Powering off");
}

// Unlock car with age v2
function checkDriverAge() {
   var age = prompt("What is your age?");
    if (Number(age) === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!"); } 
    else if (Number(age) > 18) {
    alert("Powering On. Enjoy the ride!"); 
    } else if (Number(age) < 18) {
    alert("Sorry, you are too young to drive this car. Powering off");
    }
}

var checkDriverAge2 = function() {
    var age = prompt("What is your age?");
    if (Number(age) === 18) {
     alert("Congratulations on your first year of driving. Enjoy the ride!"); } 
     else if (Number(age) > 18) {
     alert("Powering On. Enjoy the ride!"); 
     } else if (Number(age) < 18) {
     alert("Sorry, you are too young to drive this car. Powering off");
     }
 }

 function checkDriverAge(age) {
    if (Number(age) === 18) {
    return("Congratulations on your first year of driving. Enjoy the ride!"); } 
    else if (Number(age) > 18) {
    return("Powering On. Enjoy the ride!"); 
    } else if (Number(age) < 18) {
    return("Sorry, you are too young to drive this car. Powering off");
    }
 }



// Function methods
function sayHello() {
    console.log("Hello");
}
sayHello();//this runs the code

var sayBye = function() {
    console.log("Bye");
}
sayBye();//this runs the code

function sing(song) {
    console.log(song);
}
sing(abcd);
sing(abcd);
sing(abcd);

//Version 1
function multiply(a, b) {
    if (a > 10 || b > 10) {
        return "that's too hard";
    } else {
        return a * b;
    }
}

//Version 2
function multiply(a, b) {

    return a * b; // after return the function exits
}

multiply(5, 10);

//Data structure Arrays
var list = ["tiger", "cat", "bear", "bird"];
console.log(list[1]);

//Methods
list.shift();//removes preferred array value from the start
list.pop();//removes preferred array value from the end
list.push("elephant");//adds argument value to array
list.concat(["bee", "deer"]);//adds this array to your new array
//but in order to add old array values to this array, you have to do the following
var newList = list.concat(["monkey"]);

index //is the number order, 0-tiger, 1-cat etc. Index of a number

list.sort(); //sorts

//Array examples
var numbers = [1,2,3,4];

var booleans = [true, false, true];

var functionList = [function apple() {
    console.log("apple");
}];

//Mixed example - not advised
var mixedList = ["apples", 3, undefined, true, function apple() {
    console.log("apples")
}];

//exercise
var array = ["Banana", "Apples", "Oranges", "Blueberries"];

array.shift("Banana");//remove banana
console.log(array);

array.sort();//sorts
console.log(array);

array.push("Kiwi");//adds Kiwi to the end
console.log(array);

array.shift("Apples");//remove apples
console.log(array);

array.reverse();//sorts
console.log(array);

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

array2[1][1][0];


//Data structure Objects
var user = {
    name: "John",
    age: 34,
    hobby: "Soccer",
    isMarried: false,
    spells: ["abrakadabra", "shazam", "boo"],//array inside an object
    shout: function() {
        console.log("Aaaaah!");
    }
};
//for function we need:
user.shout()
//shout is a method of user, because it is inside an object

//if i want to get spell named shazam, then:
user.spells[1];

//Array list that contains object properties inside
var list = [
    {
        username: "andy",
        password: "secret"
    },
    {
        username: "jess",
        password: "123"
    }
];
//if i want to get password for andy, then:
list[0].password;

//see values
user

user.name
user.age
user.hobby
user.isMarried

//add values, also can overwrite old values
user.haveCar = "true";

//NULL
var emptyObject = null;//nothing in this object, can't set property for null

//exercise

// 2. Create an array which contains the object you have made above and name the arry "database"
var database = [
	{
		username: "andrei",
		password: "supersecret"
	}
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

//TERMINOLOGY
//function declaration
function newFunction() {

};

//function expression
var newFunction = function() { //also can go with names: function name()

};

//expression
1+3;
var a = 2;
return true;
//expression, something that produces a value

//calling or invoking
alert()
newFunction(param1, param2);

//assign a variable
var a = true;

//function vs method
function thisIsAFunction() {

}

var object = {
    thisIsAMethod: function() {

    }
}

//function
thisIsAFunction()
//method
object.thisIsAMethod()

//LOOPS
var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

//for loop
var todosLength = todos.length;
for (var i=0; i < todosLength; i++) {
    todos[i] = todos[i] + "!";//adds ! to the end of every 
    todos.pop();//if i want to remove an item
}

//for each loop
todos.forEach(function(i) {
    console.log(i);
})

//while loop, just loops
//counts from 0 to 9 till it's equal to 10
var counterOne = 0;
while (counterOne < 10) {
    console.log(counterOne);
    counterOne++
}

//do while loop, checkes condition before loop
var counterTwo = 10
do {
    console.log(counterTwo);
    counterTwo--;
} while (counterTwo > 0);
