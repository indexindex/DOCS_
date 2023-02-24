// TODO: WEB API

/*
    * Basically a service, from which we can request some data.
    * For example, data which was requested for a current page or product.
    * API works with "JSON" format, when request comes in, it returns "JSON" response.
    * Using "./" to specify our path, might not always work as we hope, it points to
    * current folder, which could eventually be located in another environment.
    * To be more specific while defining our paths, we can use NODE.JS built-in variable
    * "__dirname", which specifies where the current file is really located.
*/

const fs = require('fs');
const http = require('http');
const url = require('url');

const data = fs.readFileSync(`${__dirname}/data.json`, 'utf-8');
const dataObj = JSON.parse(data); // * parse "JSON" to JS object

/*
    * To send back "JSON" data as a string, we need to specify headers accordingly.
    * We set our header to be "Content-type: application/json" so that browser knows what
    * type of data is being delivered.
    * Important part here would be to recognize unnecessary pattern of logic,
    * for example, we could read the file once after page has been loaded and return
    * the data back every time "/api" request comes in.
    * Logic would be that, the file was read once and will later only return the data we saved
    * to a variable, without the need to read the file again every time.
    * With such scenario, we can use synchronous file read and later
    * return data with each callback request.
*/
const server = http.createServer((req, res) => {
    const pathName = req.url;

    if (pathName === '/api') {
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(data);
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log('server has started on port 8000');
})