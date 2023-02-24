// node file system
const fs = require('fs');

// fs will do readFile method,
// './Hello.txt' will be the path to a file,
// it will have a function with two parameters (err, data),
// if theres an error, then return error,
// else just return data;
fs.readFile('./Hello.txt', (err, data) => {
    if (err) {
        console.log('error');
    }
    console.log(data.toString('utf8'));
})

// without 'utf8' i get: <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64 21>
// so we need to do some encoding to make it into a string;
// i will add .toString() after data, which will use 'utf8' encoding;
// utf8 is a type of encoding that is pretty much standard across the web;



// Sync way means that whenever this function gets triggered, it will halt everything else
// until it's finished the task (reading file);
// readFile() method in such case is better because it's Asynchronous, meaning it won't
// block the code execution;
const file = fs.readFileSync('./Hello.txt');
console.log(file.toString('utf8'));



// a way to add text to our file, first param is the file we want to add to,
// second param is the text that we are adding to it,
// third param is error (if there exists any);
fs.appendFile('./Hello.txt', ' This is cool!', err => {
    if (err) {
        console.log('error');
    }
})



// a way to write files;
fs.writeFile('./bye.txt', 'Agatha, your black hair looks so cute!', err => {
    if (err) {
        console.log('error');
    }
})



// a way to delete files;
fs.unlink('./bye.txt', err => {
    if (err) {
        console.log('error');
    }
    console.log('Deleted!');
})