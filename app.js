var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var lessMiddleware = require('less-middleware');
var bodyParser = require('body-parser');
var layoutFetcher = require('layout-fetcher');

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
app.use(lessMiddleware(path.join(__dirname, 'public')));

var publicDirectory = (app.get('env') === 'development') ? 'public' : 'build';
app.use(express.static(path.join(__dirname, publicDirectory)));

var layoutUrl = process.env.LAYOUT || appConfig.nothsLayoutUrl;
var cacheLayout = appConfig.cacheLayout;

if (process.env.CACHE_LAYOUT) {
    cacheLayout = (process.env.CACHE_LAYOUT === "true") ? true : false;
}

app.use(layoutFetcher({
    url:         layoutUrl,
    cacheLayout: cacheLayout,
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
