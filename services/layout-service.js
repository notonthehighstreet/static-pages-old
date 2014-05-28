var request = require('request');
var appConfig = require('../app-config');

const LAYOUT_URL = 'http://www.notonthehighstreet.com/';

var layout;

var useCachedLayout = function() {
    return appConfig.cacheLayout && layout;
};

var requestLayout = function(req, res, next) {
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
            layout = layoutBody;
        }

        next();
    });
};

var getLayout = function() {
    return layout;
};

module.exports = {
    requestLayout: requestLayout,
    getLayout: getLayout
};
