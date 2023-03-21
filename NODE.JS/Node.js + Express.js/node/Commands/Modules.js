// Module import export example (Common way)

// exporting file: script2.js
// importing and exporting are yet set to common JS language,
// that is require() and module.exports;

const largeNumber = 356;

module.exports = {
    largeNumber: largeNumber
};
// shows what object i want to export;



// importing file: script2.js
// also need to specify file path:
const newNumber = require('./script2.js');

// to now have access to largeNumber from script2.js i do:
// (i target the import const name and then the object name)
const a = newNumber.largeNumber;
const b = 5;

console.log(a + b);
// i get 361 in node console



// Theres 3 kinds of modules that i can have in Node.js;

// 1. one of the modules is import export;
// let's assume this file is script2.js
const largeNumber = 356;

module.exports = {
    largeNumber: largeNumber
};

// other js file that wants to import largeNumber from script2.js
const newNumber = require('./script2.js');



// 2. next on is something called: built in modules;
// these are pre-installed modules of node (for example 'fs' that reads file system):
const newNumber = require('fs');

console.log(newNumber);
// i will print out file system in the terminal;
// i can for instance use readFile method to read the text file and then do wahtever i want with it;
const newNumber = require('fs').readFile;

console.log(newNumber);



// next good example is to use http module, that allows me build a server;
const newNumber = require('http');

console.log(newNumber);



// 3. npm package module;
/* i make 'npm init -y' (simply to say yes to all questions)
to first have the package.json file and then do 'npm install nodemon --save-dev' */

// --save-dev means that we include this dependency only for development, after that we don't include it to our project;

// doing some changes in package.json file (setting script to start nodemon) i set a new command: npm start that will start the nodemon;
// and nodemon is good for watching out for changes i made to file;