const express = require('express');
const request = require('request'); 
const router = express.Router();

//responde un json con el valor de la UF actual. Este método entrega mucha más información que fetch (más lento)
router.get('/', (req, res) => {
    request.get({url : 'https://mindicador.cl/api'}, (err, response, body) => { 
        const json = JSON.parse(body)
        res.json(json);
    });


});
    

module.exports = router;