module.exports = {

    PORT: process.env.PORT || 2000,

    MiddleWare: ( app, express, bodyParser) => {
                
        app.use(express.json());
        app.use(bodyParser.urlencoded({ extended: true }));  
        app.use(bodyParser.json());
    },

    ROUTES: ( app ) => {

        const routes = require('./routes');
        const validation = require('./validation/validator');

        app.use(validation);  
        routes(app);
    }
};