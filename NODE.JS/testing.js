const fs = require('fs');

fs.appendFile(`${__dirname}/test.txt`, ' added text', 'utf-8', error => {
    console.log('file has been updated');
})