// TODO: OBJECTS

/*
   * Objects are collections of properties. They are good because 
   * we can have properties, which define their characteristics.
*/

// * simple mixed value object
const fitnessData = {
    totalSteps: 10000,
    totalMiles: 5,
    avgCalorieBurn: 800,
    workoutsThisWeek: '3 out of 4',
    avgGoodSleep: '7:00h'
}



// TODO: OBJECT ACCESS

// * accessing an object property that has not been defined will result with "undefined".

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

// * to update our object we have two ways:

// * updating with '.' syntax
profile.name = 'Maria';

// * updating with '[]' syntax
profile['age'] = 23;

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
    return { max, min, sum, avg }; // * is equal to: max: max, min: min, sum: sum, avg: avg
}

const numbers = [10, 20, 30, 40, 50, 60, 70, 80];
const stats = getStats(numbers);
stats;
// ? return value: { max: 80, min: 10, sum: 360, avg: 45 }



// TODO: ASSIGN COMPUTED PROPERTIES

// * assign role to person
const role = 'host';
const person = 'Andri';

const team = { [role]: person }
team;
// ? return value: { host: "Andri" }



// TODO: ASSIGN & RETRIEVE COMPUTED PROPERTIES

const addProp = (obj, key, value) => {
    // * spread object into new one and assign new value
    return { ...obj, [key]: value };
}

const currentUser = addProp(team, 'logged', true);
currentUser;
// ? return value: { host: "Andri", logged: true }



// TODO: ADDING METHODS TO OBJECTS

// * key names here are actually functions
const math = {
    add(x, y) { return x + y; },
    multiply(x, y) { return x * y; }
}

math.add(2, 5);
// ? return value: 7

math.multiply(2, 5);
// ? return value: 10



// TODO: REFERENCE IN MEMORY

const object1 = { value: 25 };
const object2 = object1;
const object3 = { value: 25 };

// * pointing to the same reference in memory
object1 === object2;
// ? return value: true

// * "object3" is a new reference in memory, despite looking identical to "object1"
object1 === object3;
// ? return value: false