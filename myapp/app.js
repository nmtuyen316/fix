var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// //database
// const dbconfig =require('./db/dbConfig');
// const connection = require('./db/connection');
// const query = require('./db/query');
// //action
// app.get('/list', async (req, res) => {
//   const conn = await connection(dbConfig).catch(e => {}) 
//   const results = await query(conn, 'SELECT * FROM tweets').catch(console.log);
//   res.json({ results });
// })

var session = require('express-session');
//router
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var signinRouter = require('./routes/signin');
var signupRouter = require('./routes/signup');

var app = express();

app.use(session({
  secret:'webslesson',
  resave:true,
  saveUninitialized:true
}));

// view engine setup
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//router
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/signin', signinRouter);
app.use('/signup', signupRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
