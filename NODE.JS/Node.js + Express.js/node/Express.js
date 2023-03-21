// Express.js is the most popular library for Node.js
// to begin with, i install express through npm ('npm install express')

// to create express server:
const express = require('express');

const app = express();

app.listen(3000);

// Express is good for doing routing;



// to do get method:
const express = require('express');

const app = express();

// get root path
app.get('/', (req, res) => {
    res.send("hello");
})

app.listen(3000);

// express does the conversion for us (decides content-type);



// sending JSON
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    const user = {
        name: 'Andri',
        hobby: 'Coding'
    }
    res.send(user);
})

app.listen(3000);



// navigation in Express
const express = require('express');

const app = express();

// if you go to this route, then do this:
app.get('/', (req, res) => {
    res.send("getting root");
})

// if you go to this route, then do this:
app.get('/profile', (req, res) => {
    res.send("getting profile");
})

// if you go to this route, then do this:
app.post('/profile', (req, res) => {
    const user = {
        name: 'Andri',
        hobby: 'Coding'
    }
    res.send(user);
})

app.listen(3000);



// Middleware
const express = require('express');

const app = express();

/* middleware workflow: it gets a request of website and when request comes 
through, we did console.log(we can do whatever we want with it), after that comes next()
which jumpes to next statements; */
// without next() we won't run any other code blocks, we have to specify next() if we want express to run through our next functions;

// we have 3 parameters:
app.use((req, res, next) => {
    console.log('<h1>Hello</h1>');
    next();
})

app.get('/', (req, res) => {
    res.send('test');
})

app.listen(3000);



// getting body-parser for middleware useage (npm install body-parser);
// body parser will grab whatever information i receive and parse it into something we can use;
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// this way we will be able to get 'x-www-form-urlencoded':
app.use(bodyParser.urlencoded({extended: false}))
// body-parser needs to also know about JSON, in case we create a new user in JSON format:
app.use(bodyParser.json())
// if you go to this route, then do this:
app.get('/', (req, res) => {
    res.send("getting root");
})

// if you go to this route, then do this:
app.get('/profile', (req, res) => {
    res.send("getting profile");
})

// if you go to this route, then do this:
app.post('/profile', (req, res) => {
    const user = {
        name: 'Andri',
        hobby: 'Coding'
    }
    res.send(user);
})

app.listen(3000);



// POSTMAN info:

// so for Form data i usually always use 'x-www-form-urlencoded';
// and for JSON format i use 'raw' with Text option of 'JSON (application/json)';

// making new user through 'Postman' in JSON text format:
{
    "user": "Jenny",
    "hobby": "tennis"
}