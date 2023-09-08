// TODO: PROMISE

/*
   * Promises are a new feature in JavaScript (ES6).
   * Promise is a JavaScript object which represents the completion or failure of some eventual process, 
   * a single value that can be produced sometime in the future, either a resolved value, or unresolved (rejected) value. 
   * A good theoretical example of Promise would be a scenario, 
   * where we promise a value that we don't have at the moment but hope that this value would eventually come, 
   * which also points that Promises can take time. 
   * Promise usually has 2 parameter functions: resolve() and reject(), their 
   * basic function is to either set the promise status to "resolved" or "rejected", the default value is always "pending".

   * Promise status will stay "pending" until we get a value or as long as we are not calling resolve() or reject().
*/

// * basic example of a Promise
const myPromise = new Promise((resolve, reject) => {});



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
            { id: 5, username: 'Agatha' },
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