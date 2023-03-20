// TODO: ROUTING

/*
    * Simply means implementing different actions for different URL's.
    * Commonly used with HTTP module to get URL parameters.

    * Current setup is basic, we only need to check if requested URL has any "/page" set.
    * To each response we can attach more information, for example "HTTP headers",
    * which are pieces of information about the response that we are sending back.
    * For example "Content-type: text/html" expects HTML in our response.
    * We can define custom headers as well, if we prefer to have unique information for each response.
    * Alongside headers, we can also set status code, like "200", which means "OK", or "400", whcih means "Not Found".
    * Status code must always come before defining headers.
*/
const http = require('http');

const server = http.createServer((req, res) => {
    const pathName = req.url;

    switch(pathName) {
        case '/':
        case '/home':
            res.end('You are on home page');
            break;
        case '/products':
            res.end('You are on products page');
            break;
        default:
            res.writeHead(404, {
                'Content-type': 'text/html',
                'Custom-header': 'custom-info'
            });
            res.end('<h1>Page not found!</h1>');
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log('server has started on port 8000');
})