var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");
require('dotenv').config();
const connect = require('./config/conn');

connect();

const PORT = process.env.PORT || 3000;
var session = require('express-session');

var authRouter = require('./routes/auth');
var productsRouter = require('./routes/products');
// var usersRouter = require('../backend/routes/users');

var app = express();

app.use(session({
    secret:'webslesson',
    resave:true,
    saveUninitialized:true
}));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
const corsOptions ={
    origin:true, 
    credentials:true,            //access-control-allow-credentials:true
}

app.use(cors(corsOptions))
app.options('*', cors(corsOptions))

app.use('/api/auth', authRouter);
app.use('/api/products', productsRouter);
// app.use('/users', usersRouter);

app.listen(PORT);