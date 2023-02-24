var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// picks up custom color value selected by user
color1.addEventListener("input", function() {
    // adds this color to background, through body
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

        // adds text content
        css.textContent = body.style.background + ";";
})

color2.addEventListener("input", function() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

        // adds text content
        css.textContent = body.style.background + ";";
})