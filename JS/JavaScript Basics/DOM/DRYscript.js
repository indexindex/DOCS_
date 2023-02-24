// DRY method - Do not Repeat Yourself

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li  = document.getElementsByTagName("LI");
var close = document.getElementsByClassName("close");

function inputLength() {
    return input.value.length;
}

function createListElement() {
       // create li item when button is clicked or Enter key pressed
       var li = document.createElement("li");
       // create a text node for li item
       // input.value takes whatever you typed in the input and displays it as a new li item
       li.appendChild(document.createTextNode(input.value));
       // adds text node created to the bottom of list items
       // keeps adding if button is clicked or Enter key pressed
       ul.appendChild(li);
       // after adding li item clear the input field
       input.value = "";
       // otherwise clicking button/pressing Enter key will do nothing
}

function addListAfterClick() {
        // if you have typed something in input then do the following
        if (inputLength() > 0) {
            createListElement();
        }
}

function addListAfterKeypress(event) {
        // if you have typed something in input then do the following, also by pressing Enter key
        if (inputLength() > 0 && event.keyCode === 13) {
            createListElement();
        }
}

// listens for mouse click on button press
button.addEventListener("click", addListAfterClick);

// listens for keypress
input.addEventListener("keypress", addListAfterKeypress);