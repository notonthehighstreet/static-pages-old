var env = process.env.NODE_ENV || 'development';

var config = {
    cacheLayout: false,
    nothsLayoutUrl: 'http://www.notonthehighstreet.com/layout'
};

if (env == 'development') {
    config.cacheLayout = true;
}

module.exports = config;
