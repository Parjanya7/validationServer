const express = require('express');

const router = express.Router();

router.get('/', ( req, res ) => {
    
    res.json({
        msg: { 
            email: 'Valid Email',
            number: 'Valid Number'
        }
    });
});

module.exports = router;