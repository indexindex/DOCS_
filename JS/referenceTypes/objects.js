// TODO: OBJECTS

/*
   * 
*/

// * simple mixed value object
const fitnessData = {
    totalSteps: 10000,
    totalMiles: 5,
    avgCalorieBurn: 800,
    workoutThisWeek: '3 of 4',
    avgGoodSleep: '7:00h'
}



// TODO: OBJECT ACCESS

// * Accessing an object property that has not been defined will result with "undefined".

// * access object key value with . syntax
fitnessData.totalMiles;
// ? return value: 5

// * access object key value with [] syntax
fitnessData['totalMiles'];
// ? return value: 5

// * access object key value with variable value
const myTotalSteps = 'totalSteps';
fitnessData[myTotalSteps];
// ? return value: 10000



// TODO: OBJECT CREATION

// * make an empty object
const profile = {};

// * setting first property and value
profile['name'] = 'Andri';

// * setting second property and value
profile['age'] = 25;

profile;
// ? return value: { name: "Andri", age: 25 }



// update existing property

// option 1
userReviews['Agatha'] = 1.0;

// option 2
userReviews.Sophie = 3.0;

/* return userReviews {
    Agatha: 1.0,
    Sophie: 3.0
}
*/

// --- --- --->

// Nested array object
const student = {
    firstName: "Agatha",
    lastName: "Beyond",
    strengths: [ 'Magic', 'Smile' ],
    exams: {
        midterm: 92,
        final: 88
    } 
};

// access Smile
student.strengths[1]

// EXERCISE

// Grab midterm + final and / by 2;
const avg = (student.exams.midterm + student.exams.final) / 2;

// --- --- --->

// array of objects
const shoppingCart = [
    {
        product: 'MSI laptop',
        price: 3.500,
        quantity: 1
    },
    {
        product: 'MSI laptop',
        price: 3.500,
        quantity: 1
    },
    {
        product: 'MSI laptop',
        price: 3.500,
        quantity: 1
    }
];

// --- --- --->

// conditional when [] is empty
const user = {
    username: 'Agatha',
    email: 'agatha@gmail.com',
    notifications: []
}

// method 1
if (user.notifications.length === 0) {
    console.log('No New Notifications!');
}

// method 2
if (!user.notifications.length) { // length gives me 0, ! says, if there is no length then return following...
    console.log('No New Notifications!');
}

// --- --- --->
// TODO: SHORTHAND OBJECT PROPERTIES

// * old way of assigning value to object key
const getStats = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((sum, r) => sum + r);
    const avg = sum / arr.length;
    return {
        max: max,
        min: min,
        sum: sum,
        avg: avg
    }
    // * newer way is that we can leave off same name values:
    /*
    return {
        max,
        min,
        sum,
        avg
    }
    */
}

const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

const stats = getStats(reviews);

// --- --- --->
// TODO: COMPUTED PROPERTIES

// * to assign role to person we would do it this way:
const role = 'host';
const person = 'Agatha';

const team = {};
team[role] = person;
// {host: "Agatha"}

// * newer way of this would look like so:
const team = {
    [role]: person
}
// {host: "Agatha"}

// * return added property (old way)
function addProp(obj,k,v) {
    const copy = {...obj};
    copy[k] = v;
    return copy;
}

const res = addProp(team, 'happy', ':)');
// {
//  host: "Agatha",
//  happy: ":)"
// }

// * return added property (new way)
function addProp(obj,k,v) {
    return {...obj, [k]: v};
}

const res = addProp(team, 'happy', ':)');
// {
//  host: "Agatha",
//  happy: ":)"
// }

// --- --- --->
// TODO: ADDING METHODS TO OBJECTS

const add = function(x, y) {
    return x + y;
}

// * we declare an object and use "add" as a key and value
const math = {
    add
}
// * we can now call the function in two ways:
add(5,5);
// 10

// * or
math.add(5,5);
// 10

// * but a better way is to define function as a value for object key
const math = {
    add: function(x, y) {
        return x + y;
    },
    multiply: function(x, y) {
        return x * y;
    }
}

// --- --- --->
// TODO: METHOD SHORTHAND SYNTAX

// * we now can have a function name as a key
const auth = {
    login() {
        console.log("logged you in!");
    }
}
auth.login
// "logged you in!"
