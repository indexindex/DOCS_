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
    for (var i=0; i < database.length; i++) {
        if(database[i].username === username && 
            database[i].password === password) {
            return true; 
        }
    }
    return false;
}

function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username or password!");
    }
}

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);