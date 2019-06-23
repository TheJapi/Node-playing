const express = require('express');
const router = express.Router(); 

/*forma anexa de router (solo importar el método router de express)
    const { Router } = require('express');
    const router = Router();
*/

//rutas
router.get('/test', (req, res) => {
    res.json({title: "asdasd", content: "fafgadfgaf"});
});

module.exports = router;