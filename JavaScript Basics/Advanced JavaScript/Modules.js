// Modules (Building blocks)

// Inline Script
<script type="text/javascript">
    function a() {
        alert('a')
    }
        function b() {
        alert('b')
    }
        function c() {
        alert('c')
    }
        function d() {
        alert('d')
    }
</script>

//------------------------------------------//
// Script Tags

<script type="text/javascript" src="./1.js"></script>
<script type="text/javascript" src="./2.js"></script>
<script type="text/javascript" src="./3.js"></script>
<script type="text/javascript" src="./4.js"></script>

//------------------------------------------//
// IIFE - Immediately Invoked Function Execution

//js1 first file loaded
var myApp = {}

//js2
(function(){
    myApp.add = function(a, b) {
        return a + b;
    }
})();

// jQuery uses this: allows us to use $


//------------------------------------------//
// CommonJS + Browserify (Module bundler)

//js1
module.exports = function add(a, b){
    return a+b;
}

//js2
var add = require("./add.js");

//------------------------------------------//
// ES6 + Webpack2 (Webpack is module bundler)

//js1
export const add = (a, b) => a + b;
// or
export default function add() {
    return a + b;
} // exports one thing

//js2
import { add } from './add';
//or
import add from './add';

//------------------------------------------//
// Webpack structure
module.exports = {
    entry: './app/main.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    }
}

<script src="bundle.js"></script>
// Webpack creates bundle.js file for us to implement into inner HTML