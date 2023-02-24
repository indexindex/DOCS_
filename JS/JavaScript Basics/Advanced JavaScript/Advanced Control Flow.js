// ternary operator, basically simplified if else structure

// syntax
condition ? expr1 : expr2;

// condition means = is this true or false
// if condition is true, then = expr1, if false, then = expr2
// : means = or

function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied";
// answer = You may enter
var answer = isUserValid(false) ? "You may enter" : "Access Denied";
// answer = Access Denied

// otherwise you would do it like this
function condition() {
    if (isUserValid(true)) {
        return "You may enter";
    } else {
        return "Access Denied"
    }
}

//------------------------------------------//

// more complex one
var automatedAnswer = 
"Your account # is " + ( isUserValid(false) ? "1234" : "not available");
// answer = Your account # is not available
"Your account # is " + ( isUserValid(true) ? "1234" : "not available");
// answer = Your account # is 1234

//------------------------------------------//



// switch statement
function moveCommand(direction) { // direction is a parameter
    var whatHappens;
    switch (direction) { // checks directions
        case "forward": // in case direction is forward, do this...
            whatHappens = "you encounter a monster";
            break;// stops here
        case "back": // in case direction is back, do this...
            whatHappens = "you arrived home";
            break;// stops here
        case "right": // in case direction is right, do this...
            whatHappens = "you found a river";
            break;// stops here
        case "left": // in case direction is left, do this...
            whatHappens = "you run into a troll";
            break;// stops here
        default: // if none of these conditions work, then give the value below
            whatHappens = "please enter a valid direction";
    }
    return whatHappens; // returns an answer
}

//moveCommand exists in the root scope which is window
//in console, type: window.moveCommand("forward");

//------------------------------------------//

// EXERCISE

//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

// answer
var experiencePoints = winBattle() ? 10 : 1;



//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");
// answer = undefined

//#3 return value when moveCommand("back");
// answer = you arrived home

//#4 return value when moveCommand("right");
// answer = you found a river

//#5 return value when moveCommand("left");
// answer = undefined

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

function narutoRun(direction) {
    var summonedEnemy;
    switch (direction) {
        case "forward":
            summonedEnemy = "Orochimaru";
            break;
        case "left":
            summonedEnemy = "Sasuke";
            break;
        case "right":
            summonedEnemy = "Kabuto";
            break;
        case "back":
            summonedEnemy = "Itachi";
            break;
        default:
            summonedEnemy = "please enter a valid direction";
    }
    return summonedEnemy;
}

function minecraftRun(direction) {
    var escapeRoute;
    switch (direction) {
        case "forward":
            escapeRoute = "Tree";
            break;
        case "left":
            escapeRoute = "Horse";
            break;
        case "right":
            escapeRoute = "Zombie";
            break;
        case "back":
            escapeRoute = "Creeper";
            break;
        default:
            escapeRoute = "please enter a valid direction to run";
    }
    return escapeRoute;
}