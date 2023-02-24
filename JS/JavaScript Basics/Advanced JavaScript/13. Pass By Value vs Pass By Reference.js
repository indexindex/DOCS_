// By Reference vs By Value

var a = 5; // has it's own memory of stored value
var b = 10; // has it's own memory of stored value

var b = a;
b++;

a; // return value = 5
b; // return value = 6

//------------------------------------------//

let obj1 = {name: 'Andri', password: '123'};
let obj2 = obj1;

obj2.password = 'easypeasy' // with object we don't copy the values
// we just simply reference it

obj1; // return = { name: 'Andri', password: 'easypeasy' }
obj2; // return = { name: 'Andri', password: 'easypeasy' }

//------------------------------------------//

// referencing to an array/object
var c = [1,2,3,4,5];
var d = c;

d.push(11223344);

d;
// return value = [ 1, 2, 3, 4, 5, 11223344 ]

c;
// return value = [ 1, 2, 3, 4, 5, 11223344 ]

//------------------------------------------//

// if we really do wanna clone the object not just to reference it

var c = [1,2,3,4,5];
var d = [].concat(c); // pushes whatever i have in c to array

d.push(11223344);

d;
// return value = [ 1, 2, 3, 4, 5, 11223344 ]

//------------------------------------------//

// copying object to another location in memory
let obj = {a: 'a', b: 'b', c: 'c'};
let clone = Object.assign({}, obj);
// first parameter is empty object where you copy values
// second parameter is the source to copy values from

obj.c = 5;

obj;
// return value = { a: 'a', b: 'b', c: 5 }

clone; // clone was not affected because it is a copy of obj, not itself an obj
// return value = { a: 'a', b: 'b', c: 'c' }

//------------------------------------------//

// spread operator

let obj = {a: 'a', b: 'b', c: 'c'};
let clone = Object.assign({}, obj);
let clone2 = {...obj}

obj.c = 5;

obj;
// return value = { a: 'a', b: 'b', c: 5 }

clone; // clone was not affected because it is a copy of obj, not itself an obj
// return value = { a: 'a', b: 'b', c: 'c' }

clone2; // clone was not affected because it is a copy of obj, not itself an obj
// return value = { a: 'a', b: 'b', c: 'c' }

//------------------------------------------//

// Object inside an object case

let obj = {a: 'a', b: 'b', c: {deep: 'try to copy'}};
let clone = Object.assign({}, obj);
let clone2 = {...obj}

obj.c = 5;

obj;
// return value = { a: 'a', b: 'b', c: 5 }

clone; // clone was not affected because it is a copy of obj, not itself an obj
// return value = { a: 'a', b: 'b', c: {deep: 'try to copy'} }

clone2; // clone was not affected because it is a copy of obj, not itself an obj
// return value = { a: 'a', b: 'b', c: {deep: 'try to copy'} }

//------------------------------------------//

// Shallow cloning - only first layer

// change the value of object inside an object 
// (Shallow clone - when we only can clone first layer)

let obj = {a: 'a', b: 'b', c: {deep: 'try to copy'}};
let clone = Object.assign({}, obj);
let clone2 = {...obj}

obj.c.deep = 'haha'; // changes the whole object because it can't access deep layer

obj;
// return value = { a: 'a', b: 'b', c: {deep: 'haha'} }

clone;
// return value = { a: 'a', b: 'b', c: {deep: 'haha'} }

clone2;
// return value = { a: 'a', b: 'b', c: {deep: 'haha'} }

//------------------------------------------//

// Deep cloning

let obj = {a: 'a', b: 'b', c: {deep: 'try to copy'}};
let clone = Object.assign({}, obj);
let clone2 = {...obj}
let superClone = JSON.parse(JSON.stringify(obj))
// string everything in object and after parse we return everything back to an object

obj.c.deep = 'haha'; // changes the whole object because it can't access deep layer

obj;
// return value = { a: 'a', b: 'b', c: {deep: 'haha'} }

clone;
// return value = { a: 'a', b: 'b', c: {deep: 'haha'} }

clone2;
// return value = { a: 'a', b: 'b', c: {deep: 'haha'} }

superClone; //was not affected (superClone did the deep clone of the object)
// return value = { a: 'a', b: 'b', c: {deep: 'try to copy'} }