/*
    TODO: PROMISES

    * PROMISES OVERVIEW:
    * A Promise is an object that represents the eventual completion or failure of an asynchronous 
    * operation, and its resulting value.
    * Promises have three states:

        * 1. Pending: The initial state, meaning the asynchronous operation is still in progress;
        * 2. Fulfilled: The operation completed successfully, and the Promise holds a resolved value;
        * 3. Rejected: The operation failed, and the Promise holds a reason for the failure.

    * CREATING PROMISES:
    * To create a Promise, use the "Promise" constructor, which takes a single argument: 
    * a function with "resolve" and "reject" parameters.
    * Here's a basic example:
*/
const myPromise = new Promise((resolve, reject) => {
    if (operationSuccessful) {
        resolve('Success');
    } else {
        reject('Failure');
    }
})

/*
    * PROMISE CHAINING:
    * Promise chaining allows you to perform multiple asynchronous operations in sequence.
    * This is valuable for tasks that depend on the result of previous asynchronous operations.
    * For example, making multiple API requests one after the other.
*/
fetchData()
.then(processData)
.then(displayData)
.catch(handleError);

/*
    * ERROR HANDLING:
    * Use the ".catch()" method to handle errors in the Promise chain. 
    * This is especially important to avoid unhandled promise rejections.
*/
fetchData()
.then(processData)
.catch(error => console.error(error));

/*
    * Promise.all AND Promise.race:

    * "Promise.all" waits for all Promises to be resolved, and then it resolves 
    * with an array of their results. This is useful for parallel processing.

    * "Promise.race" resolves or rejects as soon as the first Promise in an 
    * iterable resolves or rejects. Useful for implementing a timeout.
*/
const promises = [fetchData1(), fetchData2(), fetchData3()];

Promise.all(promises)
.then(results => console.log(results))
.catch(error => console.error(error));

/*
    * BEST PRACTICES:
    * - Always handle errors: Use ".catch()" to handle errors in your Promises to prevent unhandled promise rejections.
    * - Avoid the Pyramid of Doom: Use chaining to keep code readable and avoid deeply nested callbacks.
    * - Return Promises: Functions that perform asynchronous operations should return Promises to enable chaining.
    * - Use async/await: If you're using modern JavaScript, consider using "async/await" for cleaner and more readable asynchronous code.
    * - Promise.resolve() and Promise.reject(): You can create resolved and rejected Promises with "Promise.resolve()" and "Promise.reject()".
    * - Think in Promises: Start thinking in terms of Promises for all asynchronous operations to make your code more predictable.

    * ADVANCED TECHNIQUES:
    * - Custom Promise Implementations: You can create custom Promise-like objects using the Promise constructor.
    * - Promise Timeout: Implement a timeout for Promises using "Promise.race" to prevent a Promise from hanging indefinitely.
    * - Caching with Promises: Cache Promise results to avoid redundant network requests.
    * - Promisify Node.js Functions: Convert callback-based functions into Promise-based functions using utilities like "util.promisify".
    * - Generators and Async/Await: Combine generators with Promises for more complex asynchronous flows.

    * SUMMARY:
    * Promises are a fundamental part of modern JavaScript, and mastering them is crucial 
    * for writing clean and maintainable asynchronous code.
    * By following best practices and exploring advanced techniques, you can 
    * handle complex asynchronous scenarios effectively.
*/














// TODO: .THEN & .CATCH METHODS

/*
   * Every Promise has .then() and .catch() methods.
   * They will run if a specific parameter function was called.
   * In case of .then(), to run that method we need to call resolve() function.
   * In case of .catch(), to run that method we need to call reject() function.
*/

// * basic example of a Promise resolved
const myPromise = new Promise((resolve, reject) => {
    resolve();
}).then(() => {
    console.log('promise resolved');
})

// * basic example of a Promise rejected
const myPromise = new Promise((resolve, reject) => {
    reject();
}).catch(() => {
    console.log('promise rejected');
})



// TODO: PASSING DATA TO .THEN & .CATCH

/*
   * In most cases we also want to know why something was resolved or rejected, 
   * so we pass a value to these functions, some data that we can later access in them.
*/

const myPromise = new Promise((resolve, reject) => {
    if (true) {
        resolve('promise got resolved intentionally');
    } else {
        reject('promise got rejected intentionally');
    }
}).then(res => {
    console.log('success:', res);
}).catch(error => {
    console.log('error:', error);
});



// TODO: BETTER WAY TO WRITE PROMISES

/*
   * We can make a function and return Promise whenever we run it.
   * This way we can simply call a function and chain .then() and .catch() functions to it.
   * This is considered a common pattern because we can have linear code that may have many 
   * .then() methods and only one .catch(), which will get triggered if any of the above methods fail.

   * Main use cases for:
   *    HTTP requests;
   *    nested callbacks.
*/

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const pages = {
          '/users': [
            { id: 1, username: 'Maria' },
            { id: 5, username: 'Andri' },
          ],
          '/about': 'This is the about page!'
        }
        const data = pages[url];
        if (data) {
          resolve({ status: 200, data });
        } else {
          reject({ status: 404 });
        }
      }, 3000);
    })
  }
  
  fakeRequest('/users')
    .then(() => {
      console.log('request worked')
      console.log('status code', res.status)
      console.log('data', res.data)
    })
    .catch((res) => {
      console.log('request failed')
      console.log(res.status) // 404
    })



// TODO: PROMISE ALL

/*
   * Promise.all() allows us to wait until all promises are resolved before
   * they get displayed.
*/

// * let's pretend that "urls" stores 4 url string values
Promise.all(urls.map(url => {
    return fetch(url).then(res => res.json())
}))
.then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
    console.log(results[3]);
})
.catch(error => console.log('error:', error));






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