var express = require('express');
var router = express.Router();
var nothsLayout = require('../lib/noths-layout');

var renderResponse = function(view, locals, req, res, next) {
    res.render(view, locals, function(err, html) {
        if (err) {
            next(err);
            return;
        }

        res.send(nothsLayout.layout);
    });
};

/* GET home page. */
router.get('/', function(req, res, next) {
    renderResponse('index', { title: 'test' }, req, res, next);
});

module.exports = router;
