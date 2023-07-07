// TODO: "THIS" REFERENCE

/*
   * Keyword "THIS" is an object, that refers to current execution scope, 
   * normally "THIS" refers to window.
   ! Important to note: functions defined with arrow method will not have their
   ! own "THIS", whereas normal function declaration will include "THIS" in it's own
   ! scope.
*/
this;


// TODO: USING "THIS" IN METHODS

// * "THIS" will point to object itself
const person1 = {
    firstName: 'Andri',
    lastName: 'Suvorov',
    fullName() { return `${this.firstName} ${this.lastName}`; },
    printBio() { return this.fullName(); }
}
person1.printBio();
// ? return value: "Andri Suvorov"



// TODO: "THIS" INVOCATION CONTEXT

const person2 = {
    firstName: 'Maria',
    lastName: 'Ozol',
    fullName() { return `${this.firstName} ${this.lastName}`; },
    printBio() { return this.fullName(); },
    greet: () => {
        // ! "THIS" in arrow function will point to window scope
        console.log(`${this.firstName} says Hello!`);
    }
}
person2.greet();
// ? return value: "undefined says Hello!"