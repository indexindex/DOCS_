// TODO: ARRAYS

/*
   * Arrays are reference types, meaning that if defined with const,
   * other than the reference point itself, contents of an array can still be changed.
   * New array cannot be assigned to it.
   * If "let" was used, then we can redeclare variable value with a new array, 
   * but that would simply mean overwriting variable value altogether.
*/

// * simple array with string values
const shoppingList = ['bread', 'butter', 'cheese'];

// * simple array with number values
const lotto = [44, 12, 33, 56, 66];

// * simple mixed value array
const myCollection = [12, 'dog', true, null, NaN];

// * making a new array with a method
new Array(44, 12, 33, 56, 66);
// ? return value: [44, 12, 33, 56, 66]
// ! this way of declaring an array is not recommended



// TODO: ARRAY ACCESS

// * retrieve the last item in array
lotto[lotto.length -1];
// ? return value: 66

// * access 3rd number in array
lotto[2];
// ? return value: 33

// * change 3rd number in array to a new number
lotto[2] = 22;
lotto;
// ? return value: [44, 12, 22, 56, 66]



// TODO: ARRAY METHODS

// * push - add item to the end of array
lotto.push(77);
lotto;
// ? return value: [44, 12, 22, 56, 66, 77]

// * pop - remove item from the end of array
lotto.pop();
lotto;
// ? return value: [44, 12, 22, 56, 66]

// * unshift - add item to the beginning of array
lotto.unshift(33);
lotto;
// ? return value: [33, 44, 12, 22, 56, 66]

// * shift - remove item from the beginning of array
lotto.shift();
lotto;
// ? return value: [44, 12, 33, 56, 66]

// * concat - combine array with another array
const array1 = ['data1', 'data2'];
const array2 = ['data3', 'data4'];

const combinedArray = array1.concat(array2);
// ? return value: ["data1", "data2", "data3", "data4"]

// * includes - search for exact match in array
lotto.includes(56);
// ? return value: true

lotto.includes(566);
// ? return value: false

// * indexOf - if match was found, return match index
lotto.indexOf(56);
// ? return value: 3

lotto.indexOf(3);
// ? return value: -1
// * value -1 means "not found"

// * reverse - reverse array
const word = ['D', 'O', 'G'];
word.reverse();
// ? return value: ["G", "O", "D"]

// * join - join array
const greet = ['H', 'E', 'L', 'L', 'O'];
greet.join();
// ? return value: "H,E,L,L,O"

// * join can accept whatever character i give it to combine the array
greet.join('');
// ? return value: "HELLO"

// * slice - cut from array
const week = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
week.slice(0, 3);
// ? return value: ["M", "T", "W"]
// ? slices from index of 0 up to index of 3, not including index 3

week.slice(2);
// ? return value: ["W", "T", "F", "S", "S"]
// ? return everything from index of 2, including index 2

week.slice();
// ? return value: ["M", "T", "W", "T", "F", "S", "S"]
// ? returns whole array that could be stored in a variable as a copy





// Splice

// removes or replaces elements, also can add in new elements

// insert method of splice()
let webDevelopment = [
    'HTML',
    'CSS',
    'Sass',
    'Bootstrap',
    'JavaScript'
];

webDevelopment.splice(1, 0, 'npm');
// first num is start index ('HTML')
// second num is how many items i want to delete
// third value is the added value
// return ["HTML", "npm", "CSS", "Sass", "Bootstrap", "JavaScript"]

// delete method of splice()
let webDevelopment = [
    'HTML',
    'CSS',
    'Sass',
    'Bootstrap',
    'JavaScript'
];

webDevelopment.splice(2, 2);
// first num is start index
// second num is how many items i want to delete
// return ["Sass", "Bootstrap"]

// replace method of splice()
let webDevelopment = [
    'HTML',
    'CSS',
    'Sass',
    'Bootstrap',
    'JavaScript'
];

webDevelopment.splice(0, 2, 'HTML & CSS', 'Sass & SCSS');
// first num is start index
// second num is how many items i want to delete
// return ["HTML", "CSS"]
// and array is now ["HTML & CSS", "Sass & SCSS", "Sass", "Bootstrap", "JavaScript"]

// --- --- --->

// Sort

// sort array alphabetically
let webDevelopment = [
    'HTML',
    'CSS',
    'Sass',
    'Bootstrap',
    'JavaScript'
];

webDevelopment.sort();
// return ["Bootstrap", "CSS", "HTML", "JavaScript", "Sass"]

// sorting with numbers (converts to string and compares numeric standing)
let nums = [35, 100, 10000, 66, 99];

nums.sort();
// return [100, 10000, 35, 66, 99]

// --- --- --->

// Access nested arrays

const floors = [
    [ 'floor', '1' ],
    [ 'floor', '2' ],
    [ 'floor', '3' ]
]

// access floor 3
floors[2][1]
// return '3'

// update value
floors[2][1] = 4 