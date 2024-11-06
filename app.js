require('dotenv').config();
var express = require('express');
require('./models/connection')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var tripRouter = require('./models/trip')
var cartRouter = require('./models/cart')
var bookingRouter = require('./models/booking')
var indexRouter = require('./routes/index');



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
app.use('/cart', cartRouter)
app.use('/booking', bookingRouter)

module.exports = app;
