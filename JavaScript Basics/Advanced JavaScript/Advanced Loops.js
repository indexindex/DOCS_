// Advanced Loops

// Array for examples
const basket = ['msi laptop', 'iPad Pro', 'Razer Backpack'];

// usual way 
for ( let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}

// return value = 
// msi laptop
// iPad Pro
// Razer Backpack

// ES5 way of forEach
basket.forEach(item => {
    console.log(item);
})

// return value = 
// msi laptop
// iPad Pro
// Razer Backpack

// new way ES6 (1) = for of
// iterating (we are able to go one by one through an item (basket) and look at these items)
// iterating only for arrays and strings
// you can iterate through arrays and strings
for (item of basket) { // item is a variable (can name whatever you want)
    console.log(item);
}

// return value = 
// msi laptop
// iPad Pro
// Razer Backpack

// even if this basket is not an array but string
for (item of 'basket') { // item is a variable (can name whatever you want)
    console.log(item);
}

// return value = 
// b
// a
// s
// k
// e
// t

// Object for examples
const detailedBasket = {
    msi_laptop: 3000,
    iPad_Pro: 1500,
    Razer_Backpack: 150
}

// new way ES6 (2) = for in (loop over and see object properties)
// enumerating only for objects
// works with objects, also you can try it with arrays cause they are basically objects
// trying this for array will return index numbers
for (item in detailedBasket) {
    console.log(item);
}

// return value = 
// msi_laptop
// iPad_Pro
// Razer_Backpack

//------------------------------------------//

// EXERCISE

const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

let highest = 0;
// found solution that works (forloop)
for( var i = 0; i < array.length; i++){
    if(highest < array[i]) {
       highest = array[i];
}}
  console.log(highest);

let highest = 0;
// found solution that works (forEach)
array.forEach(function(arr) {
    if(highest < arr) 
    highest = arr;
});

highest



function biggestNumberInArray(arr) {
  let highest = 0;
  for (let i = 0; i < array.length; i++) {
      if (highest < arr[i]) {
          highest = arr[i];
      }
    }
    return highest
}
biggestNumberInArray(array)

function biggestNumberInArray2(arr) {
    let highest = 0;
    arr.forEach(item => {
      if (highest < item) {
        highest = item;
      }
    })
    return highest;
  }
  biggestNumberInArray2(array2)

function biggestNumberInArray3(arr) {
    let highest = 0;
    for (item of arr) {
      if (highest < item) {
        highest = item;
      }
    }
    return highest;
  }
  
  biggestNumberInArray3(array3)

// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {
for (item in basket) {
    if (item === lookingFor) {
        return `${lookingFor} is in your basket`
    }
    }
    return 'that does not exist in your basket'
}