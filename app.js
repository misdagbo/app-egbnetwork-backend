var express = require('express');
var app = express();
var cors = require('cors');

// ADD THESE TWO LINES

app.use(cors());

 var routesActivite = require('./routes/activite');
 app.use('/activite', routesActivite);

module.exports = app;