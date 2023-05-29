// TODO: MIDDLEWARE

/*
    * Middleware is a function that can modify incoming request data.
    * "app.use()" will allow us to use middleware.
    * Accepts 3 arguments: "request" and "response" objects + "next" function.
    * Calling "next()" inside middleware is necessary, else it will just
    * block the whole process and no data will be sent back to the client.
    * Middleware will not run if route function comes before it, becasue 
    * route function ends the middleware process after sending back ".json()" response.
*/

app.use((req, res, next) => {
    console.log('Hello from the middleware');
    next();
})