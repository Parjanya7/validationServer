const express = require('express');
const bodyParser = require('body-parser');
const validatorRouter = require('./routes/validatorRoute');
const getValidationRouter = require('./routes/getValidationRoute');

const app = express();
const PORT = process.env.PORT || 2000;

app.use( express.json() );
app.use( bodyParser.urlencoded({ extended : true }) );  
app.use( bodyParser.json() );

app.use('/validation', validatorRouter);
app.use('/getValidation', getValidationRouter);

app.listen( PORT, () => console.log(`App running on PORT ${PORT}`) );
