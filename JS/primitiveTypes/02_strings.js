// TODO: STRINGS

// * string in JS is a piece of text marked with either "" or ''
"simple placeholder text";
'simple placeholder text';

// * strings can be combined to form a new string
'simple ' + 'placeholder text';
// ? return value: "simple placeholder text"

/*
   * If we start the string with single quote then we must also end it with a single quote, and vice versa.
   * In some cases tho, we might want to include a quote inside the string, for that,
   * we may use different quotes around the string or use backslash "\" to escape the current character.
*/
'let\'s go exploring';

// * we can combine numbers with strings, although it will just convert number to string and combine two string pieces
10 + '15';
// ? return value: "1015"

/*
   * As opposed to previous example, subtracting a string from number is treated as if we are dealing with two number values,
   * in such case, string value will be converted to numeric value and math operation will be performed.
*/
10 - '5';
// ? return value: 5

// * subtracting string from string will make JS think we are dealing with numbers, although we are not
'hello' - 'bye';
// ? return value: NaN



// TODO: STRING PROPERTIES

// * .length (counts from 1)
'hello'.length;
// ? return value: 5

let word = 'hello';
word.length;
// ? return value: 5

// * select string character (counts from 0)
word[0];
// ? return value: "h"

// * select last character in a string
word[word.length - 1];
// ? return value: "o"



// TODO: STRING METHODS

let greeting = 'Hello, friend!';

// * we can uppercase all letters in our string
greeting.toUpperCase();
// ? return value: "HELLO, FRIEND!"

// * we can lowercase all letters in our string
greeting.toLowerCase();
// ? return value: "hello, friend!"

greeting = '     Hello, friend!     ';

// * we can trim our string by removing whitespace from both ends
greeting.trim();
// ? return value: "Hello, friend!"

// * methods can be combined (chained)
greeting.trim().toUpperCase();
// ? return value: "HELLO, FRIEND!"



// TODO: STRING ARGUMENTS

// * indexOf()

// * word starts from index of...
'baseball'.indexOf('ball');
// ? return value: 4

// * outputs the first character that matches the search
'baseball'.indexOf('b');
// ? return value: 0

// * if no match was found then returned value is -1
'baseball'.indexOf('bat');
// ? return value: -1

// * slice()

// * cutting out string piece from index of...
'baseball'.slice(4);
// ? return value: "ball"

'$50.60'.slice(1);
// ? return value: "50.60"

// * cutting out string piece from index to index
'superhero'.slice(0, 5);
// ? return value: "super"
// ? index 5 is "h" but "slice" never outputs that, it basically returns everything before the index of 5

'superhero'.slice(5, 7);
// ? return value: "he"

// * replace()

// * replace word with new word (replaces first word match)
'ran across the river'.replace('river', 'field');
// ? return value: "ran across the field"

// * parseInt()

// * convert string number into actual number
parseInt('21');
// ? return value: 21

parseInt('21') + 1;
// ? return value: 22

// * parseFloat()

// * convert string number into actual number and also count in decimals
parseFloat('33.5');
// ? return value: 33.5



// TODO: TEMPLATE LITERALS

// * string with backticks ``
`simple placeholder text`;

// * we can now evaluate JS code inside the string, using ${}
`${1 + 4}`;
// ? return value: "5"

`You owe me ${20 + 80}`;
// ? return value: "You owe me 100"

// * interpolating data inside of a string
let sound = 'meow';
let animal = 'cat';
`${animal} says ${sound}`;
// ? return value: "cat says meow"

// * string interpolation with method usecase
`${animal} says ${sound.toUpperCase()}`;
// ? return value: "cat says MEOW"

// * string interpolation with math usecase
let item = 'gems pack 150';
let price = 9.99;
let quantity = 3;
`You bought ${quantity} ${item}, total price: ${price * quantity}€`;
// ? return value: "You bought 3 gems pack 150, total price: 29.97€"

let minAge = 21;
let yourAge = 19;
`You must be ${minAge} or older to enter. Come back in ${minAge - yourAge} years.`;
// ? return value: "You must be 21 or older to enter. Come back in 2 years."