// TODO: READING & SENDING STREAM

/*
    * Stream can be used to read large files chunk by chunk, and serve that data chunk by chunk to the client 
    * while continuing to read file.
    * Great example would be streaming services, where video file is delivered to the consumer piece by piece.
*/
const fs = require('fs');

// * shorthand for importing "http" module and creating a server
const server = require('http').createServer();

// ? Advanced way of streaming (detailed)
server.on('request', (req, res) => {
    // * each time a new piece of file has been read, it triggers an event with a callback
    const readable = fs.createReadStream(`${__dirname}/file.txt`);

    // * we read and "write" each and every data chunk to the client
    readable.on('data', chunk => { res.write(chunk); })

    // * run "end" after all data has been read from the file
    readable.on('end', () => {

        /*
            * "end" signifies that no more data will be passed to stream.
            * We don't pass anything to the "end" function as all our data
            * was already delivered to the client.
        */
        res.end();
    })

    readable.on('error', error => {
        console.log(error);
        res.statusCode = 500;
        res.end('File not found!');
    })
})



// ? Best way of streaming (simple)
/*
    * "pipe" is the best way to stream content, it adjusts to readable and writable stream speed, meaning
    * it adjusts speed of data coming in and data coming out.
    * We are reading a file and sending it out to writable source (client) without a pressure.
*/
server.on('request', (req, res) => {
    const readable2 = fs.createReadStream(`${__dirname}/file.txt`);
    
    readable2.pipe(res);
})

server.listen(8000, '127.0.0.1', () => {
    console.log('server has started on port 8000');
})