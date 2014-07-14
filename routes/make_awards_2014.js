var express = require('express');
var router = express.Router();
var layoutService = require('../services/layout-service');
var PageBuilder = require('page-builder');

var renderMakeAwardsPage = function(view, res, locals, next) {
    var js = '<script>require(["/static-pages-assets/scripts/make_awards_2014.js"]);</script>';
    var styles = '<link rel="stylesheet" href="/static-pages-assets/stylesheets/make_awards_2014.css"/>';

    new PageBuilder(view, layoutService, res, next).
        setLocals(locals).
        setJavascript(js).
        setStyles(styles).
        render();
};

router.get('/', function(req, res, next) {
    renderMakeAwardsPage('make_awards_2014/show', res, {}, next);
});

router.get('/apply', function(req, res, next) {
    renderMakeAwardsPage('make_awards_2014/apply', res, {}, next);
});

module.exports = router;
