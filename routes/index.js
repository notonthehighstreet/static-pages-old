var express = require('express');
var router = express.Router();
var layoutService = require('../services/layout-service');

var renderResponse = function(view, locals, req, res, next) {
    res.render(view, locals, function(err, html) {
        if (err) {
            next(err);
            return;
        }

        res.send(layoutService.getLayout());
    });
};

/* GET home page. */
router.get('/', function(req, res, next) {
    renderResponse('index', { title: 'test' }, req, res, next);
});

module.exports = router;
