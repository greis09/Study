var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

var application = express();

application.use(bodyParser.json());

consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(application);

module.exports = application;