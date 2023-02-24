// I edited package.json to start nodemon with file server.js;
// Command for that is 'npm start';

// BUILDING A SERVER

// grabing the http module (part of node):
const http = require('http');

// creating function createServer() that just returns me console.log and h1 for now;
// next i want to have somesort of response, i do request, response;
// every time i want to connect i have to pass two params: request and response;
const server = http.createServer((request, response) => {

    console.log('I hear you!');
    // in terminal (after npm start) i do: node server.js;
    // then i can go to localhost:3000 in my browser after which my terminal will say: I hear you!;

    response.setHeader('Content-Type', 'text/html');
    response.end('<h1>Hello</h1>');
    // we are giving the type of content, that will be HTML;

    // i give a port 3000
    server.listen(3000);

}



const http = require('http');

const server = http.createServer((request, response) => {

    // i can also listen for requests by adding console.log() inside server const;
    // console.log('headers', request.headers);
    // console.log('method', request.method);
    // console.log('url', request.url);

    const user = {
        name: 'Andri',
        hobby: 'Coding'
    }

    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(user));
    // i can also specify that the content type is application/json;
    // making JS object into JSON format;
    // and now with json we can send JS objects;
})

// i give a port 3000
server.listen(3000);