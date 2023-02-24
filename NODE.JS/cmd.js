// TODO: WRITING NODE.JS IN TERMINAL

/*
    * To start writing Node.js in the console we just have to type "node".
    * After previous command we now get ">" before each new command, 
    * indicating that we are working with Node.js REPL (read, eval, print, loop).
    * With REPL, we can now write usual JS in the console.
    * Node.js supports all ES features as it is not bound to browser support, it has it's own environment.
    * To exit Node.js environment, write ".exit".
*/
const name = 'andri';
name;
// ? return value: "andri"

7 + 3;
// ? return value: 10



// TODO: UNDERSCORE VARIABLES

// * basically stands for "previous result"
3 * 8;
// ? return value: 24

_ + 6;
// ? return value: 30

_ - 30;
// ? return value: 0



// TODO: RUNNING A FILE

// * example file called "index.js", executed with command "node index.js"
const hello = 'Hello world!';
console.log(hello);
// ? return value: "Hello world!"