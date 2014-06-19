var express = require('express');
var router = express.Router();
var layoutService = require('../services/layout-service');
var PageBuilder = require('page-builder');

router.get('/', function(req, res, next) {
    new PageBuilder('index', layoutService, res, next).render();
});

module.exports = router;
