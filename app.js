var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var layoutFetcher = require('layout-fetcher');

var PageBuilder = require('./lib/page-builder');
var appConfig = require('./app-config');
var routes = require('./routes/index');

var layoutService = require('./services/layout-service');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());

var loggerMode = (app.get('env') === 'development') ? 'dev' : '';
app.use(logger(loggerMode));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(layoutFetcher({
    url:         appConfig.nothsLayoutUrl,
    cacheLayout: appConfig.cacheLayout,
    done:        function(layout) {
        layoutService.layout = layout;
    }
}));

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

module.exports = app;
