var env = process.env.NODE_ENV || 'development';

var config = {
    cacheLayout: false
};

if (env == 'development') {
    config.cacheLayout = true;
}

module.exports = config;
