// Loops

var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

// for loop
// variable i = 0, basic thing, index = 0
// i, which is 0, if 0 is less than todos length, which is 5, then...
// run i++, which means i + 1 (adds up 1)

// the loop goes on until +1 hits the number 4, 5 never shows up because it will equal...
// todos.lenght, which was 5, after value 4 the loop stops
for (var i=0; i < todos.length; i++) {
    todos[i] = todos[i] + "!"; // i selects all the values in the array
    // and we add "!" at the end of every value 
    console.log(todos[i]);
}

// return value =

// "clean room!",
// "brush teeth!",
// "exercise!",
// "study javascript!",
// "eat healthy!"

//------------------------------------------//

// pop method
for (var i=0; i < todos.length; i++) {
    todos.pop(); // if you change the amount of values in array, it will also...
    // be affected by todos.length, and when pop method executes, you will only...
    // have 2 values left
    // after we pop last item our length changed to 4 and our i to 1 and goes on till...
    // loop finishes, will have 2 values left
}

// to fix pop method
var todosLength = todos.length; // assigns length to todosLength and runs loop till...
// all tasks are popped

// pop method
for (var i=0; i < todosLength; i++) {
    todos.pop(); // 
}

todos

// return value = []
// empty array, all tasks done

//------------------------------------------//

// while loop

var counterOne = 0;
while (counterOne < 10) {
    console.log(counterOne);
    counterOne++ // adds up +1, till reaches 9
}

// while loop in reverse

// reverse example
var counterOne = 10;
while (counterOne > 0) {
    console.log(counterOne);
    counterOne-- // subtracts -1, till reaches 1
}

//------------------------------------------//

// do while loop (check the condition before running)
// do while = "do the stuff first and then do counterTwo"

var counterTwo = 10;
do {
    console.log(counterTwo);
    counterTwo++;
} while (counterTwo > 0); // runs from 10 to 1

//------------------------------------------//

// forEach loop

// takes the array of todos list and asks for an argument
// function is taking an arguments which are all the values in array
todos.forEach(function(i) {
    console.log(i);
})

// we could use todo as an argument also and the results are the same
todos.forEach(function(todo, i) { // adding i shows index value like 0
    console.log(todo, i);
})

// also we can make it more simplified for us
// let's have a function part separated, which will make it easier to use later
function logTodos(todo, i) {
    console.log(todo, i);
}

todos.forEach(logTodos);

// now we can use this logTodos function with different lists
var todosImportant = [
    "clean room!",
    "brush teeth!",
    "exercise!",
    "study javascript!",
    "eat healthy!"
];

// just mention logTodos in forEach loop
todosImportant.forEach(logTodos);



// for loop example for comparing
var todosLength = todos.length;
for (var i=0; i < todos.length; i++) {
    todos[i], i;
}