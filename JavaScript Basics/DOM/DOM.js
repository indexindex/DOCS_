// Document Object Model (Building Web Pages with JS)

// DOM is simply a document, used to change/add/delete HTML and CSS elements etc.

document.write("Hello World!");

document // is an object (modify tool) (child of window)

window // is an object (parent object)

window.alert("testing!"); // gives out alert

//------------------------------------------//

// DOM Selectors

document.getElementsByTagName("h1");
// return value = [h1]

document.getElementsByClassName("second");
// return value = [p.second]

// if we want to fully access the line where class "second" is located, we do it like this...
document.getElementsByClassName("second")[0];

document.getElementById("first");
// return value = <p id="first">Get it done today</p>



// querySelector selects the first item that it finds

document.querySelector("h1");
// return value = <h1>Shopping List</h1>

document.querySelector("li");
// return value = <li random="23">Notebook</li>

document.querySelectorAll("li");
// return value = (6) [li, li, li, li, li, li]

document.querySelectorAll("li, h1");
// return value = (7) [h1, li, li, li, li, li, li]



document.querySelector("li").getAttribute("random");
// return value = "23"

document.querySelector("li").setAttribute("random", "1000");
// return value = undefined

document.querySelector("li");
// return value = <li random="1000">Notebook</li>

//------------------------------------------//

// Changing styles

document.querySelector("h1");
// return value = <h1>Shopping List</h1>

document.querySelector("h1").style; // access the styles properties

// it will be an inline style
document.querySelector("h1").style.background = "yellow"; // change h1 background to yellow

// storing this path to variable
var h1 = document.querySelector("h1");
// adding new class to the h1
h1.className = "coolTitle";



document.querySelector("li").classList;
// return value = (2) ["bold", "red", value: "bold red"]

// classList methods (add/remove/toggle)

// add
document.querySelector("li").classList.add("coolTitle");

// remove
document.querySelector("li").classList.remove("coolTitle");

// add
document.querySelector("li").classList.add("done");

// toggle (instead of removing it toggles back to previous class/condition)
document.querySelector("li").classList.toggle("coolTitle");

//------------------------------------------//

// change the inner HTML
document.querySelector("h1").innerHTML = "<strong>!!!</strong>";

//------------------------------------------//

// change parent or children element

// let's select Jello from list element
document.querySelectorAll("li")[1];
// return value = <li>Jello</li>

// access li parent element
document.querySelectorAll("li")[1].parentElement;
// return value = <ul>...</ul>

// access ul parent element
document.querySelectorAll("li")[1].parentElement.parentElement;
// return value = <body>...</body>

// access body children element
document.querySelectorAll("li")[1].parentElement.parentElement.children;
// return value = (4) [h1, p#first, p.second, ul, first: p#first]

//------------------------------------------//

// cache selectors in variables

var h1 = document.querySelector("h1");

h1



//------------------------------------------//

// DOM Events

// button is in HTML

var button = document.getElementsByTagName("button")[0];
// if you don't put [0] after ("button") then it only selects array
// return value = [button]
// but we need to access button, so we add [0]
// return value now is = <button>Click me!</button>
// now i can always reference button

// let's add click event listener
// first parameter is what we want to listen
// second parameter is the function which runs after the click
button.addEventListener("click", function() {
    console.log("CLICK!!!");
})

// let's add mouse event listener
// first parameter is what we want to listen
// second parameter is the function which runs after the mouse enters
button.addEventListener("mouseenter", function() {
    console.log("MOUSEENTER!!!");
})