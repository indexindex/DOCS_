// TODO: ALERT

/*
   * Alert box is often used to make sure information comes through to the user.
   * When alert box pops up, the user will have to click "OK" to proceed.
   ! Important thing to remember here is that alert box also blocks the execution of code,
   ! until the alert box is closed, JS code will not move forward and user might face a blank page.
*/
// * empty alert box
alert();

// * alert box with text
alert('simple alert box');



// * we can also alert a function value
function multiply(a, b) {
   return a * b;
}
alert(multiply(5, 10));
// ? return value: 50