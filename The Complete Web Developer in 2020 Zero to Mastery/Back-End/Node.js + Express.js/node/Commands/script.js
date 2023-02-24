// Creating a script file that i can run in Node:

const a = 4;
const b = 5;

console.log(a + b);

// now to run it through Node.js i do a command in terminal:
// 'node script.js' and i get 9;

// when node runs through the js file, after the last function execution, it will do
// process.exit() automatically and exits the file;



// i can also give setTimeout() and node will execute exactly after the given time has passed;
const a = 4;
const b = 5;

setTimeout(() => {
    console.log(a + b);
}, 3000)

// after 3 seconds i get 9 and process exits back to the terminal;



// you can also run different global objects like:
const a = 4;
const b = 5;

console.log(__dirname);
// and it gives me my directory path