var env = process.env.NODE_ENV || 'development';

var config = {
    cacheLayout:    false,
    nothsLayoutUrl: 'http://www.notonthehighstreet.com/layout',
    nothsApiUri:    'https://www.notonthehighstreet.com/api',
    loggerMode:     '',
    publicDir:      'build'
};

if (env === 'development') {
    config.cacheLayout = true;
    config.loggerMode = 'dev';
    config.publicDir = 'public';
}

if (process.env.CACHE_LAYOUT) {
    config.cacheLayout = (process.env.CACHE_LAYOUT === "true") ? true : false;
}

if (process.env.LAYOUT) {
    config.nothsLayoutUrl = process.env.LAYOUT;
}

if (process.env.NOTHS_API_TOKEN) {
    config.nothsApiToken = process.env.NOTHS_API_TOKEN;
} else {
    throw "You must provide a NOTHS_API_TOKEN";
}

module.exports = config;
