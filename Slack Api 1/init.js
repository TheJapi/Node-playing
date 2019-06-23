const express = require('express');
const bodyParser = require('body-parser');
const request = require('./messages');
const routes = require('./routes/api');

const app = express();

//callback

//middlewares
app.use(bodyParser.json());


//routes
app.use('/api', routes);

//server
app.listen(3000, );