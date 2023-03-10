const userNamePrompt = prompt('What\'s your username?');
const passwordPrompt = prompt('What\'s your password?');

const database = [
    { username: 'Andri', password: 'mypassword' },
    { username: 'Maria', password: 'mypassword' },
    { username: 'Marti', password: 'mypassword' },
    { username: 'Sandra', password: 'mypassword' }
];

const newsFeed = [
    { username: 'Andri', timeline: '' },
    { username: 'Maria', timeline: 'Text on my timeline...' },
    { username: 'Marti', timeline: '' },
    { username: 'Sandra', timeline: 'Text on my timeline...' }
];

const isUserValid = (username, password) => {

    for (let user of database) {
        if (user.username === username && user.password === password) { return true; }
    }
    return false;
}

const signIn = (username, password) => {

    if (isUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert('Sorry, wrong username or password!');
    }
}

signIn(userNamePrompt, passwordPrompt);