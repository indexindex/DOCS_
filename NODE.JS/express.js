// TODO: EXPRESS FRAMEWORK

/*
    * "express" and node for that matter are all
    * about requests and responses, simply because
    * thats how the web mostly works.
    * "express" automatically sets headers for us, no
    * need to define them any more.
*/

const express = require('express');

/*
    * "express" module is a function, which upon calling 
    * adds bunch of methods to my variable "app".
*/
const app = express();

/*
    * "express" way to use http method "get" and
    * target root url.
    * Accepts 2 arguments: url path and callback function.
    * Callback function runs when request hits.
    * Callback has 2 arguments, "request" and "response" objects.
*/
app.get('/', (req, res) => {
    /*
        * We could use ".send()" for simple text response,
        * or use ".json()" and send JS object.
    */
    // res.status(200).send('Hello Maria!');
    res.status(200).json({ text: 'Hello Maria!', from: 'Andri' });
});

/*
    * To start up a server, we use "listen".
    * Accepts 2 arguments: port and callback function.
*/
const port = 3000;

app.listen(port, () => {
    console.log(`server has started on port ${port}`);
})