// Objects

// --- --- --->

// simple Object syntax
const fitnessData = {
    totalSteps: 111111,
    totalMiles: 222222,
    avgCalorieBurn: 1000,
    workoutThisWeek: '5 of 7',
    avgGoodSleep: '2:13',
    10: 'ten'
}

// access Object key value
fitnessData.totalMiles
// return 222222

// access Object key (key is declared as a string)
fitnessData[10]
// return ten

// also i can already do
fitnessData['10']
// return ten (outcome is the same)
// [] are used to find non-valid JS syntax properties
// you always use '' around object property in [], otherwise it may look for a variable

// --- --- --->

// accessing methods
const palette = {
    red: '#eb4d4b',
    yellow: '#f9ca24',
    blue: '#30336b'
};

let mysteryColor = 'yellow';

// accessing variable value
palette[mysteryColor]
// return "#f9ca24"
// it is looking for the value of mysteryColor and then takes the value from the palette
// mostly used when we try passing variable value to the specified object

// accessing property
palette.mysteryColor
// return undefined
// it is looking for an actual property called mysteryColor that we don't have in our palette

// --- --- --->

// add a property
const userReviews = {}; // empty object

// option 1
userReviews['Agatha'] = 4.0;

// option 2
userReviews.Sophie = 5.0;

/* return userReviews {
    Agatha: 4.0,
    Sophie: 5.0
}
*/

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
