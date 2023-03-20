// TODO: READING & SENDING STREAM

// * stream can be used to read large files chunk by chunk, and thus serve that chunk to the client while continuinig to read file
// * great example would be streaming services, where viode file is delivered to the consumer piece by piece.

// * read large text file from the file system and then send it to the client application
const fs = require('fs');

// * shorthand for importing "http" module and creating a server
const server = require('http').createServer();

server.on('request', (request, response) => {
    // * each time a new piece of file was read it triggers an event with a callback
    const readable = fs.createReadStream('../js/primitiveTypes/01_numbers.js');

    readable.on('data', chunk => {
        // * "write" sends each and every data chunk to the client
        response.write(chunk);
    })
    // * run "end" after all data was read from the file
    readable.on('end', () => {
        /*
            * "end" signifies that no more data will be passed to stream.
            * We don't pass anything to the "end" function as all our data
            * was already delivered to the client.
        */
        response.end();
    })
    readable.on('error', error => {
        console.log(error);
        response.statusCode = 500;
        response.end('File not found!');
    })

    // * "pipe" is the best way to stream content, it adjusts to readable and writable stream speed
    // * adjust speed of data coming in and data comin out
    const readable2 = fs.createReadStream('../js/primitiveTypes/01_numbers.js');
    // * we are reading a file and without a back pressure sending it out to writable source, eg client
    readable2.pipe(response);

})

server.listen(8000, '127.0.0.1', () => {
    console.log('listening on 127.0.0.1:8000');
})