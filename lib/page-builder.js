var PageBuilder = function(view, layout, res, next) {
    this.view = view;
    this.layout = layout;
    this.res = res;
    this.next = next;
    this.locals = {};
};

PageBuilder.prototype.render = function() {
    var self = this;

    this.res.render(this.view, this.locals, function(err, html) {
        if (err) {
            self.next(err);
            return;
        }

        var output = self.layout.render({
            content:    html,
            styles:     "",
            javascript: ""
        });

        self.res.send(output);
    });
};

PageBuilder.prototype.setLocals = function(locals) {
    this.locals = locals;
    return this;
};

module.exports = PageBuilder;
