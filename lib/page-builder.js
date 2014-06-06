var PageBuilder = function(view, layout, res, next) {
    this.view = view;
    this.layout = layout;
    this.res = res;
    this.next = next;
    this.locals = {};
};

PageBuilder.prototype.build = function(callback) {
    var self = this;

    this.res.render(this.view, this.locals, function(err, html) {
        if (err) return self.next(err);

        var output = self.layout.render({
            content:    html,
            styles:     "",
            javascript: ""
        });

        callback(output);
    });
};

PageBuilder.prototype.render = function() {
    var self = this;

    this.build(function(html) {
        self.res.send(html);
    });
};

PageBuilder.prototype.setLocals = function(locals) {
    this.locals = locals;
    return this;
};

module.exports = PageBuilder;
