const express = require('express');
const app = express();
app.port = 3000;

const rotas = require('../app/routes/routes.js');
rotas(app);

module.exports = app;