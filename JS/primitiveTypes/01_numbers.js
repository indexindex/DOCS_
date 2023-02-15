// TODO: NUMBERS

// * JS can do simple calculations with numbers (+ - * ** / %)

// * addition +
4 + 5;
// ? return value: 9

// * subtraction -
12 - 4;
// ? return value: 8

// * multiplication *
3 * 5;
// ? return value: 15

// * division /
12 / 4;
// ? return value: 3

// * remainder % (returns only leftover number)
12 % 6;
// ? return value: 0

12 % 5;
// ? return value: 2

// * to decide which calculation happens first, we can use parentheses ()
(3 + 4) * 2;
// ? return value: 14

// * exponential operator **
2 ** 3;
// ? return value: 8
// ? 2 * 2 * 2 = 8

5 ** 2;
// ? return value: 25
// ? 5 * 5 = 25

5 ** 5;
// ? return value: 3125
// ? 5 * 5 * 5 * 5 * 5 = 3125



// TODO: NaN

// * JS has a value NaN, which means "Not a Number"

/*
   * NaN is still a number on it's own but is the result of a failed operation on numbers including:
   * "failed number conversion" or "math operation where the result is not a real number".
*/
0 / 0;
// ? return value: NaN

1 + NaN;
// ? return value: NaN



// TODO: Infinity

/*
   * Because number value in JS can't go on forever, it has a max value "Infinity",
   * which is greater than any other number and is returned when it exceeds the upper limit for a number.
*/
1 / 0;
// ? return value: Infinity

// * "Infinity" can also be negative
-1 / 0;
// ? return value: -Infinity



// TODO: NUMBER CONSTRUCTOR

// * performs type conversion from string to number
Number('25');
// ? return value: 25