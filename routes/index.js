var express = require('express');
var router = express.Router();
var PageBuilder = require('../lib/page-builder');

/* GET home page. */
router.get('/', function(req, res, next) {
    var pageBuilder = new PageBuilder('index', res, next);

    pageBuilder.build(function(html) {
        res.send(html);
    });
});

module.exports = router;
