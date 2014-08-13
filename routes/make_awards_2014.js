var express = require('express');
var router = express.Router();

var js = '<script>require(["/static-pages-assets/scripts/make_awards_2014.js"]);</script>';
var styles = '<link rel="stylesheet" href="/static-pages-assets/stylesheets/make_awards_2014.css"/>';

router.get('/', function(req, res, next) {
    res.render('make_awards_2014/show', {
        styles: styles,
        javascript: js
    });
});

router.get('/apply', function(req, res, next) {
    res.render('make_awards_2014/apply', {
        styles: styles,
        javascript: js
    });
});

module.exports = router;
