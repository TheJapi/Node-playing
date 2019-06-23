const express = require('express');
const app = express();

const port = 8080;

//res.send solo se usa en los request handlers, cuidado con los callbacks
app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(port, () => {
    console.log('Server listening on port %i', port)
});