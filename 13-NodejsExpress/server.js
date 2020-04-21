// Basic way to create a server

// const http = require('http');

// const server = http.createServer((request, response) => {
//     //console.log('headers', request.headers);
//     console.log('method', request.method);
//     console.log('URL', request.url);

//     const user = {
//         name: 'John',
//         hobby: 'Skating'
//     }

//     response.setHeader('Content-Type', 'application/json');
//     response.end(JSON.stringify(user));
// })

// server.listen(3000);


//Create server with express

// const express = require('express');

// const app = express();


// app.get('/', (req, res) => {
//     res.send("getting root..");
// });

// app.get('/profile', (req, res) => {
//     res.send("getting profile..");
// });

// app.post('/profile', (req, res) => {
//     const user = {
//         name: 'Sally',
//         hobby: 'soccer'
//     }
//     res.send(user);
// });

// app.listen(3000);

//Express middleware

// const express = require('express');

// const app = express();

// app.use((req, res, next) => {
//     console.log("<h1>HELLLOOO</h1>")
//     next()
// })
// app.get('/', (req, res) => {
//     res.send("testest");
// });

//POST requests (POSTMAN)

// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json());
// app.get('/', (req, res) => {
//     res.send("getting root..");
// });

// app.get('/profile', (req, res) => {
//     res.send("getting profile..");
// });

// app.post('/profile', (req, res) => {
//     console.log(req.body);
//     const user = {
//         name: 'Sally',
//         hobby: 'soccer'
//     }
//     res.send(user);
// });

// app.listen(3000);


//RESTful API

// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     //console.log(req.query);
//     //console.log(req.body);
//     //console.log(req.header);
//     //console.log(req.params)
//     //res.send("getting root..");
//     res.status(404).send('not found');
// });

// app.listen(3000);

//Serve Files

const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(express.static(__dirname + '/public'));


app.listen(3000);