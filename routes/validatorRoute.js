const express = require('express');

const router = express.Router();

router.post('/', ( req, res ) => {

    res.json({
        msg: { 
            email: 'Valid Email',
            password: 'Valid Password'
        }
    });

    // Code other than validation would go here...
});

module.exports = router;