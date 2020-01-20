const Joi = require('@hapi/joi');

module.exports = ( req, res, next ) => {

    console.log( req.body ); // Assuming req.body have req.body.email and req.body.password

    let msg = {};

    if( Object.keys( req.body ).length === 0 && Object.keys( req.query ).length === 0 )
        return res.json({ msg: ' Empty request ' });

    else {

        const validationSchema = Joi.object({

            number: Joi.string().length(10).pattern( new RegExp('^[0-9]*$') ),
            email: Joi.string().email(),
            password: Joi.string().min(8).pattern( new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\-?_*])'))
        });

        let emailErrors;
        let passErrors;
        let numErrors;

        if( Object.keys( req.body ).length !== 0 ) { // POST request => req.body 

            emailErrors = validationSchema.validate({ email: req.body.email }).error;
            passErrors = validationSchema.validate({ password: req.body.password }).error;
        }

        if( Object.keys( req.query ).length !== 0 ) { // GET request => req.query

            emailErrors = validationSchema.validate({ email: req.query.email }).error;
            numErrors = validationSchema.validate({ number: req.query.number }).error;
        }
         
        //Email Validation
        if( !(emailErrors === undefined) ) {
                    
            if( emailErrors.details[0].type === 'string.empty' )
                msg.email = 'How can Email be empty ??';
            if( emailErrors.details[0].type === 'string.email' )
                msg.email = 'The Email is invalid, Kindly Check.';
        }

        //Password Validation
        if( !( passErrors === undefined) ) {

            if( passErrors.details[0].type === 'string.empty' )
                msg.password = ' How can Email be empty ?? ';
            if( passErrors.details[0].type === 'string.min' )
                msg.password = ' Password Length Cannot be less than 8 Chars. ';
            if( passErrors.details[0].type === 'string.pattern.base' )
                msg.password = ' Password should be combination of one uppercase , one lower case, one special char, one numeric ';
        }
        
        //Number Validation
        console.log( numErrors );
        if( !( numErrors === undefined ) ) {

            if( numErrors.details[0].type === 'string.empty' )
                msg.number = ' Number cannot be empty '
            if( numErrors.details[0].type === 'string.length' )
                msg.number = ' Number must be of 10 digits '
            if( numErrors.details[0].type === 'string.pattern.base' )
                msg.number = ' Number must only be digit '
        }
    }

    if( Object.keys(msg).length !== 0 )
        return res.json({msg});
        
    next();
};
