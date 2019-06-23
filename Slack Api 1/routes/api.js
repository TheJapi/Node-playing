const { Router } = require('express');
router = Router();

router.get('/', (req, res) => {
    console.log('ok1');
    res.send(req.body);
});

router.post('/', (req, res) => {
    console.log('ok2');
    res.send(req.body.event);
});

module.exports = router;
