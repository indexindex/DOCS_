// Type Coercion (the language converting a certain type to another type)

1 == '1'
// return value = true

// js compares num 1 to string 1 and it will
// automatically assume you mean = compare 1 to 1
// so it will transform string 1 to num 1
// and then 1 == 1 is true

== // means compare two values and if they have
// different types then try to coerce one of them

1 === '1'
// return value = false

=== // means compare two values but don't try to
// coerce values

if (1) { // coerce 1 to true
    console.log(5)
};
// return value = 5

if (0) { // coerce 0 to false
    console.log(5)
};
// return value = undefined

//------------------------------------------//

// Object.is

-0 === +0
// return value = true

Object.is(-0, +0)
// return value = false

NaN === NaN
// return value = false

//------------------------------------------//