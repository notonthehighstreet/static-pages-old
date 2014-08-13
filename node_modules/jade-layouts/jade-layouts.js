var jade = require('jade');

exports.renderFile = function(path, options, callback) {
    jade.renderFile(path, options, function(err, content) {
        if (err) return callback(err);

        options.content = content;
        callback(null, options.layout.render(options));
    });
};
