var express = require('express');
var router = express.Router();
var nothsLayout = require('../lib/noths-layout');
var PageBuilder = require('../lib/page-builder');

router.get('/', function(req, res, next) {
    new PageBuilder('index', nothsLayout, res, next).render();
});

module.exports = router;
