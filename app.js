var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var PageBuilder = require('./lib/page-builder');
var appConfig = require('./app-config');
var routes = require('./routes/index');

var nothsLayout = require('./lib/noths-layout');
// TODO: This could be pulled into an initializer
nothsLayout.cacheLayout = appConfig.cacheLayout;
nothsLayout.url = appConfig.nothsLayoutUrl;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(nothsLayout.fetchLayout);

app.use('/', routes);

/// catch 404 and forward to error handler
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

        new PageBuilder('error', res, next, {
            message: err.message,
            error: err
        }).build(function(html) {
            res.send(html);
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);

    new PageBuilder('error', res, next, {
        message: err.message,
        error: {}
    }).build(function(html) {
        res.send(html);
    });
});

module.exports = app;
