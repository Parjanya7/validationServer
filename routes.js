module.exports = ( app ) =>{

    const getValidationRouter = require('./routes/getValidationRoute');
    const validationRouter = require('./routes/validatorRoute');
    
    app.use('/validation', validationRouter);
    app.use('/getValidation', getValidationRouter);
};