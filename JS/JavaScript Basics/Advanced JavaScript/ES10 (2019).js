// EcmaScript10 2019

// flat() - used on arrays

const array = [1,2,3,4,5]
array.flat()

// return value = (5) [1, 2, 3, 4, 5]
// returns new array that is just like we had

// but in this example of array inside an array we see the power of flat()
const array2 = [1,[2,3],[4,5]]
array2.flat()

// return value = (5) [1, 2, 3, 4, 5]
// new array that has no nested arrays anymore

// let's make more complex nesting
const array3 = [1,[2,3],[4,5]]
array3.flat()

// return value = (5) [1, 2, 3, 4, Array(1)]
// it removed first nested array
// WE CAN TELL flat() HOW MANY LAYERS WE WANT TO FLAT

const array3 = [1,[2,3],[4,5]]
array3.flat(2) // tell how many layers you want to flat

// return value = (5) [1, 2, 3, 4, 5]



// clean data with flat()
const entries = ['Andri', 'Marti',,,,,,'Sasuke']
entries.flat()

// return value = (3) ["Andri", "Marti", "Sasuke"]

//------------------------------------------//

// flatMap

flatMap()

// example
const example = array3.flatMap(number => number + 'Andri')
// return value = (3) ["1Andri", "2,3Andri", "4,5Andri"]
// adds 'Andri' to every number in the array 
 
//------------------------------------------//

// incorect mail fix example
const userEmail = '      andrisuvorov@gmail.com'
const userEmail2 = 'andrisuvorov@gmail.com      '

userEmail.trimStart()
// return value = andrisuvorov@gmail.com
userEmail2.trimEnd()
// return value = andrisuvorov@gmail.com

//------------------------------------------//

// fromEntries (opposite of Object.entries)

userProfiles = [['Itachi', 22], ['Sasuke', 16], ['Kisame', 30]]

Object.fromEntries(userProfiles)
// transforms array into object
//  return value = {Itachi: 22, Sasuke: 16, Kisame: 30}

//------------------------------------------//

try {

} catch {

}



// try a piece of code and if spotted any errors, then catch them
try {
    4 + 5
} catch {

}
9 // appears when code gets ran

// same as...
4 + 5

// but with try/catch method we can return something when we have an error

try {
    true + 'hi'
} catch {
    console.log('you messed up')
}
"truehi" // type coercion

try {
    bob + 'hi'
} catch {
    console.log('you messed up')
}
// you messed up

//------------------------------------------//

// EXERCISE

// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1],[2],[3],[[[4]]],[[[5]]]]

array.flat(2)


// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];

greeting.flatMap(x => x.join(' '))


//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
greeting.flatMap(x => x.join(' ')).join(' ')


//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];

trapped.flat(Infinity)
// Infintiy is actually a LARGE number in JavaScipt. It represents the maximum amount of memory that we can hold for a number!


//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '

userEmail3.trimEnd().trimStart()


//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }

const usersArray = Object.entries(users)


//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
const updatedUsersArray = usersArray.map((user) => [user[0], user[1] * 2])

updatedUsersArray


//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
const updatedUsers = Object.fromEntries(updatedUsersArray)

updatedUsers