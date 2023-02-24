// Debugging strategies

const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (a, b) => a.concat(b), []);

// # 1 READ IT!

// better understanding look
const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (accumulator, array) => {
        console.log('array', array);
        console.log('accumulator', accumulator);
        return accumulator.concat(array) // jost joins arrays into an empty array
}, []);

flattened// return value = (6) [0, 1, 2, 3, 4, 5]

// #  2 USE DEBUGGER - let's us go through a program step by step

const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (accumulator, array) => {
        debugger; // stops at a point where it tackled a bug and...
        // highlights the error
        return accumulator.concat(array)
}, []);