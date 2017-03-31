var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

var application = express();

application.set('view engine', 'ejs');
application.set('views', './app/views');

application.use(bodyParser.urlencoded({ extended: true }));

consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(application);

module.exports = application;
