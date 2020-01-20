const express = require('express');
const InputValidator = require('../validation/validator');

const router = express.Router();

router.get('/', InputValidator ,( req, res ) => {
    
    res.json({
        msg: { 
            email: 'Valid Email',
            number: 'Valid Number'
        }
    });
});

module.exports = router;