var express = require('express');
var router = express.Router();

router.get('/test', function(req, res, next) {
    res.render('test', {
        styles: '<link rel="stylesheet" href="/static-pages-assets/stylesheets/test.css"/>',
        javascript: '<script>require(["/static-pages-assets/scripts/test.js"]);</script>'
    });
});

module.exports = router;
