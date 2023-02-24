// Advanced Objects

// reference type

var object1 = { value: 10 }; // makes new box
var object2 = object1; // has a reference to box1
var object3 = { value: 10 }; // makes a new box

object1 === object2;
// return value = true

object1 === object3;
// return value = false

object2.value = 15;
object2.value;
// return value 15

object3.value;
// return value = 10

//------------------------------------------//

// context (gets confused a lot with scope)

function b() {
    let a = 5;
}

console.log(this); // means we are accessing this object environment in which we are located

console.log(this === window)
// return value = true

this.alert("hello") // good way to think about it is to think what stays to the left of dot
// same as this...
window.alert("hello")



function a() {
    console.log(this); // we are still acessing window
}

a();
// return = undefined

// is the same as
window.a();
// return = undefined



const object4 = {
    a: function() {
        console.log(this); // now this refers to a
    }
}

object4.a();
// return = undefined

//------------------------------------------//

// instantiation (making instances or multiple copies of an object)

class Player {
    // parameters is what player will have
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    // any Player that you create will always be able to introduce himself
    // and they also have this name and this type
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Witcher extends Player {
    constructor(name, type) {
        super(name, type) // whenever you extend you have to use super to have access to those types
    }
    play() {
        console.log(`Hi I am ${this.type}`);
    }
}

const witcher1 = new Witcher('Andri', 'Healer');
const witcher2 = new Witcher('Marti', 'Utility unit');

witcher1.play()
// return value = Hi I am Healer

witcher1.introduce()
// return value = Hi I am Andri, I am a Healer

witcher1.play()
// return value = Hi I am Healer

witcher2.introduce()
// return value = Hi I am Marti, I am a Utility unit

//------------------------------------------//

// EXERCISE

//Evaluate these:
//#1
[2] === [2]
// return value = false

{} === {}
// return value = false

//#2 what is the value of property "a" for each object.
const object1 = { a: 5 };
// a = 4
const object2 = object1;
// a = 4
const object3 = object2;
// a = 4
const object4 = { a: 5};
// a = 5
object1.a = 4;
// a = 4

//#3 create two classes: an Animal class and a Mamal class.
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color.

class Animal {
    // parameters is what player will have
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
    // any Player that you create will always be able to introduce himself
    // and they also have this name, type and this color
    sound() {
        console.log(`Mooo! I'm a ${this.name}, I'm considered to be ${this.type}, my color is ${this.color}`);
    }
}

class Mamal extends Animal {
    constructor(name, type, color) {
        super(name, type, color) // whenever you extend you have to use super to have access to those types
    }
}

const cow = new Mamal('cow', 'mamal', 'black and white');

cow.sound()
// return value = Mooo!, I'm a cow, I'm considered to be mamal, my color is black and white