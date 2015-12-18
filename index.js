var express = require('express');
var app = express();
var mongoose = require('mongoose');

/* Configuration */

require('./config/configuration.js')(app, mongoose);
