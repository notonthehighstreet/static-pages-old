var request = require('request');

const LAYOUT_URL = 'http://www.notonthehighstreet.com/';

exports.fetchLayout = function(req, res, next) {
    if (useCachedLayout()) {
        next();
        return;
    }

    var requestOptions = {
        url: LAYOUT_URL,
        // Pass cookies from the client through to the layout service
        headers: { cookie: req.headers.cookie }
    }

    request(requestOptions, function (layoutError, layoutRes, layoutBody) {
        // Provide cookies to the client provided by the layout service
        res.setHeader("Set-Cookie", layoutRes.headers['set-cookie']);

        if (!layoutError && layoutRes.statusCode == 200) {
            exports.layout = layoutBody;
        }

        next();
    });
};

exports.cacheLayout = false;

var useCachedLayout = function() {
    return exports.cacheLayout && exports.layout;
};
