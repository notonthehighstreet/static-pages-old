var nothsLayout = require('../lib/noths-layout');

var PageBuilder = function(view, res, next, locals) {
    this.view = view;
    this.res = res;
    this.next = next;
    this.locals = locals || {};
};

PageBuilder.prototype.build = function(callback) {
    var self = this;

    this.res.render(this.view, this.locals, function(err, html) {
        if (err) {
            self.next(err);
            return;
        }

        var output = nothsLayout.render({
            content:    html,
            styles:     "",
            javascript: ""
        });

        callback(output);
    });
};

module.exports = PageBuilder;
