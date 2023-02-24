// import { without } from 'lodash';
// { without } is a js file named without that we import from lodash folder

// but browsers don't recognize import yet, so that's why we'll use browserify

var _ = require('lodash');
// lodash uses _ for it's id

var array = [1,2,3,4,5,6,7,8];
console.log('answer:', _.without(array, 3)); // without method of lodash, display array without nr 3
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");

function setGradient() {
    // adds this color to background, through body
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";
    
    // adds text content
    css.textContent = body.style.background + ";";
}

setGradient();

function randomColors(){
	color1.value = getRandomColor();
	color2.value = getRandomColor();

	setGradient();
}

function getRandomColor() {
	var letters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

// picks up custom color value selected by user
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", randomColors);