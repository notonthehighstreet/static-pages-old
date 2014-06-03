var nothsLayout = require('../lib/noths-layout');

var PageBuilder = function(view, res, next) {
    this.view = view;
    this.res = res;
    this.next = next;
    this.locals = {};
};

PageBuilder.prototype.build = function(callback) {
    this.res.render(this.view, this.locals, function(err, html) {
        if (err) {
            next(err);
            return;
        }

        callback(nothsLayout.layout);
    });
};

module.exports = PageBuilder;
