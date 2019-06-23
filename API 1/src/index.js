const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan'); //middleware (procesa datos antes que el servidor los reciba)


//settings
app.set('port', process.env.PORT || 3000); // process.env.PORT si es que hay un puerto definido en el sistema (ex: heroku)

//middlewares

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//routes
app.use(require('./routes/index'));
app.use('/api', require('./routes/movies')); //DEBE ser app.use, con post ni get funciona tiene sentido dado que app no recibe el método
app.use(require('./routes/api.js'));
app.use('/api/fetch', require('./routes/apiFetch'));


//starting the server
app.listen(app.get('port'), () =>{
});