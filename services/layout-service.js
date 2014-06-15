var mustache = require('mustache');

exports.render = function(view) {
    return mustache.render(exports.layout, view);
};
