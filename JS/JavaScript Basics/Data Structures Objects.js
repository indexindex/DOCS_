// JavaScript Data Structures Objects (collections of properties)

// objects are good because we can have properties and values
var user = {
    name: "Andri",
    age: 22,
    hobby: "A.Illustrator",
    isMarried: false
};

// to grab specific element
user.name
// return value = "Andri"
user.age
// return value = 22
user.hobby
// return value = "A.illustrator"
user.isMarried
// return value = "false"

// add property to object
user.favouriteFood = "Hong Kong Chicken";

// change property inside object
user.isMarried = true;

//------------------------------------------//

// Method is a function inside an object!

// object is good for a character build
// arrays are good for item lists etc.

// use array in object
var user = {
    name: "Andri",
    age: 22,
    hobby: "A.Illustrator",
    isMarried: false,
    spells: ["Swallow", "Thunderbolt", "White Honey"],
    jutsu: function() { // adding actions to objects, it's called methods
        console.log("Katon: koukya-ki no jutsu!");
    }
};

// get "Thunderbolt" from spells property
user.spells[1];

// calls the function
user.jutsu(); // this syntax is called method

//------------------------------------------//

// use object in array
var list = [
    {
       username: "Andri",
       password: "Genjutsu-da" 
    },
    {
        username: "Marti",
        password: "Amaterasu"
    }
];

// get into first object and get password value
list[0].password;

//------------------------------------------//

// Null type

// you can make an empty object and empty list, just like you can make empty variable

// empty object
var emptyObj = {};
// return value = {}

// empty list
var emptyList = [];
// return value = []

var nullObj = null; // this means that it return null, that there is nothing in the object
// return value = null
// also you can't assign values to null object

//------------------------------------------//

// EXERCISE

// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

var object = {
    username: "Andri",
    password: "Owarida"
};

// 2. Create an array which contains the object you have made above and name the array "database".

var database = [
    {
        username: "Andri",
        password: "Owarida"
    }
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

var newsfeed = [
    {
        username: "Andri",
        timeline: "Owarida"
    },
    {
        username: "Marti",
        timeline: "Sasuke-kun"
    },
    {
        username: "Agatha",
        timeline: "Love is so black"
    }
];