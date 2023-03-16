// Promises are a new feature in JS (ES6);
// Promise is an object that may produce a single value some time in the future, either
// a resolved value, or a reason that it's not resolved (rejected);
// Promise may be shown in 3 possible states:
// * fulfilled
// * rejected
// * pending

// Promise example:
movePlayer(100, 'Left')
    .then(() => movePlayer(400, 'Left'))
    .then(() => movePlayer(10, 'Right')) 
    .then(() => movePlayer(330, 'Left'))



// let's create a promise (new syntax);
// it either resolves or rejects;
// if true (promise retuned) => resolve, else reject;
const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff Worked');
    } else {
        reject('Error, it broke');
    }
})

// now to call it:
promise.then(result => console.log(result));



// things we can do with promise result:
promise
    .then(result => result + '!')
    .then(result2 => console.log(result2)
)



// if we get error;
// catch() will catch any error that promise may have (always checks everything above it);
promise
    .then(result => result + '!')
    .then(result2 => {
        throw Error
        console.log(result2);
    })
    .catch(() => console.log('error!'))



// what happens here? it's called chaining (always adding more actions);
promise
.then(result => result + '!')
.then(result2 => result2 + '?')
.then(result3 => result3 + '!')
// return value = Stuff Worked!?!



// setTimeout() is a web API that allows us to timeout and run something after given time; 
const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff Worked');
    } else {
        reject('Error, it broke');
    }
})

// new promise in 100ms
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Hiii')
})

// new promise in 1s
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Heeey')
})

// new promise in 5s
const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'Ouch')
})

// waits until all promises are resolved and only then displays;
Promise.all([promise, promise2, promise3, promise4])
.then(values => console.log(values))



// when to use promises?
// let's look at the next example below that might give us some insights:



const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

// we grab urls, we use map array;
// each url that we grab we want to fect() web API to grab it and make AJAX call to that url;
// .then we want to run the response through response.JSON();
// .then we will be returned an array of results;
// results will be console.log'd;

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.log('error'))

// basic understanding: Promises are a bit like event listeners except Promise can succeed or fail only once.

//----------------------------------------------------------------------------------------------------------------------------------------

// EXERCISE

// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string

// my solution:
const promise = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, 'success');
})

promise.then(result => console.log(result));

// #2) Run the above promise and make it console.log "success"

const promise = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000);
})

promise.then(result => console.log('success'));

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console logging "success"

const promise = Promise.resolve(setTimeout(() => {
    console.log('success');
  }, 4000)
);



// example of Promise.resolve()
Promise.resolve('Success').then(function(value) {
  console.log(value); // "Success"
}, function(value) {
  // not called
});

// example of Promise.reject()
Promise.reject(new Error('fail')).then(function() {
  // not called
}, function(error) {
  console.error(error); // Stacktrace
});

// #4) Catch this error and console log 'Ooops something went wrong'

Promise.reject('failed')



Promise.reject('failed').catch(console.log('Ooops something went wrong'));

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.

const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url => {
  return fetch(url).then(resp => resp.json())
})).then(results => {
  console.log(results[0])
  console.log(results[1])
  console.log(results[2])
  console.log(results[3])
}).catch(() => console.log('error'))

// #6) Change one of your urls above to make it incorrect and fail the promise.
// Does your catch block handle it?

// Yes it detects error