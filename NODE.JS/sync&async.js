// TODO: SYNCHRONOUS VS. ASYNCHRONOUS CODE (BLOCKING VS. NON-BLOCKING)

/*
    * Node.js can be executed either synchronously or asynchronously.
    * Node.js process is single threaded, meaning it is shared between
    * all users visiting the site.
    * If one user is requesting a large file, all other users will have to 
    * wait for that file to finish reading.
    * To escape such problem, we should always prefer asynchronous execution,
    * where all the work is done in the background.
    * It allows to use non-blocking input/output (I/O) model,
    * which is based on callbacks.
*/

const fs = require('fs');

// * Synchronous (blocking nature)

// * here, code is executed line by line
const fileInput = fs.readFileSync('./filepath/input.txt', 'utf-8');
console.log(fileInput);



// * Asynchronous (non-blocking nature)

// * here, code is executed in the background
fs.readFile('./filepath/input.txt', 'utf-8', (error, data) => {
    console.log(data);
});