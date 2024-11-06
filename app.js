require('dotenv').config();
var express = require('express');
require('./models/connection')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var tripRouter = require('./models/trip')
var indexRouter = require('./routes/index');
var tripsRouter = require('./routes/trips');

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const cors = require('cors');
app.use(cors());

app.use('/', indexRouter);
app.use('/trip', tripRouter)
module.exports = app;
