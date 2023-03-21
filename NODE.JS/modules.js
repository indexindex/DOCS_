// TODO: NODE.JS MODULES

/*
    * Each module needs to be included with "require" function.
    * We store the module to a variable, which can be used to call 
    * out different functions of that module.
    * In fact, each file in Node.js is treated as a module.
*/

// ? this code is only an example
const module = require('module');
module.someFunction();



// TODO: FILE SYSTEM MODULE

const fs = require('fs');

/*
    * readFileSync

    * Synchronous way to read file content.
    * Accepts 2 arguments: path to file and character encoding.
*/
const fileInput = fs.readFileSync(`${__dirname}/input.txt`, 'utf-8');
console.log(fileInput);
// ? example return value: "game-changing"



/*
    * readFile

    * Asynchronous way to read file content.
    * Accepts 3 arguments: path to file, character encoding and callback function.
    * Callback function has 2 arguments: "error" and "data", 
    * usually "error" is always the first argument.
    * Callback only runs when the process of reading a file has been finished,
    * after that we get access to "error" and "data".
*/
fs.readFile(`${__dirname}/input.txt`, 'utf-8', (error, data) => {
    console.log(data);
    // ? example return value: "game-changing"
});



/*
    * writeFileSync

    * Synchronous way to write file content.
    * Accepts 2 arguments: path to file and text we want to write.
*/
const textOutput = `Learning Node.js is ${fileInput}.\nCreated on ${Date.now()}`;

fs.writeFileSync(`${__dirname}/output.txt`, textOutput);
console.log(textOutput);
/*
    ? return value:
    ?    "Learning Node.js is game-changing."
    ?    "Created on 1672989528013"
*/



/*
    * writeFile

    * Asynchronous way to write file content.
    * Accepts 4 arguments: path to file, text we want to write, character encoding and callback function.
    * As there is no data to return, we only get callback if there was an error with the process.
*/
fs.writeFile(`${__dirname}/output.txt`, textOutput, 'utf-8', error => {
    console.log('file has been written');
})



/*
    * appendFile

    * Asynchronous way to append content to the file.
    * Accepts 4 arguments: path to file, text we want to add, character encoding and callback function.
*/
fs.appendFile(`${__dirname}/output.txt`, ' added text', 'utf-8', error => {
    console.log('file has been updated');
})



// TODO: HTTP MODULE

const http = require('http');

/*
    * "http" gives access to networking capabilities.
    * We can make a simple server with two steps: "createServer" and "listen".
    * "createServer" has a callback that will run each time it gets hit with incoming request.
    * Callback has 2 arguments, "request" and "response" objects,
    * "response" object is what we can use to send back data to client-side.
    * ".end()" is the simmplest way to send back data, plain text.
*/
const server = http.createServer((req, res) => {
    res.end('Hello from the server-side!');
})

/*
    * "listen" will start the server and listen for incoming requests.
    * Callback has 3 arguments: port, host (default is localhost) and 
    * callback function, that runs when server starts to listen.
    * Server runs on address: 127.0.0.1:8000.
    * Once somebody enter on this address our function will run and print a message.
*/
server.listen(8000, '127.0.0.1', () => {
    console.log('server has started on port 8000');
})



// TODO: URL MODULE

/*
    * This module helps format url parameters into object with values.
    * We can parse full length url into variable pieces.
    * ".parse()" has 2 arguments: server url and "true", which will parse query into an object.
    * Query string could be noted as: "?id=0"
*/
const url = require('url');

url.parse(req.url, true);

// * let's imagine our request url being "/product?id=0"
// * ".parse()" will return something like this:
/*
    ? example return value:
    ?    Url {
    ?      protocol: null,
    ?      slashes: null,
    ?      auth: null,
    ?      host: null,
    ?      port: null,
    ?      hostname: null,
    ?      hash: null,
    ?      search: "?id=0",
    ?      query: [Object: null prototype] { id: "0" },
    ?      pathname: "/product",
    ?      path: "/product?id=0",
    ?      href: "/product?id=0"
    ?    }
*/
/*
    * Now we get access to "query" and "pathname".
    * We can destructure these fields to variables.
*/
const { query, pathname } = url.parse(req.url, true);



// TODO: NODE.JS MODULE EXPORTS/REQUIRE

/*
    * We can store functions as separate modules and
    * make them accessible throughout our project files.
    * We assign anonymous function to "module.exports"
    * and with that we can go to our file and import that
    * module with "require" function.
    * Keep in mind that importing our own modules must come
    * after the core modules.
    * 1. Core modules, 2. 3rd party modules, 3. Our modules.
    * "module.exports" is used when we want to export single value.
*/
module.exports = () => {};

// * when exporting many functions, we can use a following syntax:
exports.myFunction = () => {};

// * there is no need to specify ".js" in the end
require('./modules/myModule');

/*
    * Usually we use "require" and assign it to a
    * variable, with the initial function name.
    * Function can then be called and points to the module
    * we required.
*/
const customBuild = require('./modules/myModule');