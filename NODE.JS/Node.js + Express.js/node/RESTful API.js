// RESTful API is architectural style, aproached in communications
// where rules are agreed between browser and a server;

// RESTful API uses (GET (to receive), PUT (to change the state or update), POST (to create), DELETE (to remove));
// RESTful API is a way to define our server so it specifies what it can provide and how to use it;

/profile
// we expect that if it is GET request, then we get profile;
// if it is a POST request, then we gonna add a profile;
// if PUT then we perhaps are updating the profile;



// RESTful API app example:
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

// get method will give us request object that can have few things like 'query, body';
app.get('/', (req, res) => {
    req.query // is what i get from query string (form data);
    req.body // to receive whatever the request sends in the body;
    req.headers // i can change header through JSON;
    req.params // url parameters (defining the new params like /newparam);
    res.status(404).send("not found"); // responding with status of 404;
})

app.listen(3000);



// in order for Express to send static files, i add another middleware:
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static(__dirname + '/public'))
// giving directory path and then url to public folder where html is;

app.listen(3000);