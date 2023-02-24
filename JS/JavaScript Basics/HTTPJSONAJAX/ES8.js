// ASYNC AWAIT
// is built on top of promises and also returns a promise

// movePlayer() function that has distance and direction
// Promise example 
movePlayer(100, 'Left')
    .then(() => movePlayer(400, 'Left'))
    .then(() => movePlayer(10, 'Right')) 
    .then(() => movePlayer(330, 'Left'))

// ES8 example
async function playerStart() {
    await movePlayer(100, 'Left')
    await movePlayer(400, 'Left');
    await movePlayer(10, 'Right');
    await movePlayer(330, 'Left');
}

// ASYNC AWAIT is easier to read (to make it look more synchronous);
// we first declare a function as 'async';
// after declaring async we now have access to await keyword;
// await says (pause this function until i have something for you) we are waiting for response;
// it awaits at every next move until it gets the response and moves on and on.

// we can assign variables
async function playerStart() {
    const first = await movePlayer(100, 'Left')
    const second = await movePlayer(400, 'Left');
    await movePlayer(10, 'Right');
    await movePlayer(330, 'Left');
}



// example with API

// Promise example:
fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log)

// async example (syntactic sugar):
async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json();
    console.log(data);
}

fetchUsers();



// realistic exapmle with users, posts and albums:

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

// Promise way:
Promise.all(urls.map(url => 
    fetch(url).then(resp=> resp.json())
)).then(array => {
    console.log('users', array[0])
    console.log('posts', array[1])
    console.log('albums', array[2])
}).catch('error');


// async way:
// thanks to destructuring we can use users, posts and albums instead of previous way with array[...];
const getData = async function() {
    const [ users, posts, albums ] = await Promise.all(urls.map(url => 
        fetch(url).then(resp=> resp.json())
    ))
    console.log('users', users)
    console.log('posts', posts)
    console.log('albums', albums)
}

getData()



// catch error method with 'try catch' and we have to give an error prop;
const getData = async function() {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(url => 
            fetch(url).then(resp=> resp.json())
        ))
        console.log('users', users)
        console.log('posts', posts)
        console.log('albums', albums)
    } catch (err) {
        console.log('error', err)
    }
}

getData()



// EXERCISE

// Solve the below problems:

// #1) Convert the below promise into async await
fetch('https://swapi.co/api/starships/9/')
  .then(response => response.json())
  .then(console.log)

// solution
async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json();
    console.log(data);
}

fetchUsers();

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
  const [ users, posts, albums ] = await Promise.all(urls.map(url =>
      fetch(url).then(resp => resp.json())
  ));
  console.log('users', users);
  console.log('posts', posts);
  console.log('albums', albums);
}

// solution
const getData = async function() {
    const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
        const response = await fetch(url);
        return response.json();
    }));
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
  }

getData();

// solution with 'try catch' block
const getData = async function() {
  try {
    const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
        const response = await fetch(url);
        return response.json();
    }));
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
  } catch (error) {
    console.log('error', error)
  }
}

getData();

// #3) Add a try catch block to the #2 solution in order to catch any errors. // Now, use the given array containing an invalid url, so you console.log  //your error with 'oooooops'.
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholdeTYPO.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(url => 
            fetch(url).then(resp=> resp.json())
        ))
        console.log('users', users)
        console.log('posts', posts)
        console.log('albums', albums)
    } catch (error) {
        console.log('oooooops', error)
    }
}

getData()