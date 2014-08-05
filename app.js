#!/usr/bin/env node
var debug = require('debug')('static-pages');
var app = require('./express');

var http = require('http');
var https = require('https');

http.globalAgent.maxSockets = 500;
https.globalAgent.maxSockets = 500;

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'));
