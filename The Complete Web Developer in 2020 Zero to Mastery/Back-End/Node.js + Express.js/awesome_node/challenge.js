const fs = require('fs');

function question1() {
    fs.readFile('./challenge.txt', (err, data) => {
        const directions = data.toString();
        const directionsArray = directions.split(''); // split every character
        const answer = directionsArray.reduce((accumulator, currentValue) => { // reduce maps through every character
            if (currentValue === '(') {
                return accumulator += 1
            } else if (currentValue === ')') {
                return accumulator -= 1
            }
        }, 0)
        console.log('floor:', answer);
    })
}

question1();

function question2() {
    fs.readFile('./challenge.txt', (err, data) => {
        const directions = data.toString();
        const directionsArray = directions.split('');
        let accumulator = 0;
        let counter = 0;
        const answer = directionsArray.some((currentItem) => { // some will stop looping when it finds corresponding value
            if (currentItem === '(') {
                accumulator += 1
            } else if (currentItem === ')') {
                accumulator -= 1
            }
            counter++;
            return accumulator < 0;
        })
        console.log('basement at:', counter);
    })
}

question2();