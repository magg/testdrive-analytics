var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var http = require('http');
var routes = require('./routes');

var mongoose = require('mongoose');

var app = express();

app.set('port', process.env.PORT || 3000);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').__express);
app.set('view engine', 'html');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



routes.build(app);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


function connectToMongo(callback) {
  var db = mongoose.connect('mongodb://localhost/analytics').connection;

  db.on('error', function(err) {
    console.error('ERROR connectToMongo: ' + err.message);
  });
  db.once('open', function() {
    console.log('Connected to MongoDB');
    callback();
  });
}

connectToMongo(function() {
  app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
  });
});

module.exports = app;
