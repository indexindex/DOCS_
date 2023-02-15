// TODO: PROMPT

/*
   * Prompt box is often used to input a value before entering a page.
   * When prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed.
   * Option "OK" will return the input value and option "Cancel" will return null.
   ! Important thing to remember here is that prompt box also blocks the execution of code,
   ! until the prompt box is closed, JS code will not move forward and user might face a blank page.
*/
// * empty prompt box
prompt();

// * prompt box with text
prompt('simple prompt box');



// TODO: PROMPT CALCULATOR

let firstNum = prompt('please, enter a number');
let secondNum = prompt('please, enter another number');

// * example input: 10, 30

// * prompt input will always be stored as a string
// * in order to convert string number to numberic value, we need to use number constructor
let output = Number(firstNum) + Number(secondNum);
output;
// ? return value: 40

// * output can be shown to user with alert
alert(`sum is: ${output}`);