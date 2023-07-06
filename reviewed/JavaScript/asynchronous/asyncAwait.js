// TODO: ASYNC

/*
   * "async" keyword is used to declare "async function".
   * Mainly used to write "Promises" in an easier way, simplified and nicer way to do the same thing.
   * As soon as function gets declared with "async" keyword, it will behave differently,
   * it will now return a "Promise", either "resolved" or "rejected".
*/

const getData = async () => {
    const response = fetch('url');
    console.log(response);
}
getData();



// TODO: AWAIT

/*
   * "await" keyword is used to wait for a "Promise" to be resolved.
   * Must be declared inside "async function".
   * "await" halts code execution until that code line it was declared with gets resolved,
   * then code execution continues.
   * "await" keyword can be used multiple times for each new statement.
*/

const getData = async () => {
    const response = await fetch('url');
    console.log(response);
}
getData();



// TODO: CATCHING ERRORS

/*
   * To catch errors in a specific code block, we could use "try catch" statement.
   * This will try to run a block of code and catch any errors that this code might produce.
   * It is useful for one case situations, if we want to handle specific functionality.
*/

// ? try catch way for specific functionality
const getData = async () => {
    try {
        const response = await fetch('url');
        console.log(response);
    } catch(error) {
        console.log(error);
    }
}
getData();

/*
   * More general approach would be to attach ".catch()" to function call.
   * This way, any errors that we get from that function, will be handled
   * inside ".catch()" callback.
   ! This approach might be safer to use.
*/

const getData = async () => {
    const response = await fetch('url');
    console.log(response);
}
getData().catch(error => {
    console.log(error);
})



// TODO: SEQUENTIAL & PARALLEL

/*
   * Sequential way means that each response is handled one at a time.
   * One 🦉 flies away, while other 🦉s are waiting for that 🦉 to return.
   * Once that first 🦉 returns, other 🦉 flies away, etc.
*/

const getData = async () => {
    const owl1 = await fetch('url');
    const owl2 = await fetch('url');
    const owl3 = await fetch('url');
    console.log(owl1, owl2, owl3);
}
getData();



/*
   * Parallel way means that each response is handled almost simultaneously.
   * Every 🦉 flies away at the same time, and each 🦉 returns once they are ready.
   * Parallel way is good when we don't have a logic that depends on previous result.
*/

const getData = async () => {
    const owl1 = fetch('url');
    const owl2 = fetch('url');
    const owl3 = fetch('url');
    const response1 = await owl1;
    const response2 = await owl2;
    const response3 = await owl3;
    console.log(response1, response2, response3);
}
getData();

/*
   * There is also a better way to write the same logic from previous example.
   * With "Promise.all()", we can just pass in all await responses and they
   * will be resolved within that scope.
*/

const getData = async () => {
    const owl1 = fetch('url');
    const owl2 = fetch('url');
    const owl3 = fetch('url');
    const responses = await Promise.all([owl1, owl2, owl3]);
    console.log(responses);
}
getData();