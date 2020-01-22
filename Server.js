const express = require('express');
const bodyParser = require('body-parser');
const conf = require('./conf');

const app = express();

conf.MiddleWare(app, express, bodyParser);
conf.ROUTES(app);

app.listen(conf.PORT, () => console.log(`App running on PORT ${conf.PORT}`));
