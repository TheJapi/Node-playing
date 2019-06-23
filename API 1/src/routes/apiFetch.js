const { Router } = require('express');
const router = Router();
const fetch = require('node-fetch'); 

//usando mindicador con fetch, se usa async await para que espere (no es asíncrona, por ende la "casteamos")
router.get('', async (req, res) => {
    await fetch('https://mindicador.cl/api')
    .then(res => res.json())
    .then(data => res.send(data));
    
 
    
});

module.exports = router;