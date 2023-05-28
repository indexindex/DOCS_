// TODO: EXPRESS FRAMEWORK "npm i express"

/*
    * WHAT IS EXPRESS, AND WHY USE IT?
    *    Express is a minimal node.js framework, a higher level of abstraction;
    *    Express contains a very robust set of features: 
    *        complex routing, 
    *        easier handling of requests and responses, 
    *        middleware, 
    *        server-side rendering, etc.;
    *    Express allows for rapid development of node.js applications: we don't have to re-invent the wheel;
    *    Express makes it easier to organize our application into the MVC architecture.

    * Express and node.js for that matter are all about requests and responses, 
    * simply because that's how the web mostly works.
    * Express automatically sets headers for us, no need to define them any more.
*/

// * applying express
const express = require('express');

const app = express();
/*
    * Express module is a function, which upon calling 
    * adds bunch of methods to my variable "app".
*/

/*
    * Express way to use http method "get" and target root url.
    * Accepts 2 arguments: url path and callback function.
    * Callback function runs when request hits.
    * Callback has 2 arguments, "request" and "response" objects.
    * We could use ".send()" for simple text response,
    * or use ".json()" and send JS object.
*/
app.get('/', (req, res) => {
    // res.status(200).send('Hello');
    res.status(200).json({ message: 'Hello' });
})

/*
    * To start up a server, we use "listen".
    * Accepts 2 arguments: port and callback function.
*/
const port = 3000;

app.listen(port, () => {
    console.log(`server has started on port ${port}`);
})