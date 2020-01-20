const express = require('express');
const InputValidator = require('../validation/validator');

const router = express.Router();

router.post('/', InputValidator , ( req, res ) => {

    res.json({
        msg: { 
            email: 'Valid Email',
            password: 'Valid Password'
        }
    });

    // Code other than validation would go here...
});

module.exports = router;