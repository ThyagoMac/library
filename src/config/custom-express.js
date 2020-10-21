require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();
app.port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

const rotas = require('../app/routes/routes.js');
rotas(app);

module.exports = app;