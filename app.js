var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: '@$QKbc(t3B?.ulW',
  resave: false,
  saveUninitialized: false
}));

app.get('/', (req, res) => {
  res.render('index1'); // Renders 'index.ejs'
});

app.get('/about', (req, res) => {
  res.render('About'); // Renders 'about.ejs'
});

app.get('/syllabus', (req, res) => {
  res.render('syllabus'); // Renders 'syllabus.ejs'
});

// app.get('/register', (req, res) => {
//   res.render('register'); // Renders 'register.ejs'
// });

// app.get('/login', (req, res) => {
//   res.render('login'); // Renders 'login.ejs'
// });


app.use('/', indexRouter);
app.use('/', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.title = "Error Page 2";
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);

  res.render('error');
});

app.listen(3000, () => {
  console.log('[+] server listening on http://127.0.0.1:3000')
});

module.exports = app;
