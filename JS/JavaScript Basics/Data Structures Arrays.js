// JavaScript Data Structures Arrays (good for listing items)

// arrays have indexes that hold values
var list = ["tiger", "cat", "bear", "bird"];
list[1]; // accesses the cat string

// in computer science number count starts from 0

0 1 2 3 4 5 6 7 8 9 10

//------------------------------------------//

var numbers = [1, 2, 3, 4];

//------------------------------------------//

var booleans = [true, false, true];

//------------------------------------------//

var functionList = [function apple() {
    console.log("apple");
}];

//------------------------------------------//

// not advised
var mixedList = ["apples", 3, undefined, true, function apple() {
    console.log("apples");
}];

//------------------------------------------//

// array in an array
var list = [["tiger", "cat", "bear", "bird"]];

console.log(list); // get's an array in an array
// return value = [Array(4)]

console.log(list[0][2]); // in first array we want to access "bear"
// return value = bear

//------------------------------------------//

// methods
var list = ["tiger", "cat", "bear", "bird"];

list.shift(); // shifts array to remove "tiger" and to shift all to the left
// return value = "tiger"

list.pop(); // 	Removes the last element of an array, and returns that element
// return value = "bird"

list.push("elephant"); // needs to have an argument
// return value = 3
// adds "elephant" to the list (last item in the list)

list
// shows this now = (3) ["cat", "bear", "elephant"]

list.concat(["bee", "deer"]); // we can add another array
// we still need to assign values to the first array

list.sort(); // sorts everything in the array

//------------------------------------------//

// add new arrays with values to original array
var myList = ["tiger", "cat", "bear", "bird"];

var myNewList = myList.concat(["monkey"]); 
// we create new array with value "monkey" and assigning it to myNewList variable

myList
// returns value = ["tiger", "cat", "bear", "bird"];

myNewList
// returns value = ["tiger", "cat", "bear", "bird", "monkey"];

//------------------------------------------//

// EXERCISE

// using this array,
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove the Banana from the array.

var array = ["Banana", "Apples", "Oranges", "Blueberries"];

array.shift(); //  Removes the first element of an array, and returns that element

array

// 2. Sort the array in order.

var array = ["Banana", "Apples", "Oranges", "Blueberries"];

array.sort(); // Sorts the elements of an array

array

// 3. Put "Kiwi" at the end of the array.

var array = ["Banana", "Apples", "Oranges", "Blueberries"];

array.push("Kiwi"); // Adds new elements to the end of an array, and returns the new length

array

// 4. Remove "Apples" from the array.

var array = ["Banana", "Apples", "Oranges", "Blueberries"];

array.splice(1, 1); // first number is an index of an element, second number is a remove_count

array

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'b', 'c'] becomes ['c', 'b', 'a'])

// you should have at the end:
// ["Blueberries", "Oranges", "Apples" "Banana"]

var array = ["Banana", "Apples", "Oranges", "Blueberries"];

array.reverse(); // Sorts the elements of an array in reverse order

array



// using this array,
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

array2[1][1][0];

// cheat sheet:

array2[0]; // returns value = "Banana"

array2[1][0]; // returns value = "Apples"

array2[1][2]; // returns value = "Blueberries"

array2[1][1]; // returns value = ["Oranges"]

array2[1][1][0]; // returns value = "Oranges"