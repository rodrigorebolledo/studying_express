const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        miPrimerAPi : "Works",
    });
});


module.exports = router