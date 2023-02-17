// TODO: ARRAYS

/*
   * Arrays are reference types, meaning that the contents of an array can still be 
   * changed, even if it has been defined with "const". It is the reference point itself
   * that must stay the same, contents can change.
   * New array cannot be assigned to a variable defined with "const".
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



// * access nested arrays
const floors = [
    [ 'floor', '1' ],
    [ 'floor', '2' ],
    [ 'floor', '3' ]
]

// * access floor 3
floors[2][1];
// ? return value: "3"



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
// ? return value: [44, 12, 22, 56, 66]



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



// * splice - remove, add or replace items in array

// ? myCollection is currently: [12, "dog", true, null, NaN]

// * splice remove item
// ? start index / delete item count
myCollection.splice(2, 2);
myCollection;
// ? return value: [12, "dog", NaN]

// * splice add item
// ? start index / delete item count / added value
myCollection.splice(1, 0, 'new item');
myCollection;
// ? return value: [12, "new item", "dog", NaN]

// * splice replace item
// ? start index / delete item count / added values
myCollection.splice(0, 2, 'new item 1', 'new item 2');
myCollection;
// ? return value: ["new item 1", "new item 2", "dog", NaN]



// * sort - sort array
const myLetters = ['C', 'E', 'B', 'A', 'D'];

/*
   * "sort" usually places items alphabetically, but if we
   * are dealing with numbers then "sort" converts them to
   * strings and compares their numeric standing: 100, 1000, 10000 etc.
*/

// * alphabetical sort
myLetters.sort();
// ? return value: ["A", "B", "C", "D", "E"]