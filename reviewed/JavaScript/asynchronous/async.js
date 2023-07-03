// TODO: ASYNC

/*
   * We start asynchronous function by declaring "async" in front of a keyword "function".
   * Difference between regular function call vs async function call is that it returns a "promise".
*/

async function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw 'X and Y must be numbers!';
    }
    return x + y;
}

add('e', 'r').then(val => {
    console.log('PROMISE RESOLVED WITH: ', val);
})
.catch(err => {
    console.log('PROMISE REJECTED WITH: ', err);
})


// TODO: AWAIT

/*
   * "await" keyword must be declared inside "async" function and it waits for a promise to be resolved
   * before executing further code.
   * 
*/

async function getData() {
    const res = await fetch('url');
    console.log(res);
}

// TODO: CATCHING ERROR

/*
   * "await" keyword must be declared inside "async" function and it waits for a promise to be resolved
   * before executing further code.
   * "await" keyword can be used multiple time on each new line to do the logic.
*/

async function getData() {
    const res = await fetch('url');
    console.log(res);
}

getData.catch(err => {
    console.log(err);
})

// ? we have a sequential and non sequential way

/*
   * sequential, res2 hangs till res1 comes back with resolved value, so on.
*/
async function getData() {
    const res1 = await fetch('url');
    const res2 = await fetch('url');
    const res3 = await fetch('url');
    console.log(res1, res2, res3);
}

getData()



/*
   * parallel way, fetched urls are sent at the same time
*/
async function getData() {
    const res1 = fetch('url');
    const res2 = fetch('url');
    const res3 = fetch('url');
    const result1 = await res1;
    const result2 = await res2;
    const result3 = await res3;
    console.log(result1, result2, result3);
}

getData()



/*
   * shortcut way
promise.all will be resolved when all inner res will resolve
*/
async function getData() {
    const res1 = fetch('url');
    const res2 = fetch('url');
    const res3 = fetch('url');
    const results = await Promise.all([res1, res2, res3]);
    // runs only when previous is done
    console.log(results);
}

getData()