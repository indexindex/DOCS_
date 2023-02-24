// Facebook

// let's build a list for a user
var database = [
    {
        username: "Andri",
        password: "Kouku-da"
    }
];

// list for newsfeed
var newsFeed = [
    {
        username: "Marti",
        timeline: "Damn, boy, I don't get it, JS is confusing!"
    },
    {
        username: "Agatha",
        timeline: "Interesting, how will Sophie get it?"
    }
];

// Sign up form
var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

// checks if you entered right data
function signIn(username, password) {
    // compares username to var database array, in which we choose first object [0]
    // and we choose username property in this object
    // and conditional that checks also the password value &&
    if (username === database[0].username && password === database[0].password) {
        console.log(newsFeed); // if code is executed right then show newsFeed
    } else {
        alert("Sorry, wrong username or password!");
    }
}

// we change the parameters of (username, password) to arguments that we get from prompt
signIn(userNamePrompt, passwordPrompt);

//------------------------------------------//



// Making our Facebook better with loops

//------------------------------------------//
// checks if you entered right data
function signIn(username, password) {
    // right now [0] is looking only at first object, we need it to look for rest too
    // we need to give it for loop
    if (username === database[0].username 
        && password === database[0].password) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username or password!");
    }
}
//------------------------------------------//



// users
var database = [
    {
        username: "Andri",
        password: "Kouku-da"
    },
    {
        username: "Marti",
        password: "Black_boy"
    },
    {
        username: "Agatha",
        password: "Charcoal"
    }
];

// list for newsfeed
var newsFeed = [
    {
        username: "Marti",
        timeline: "Damn, boy, I don't get it, JS is confusing!"
    },
    {
        username: "Agatha",
        timeline: "Interesting, how will Sophie get it?"
    }
];

function isUserValid(username, password) {
    // this method is using for loop to check all the usernames and password in var database
    // if what you type in there matches the values then you will get newsFeed,
    // otherwise you get "Sorry, wrong username or password!"
    for (var i=0; i < database.length; i++) {
        if(database[i].username === username && 
            database[i].password === password) {
            return true;
            // checks every username and password and if it finds matching values then it returns true
        }
    }
    return false; 
    // if the "if" statement does not find the matching values then it return false
}

// checks if you entered right data
function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username or password!");
    }
}

// Sign up form
var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

// we change the parameters of (username, password) to arguments that we get from prompt
signIn(userNamePrompt, passwordPrompt);