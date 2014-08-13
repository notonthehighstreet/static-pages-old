var express = require('express');
var router = express.Router();
var PageBuilder = require('page-builder');

// Example route
router.get('/test', function(req, res, next) {
    // TODO: Extract these to view helpers
    var js = '<script>require(["/static-pages-assets/scripts/test.js"]);</script>';
    var styles = '<link rel="stylesheet" href="/static-pages-assets/stylesheets/test.css"/>';
    styles += '<link rel="stylesheet" href="/static-pages-assets/stylesheets/test-less.css"/>';

    new PageBuilder('test', res.locals.layout, res, next).
        setJavascript(js).
        setStyles(styles).
        render();
});

module.exports = router;
