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



// TODO: UPDATE OBJECT PROPERTY

// * for updating our object we have two ways:

// * updating with '[]' syntax
profile['name'] = 'Maria';

// * updating with '.' syntax
profile.age = 23;

profile;
// ? return value: { name: "Maria", age: 23 }



// TODO: OBJECT NESTING

// * object can grow nested and store all sorts of values
const article = {
    title: 'Most Used REST API Authentication Methods & Strategies',
    likes: 556,
    labels: ['#python', '#authentication', '#rest-api', '#oauth', '#authorization'],
    content: {
        subTitle: 'Learn all about REST API authentication, authentication types in...',
        text: 'REST APIs are a powerful tool for developers, allowing them to quickly and easily access data and services.'
    }
}



// TODO: SHORTHAND OBJECT PROPERTIES

// * get max/min/sum/avg from an array of numbers
const getStats = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((prevValue, currValue) => prevValue + currValue);
    const avg = sum / arr.length;
    return { max, min, sum, avg }; // * is equivalent to: max: max, min: min, sum: sum, avg: avg
}

const numbers = [10, 20, 30, 40, 50, 60, 70, 80];
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
