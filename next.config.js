const withCSS = require('@zeit/next-css');
const { assetPrefix } = require('./config.js');

// module.exports = withCSS({});
module.exports = withCSS({
    assetPrefix: process.env.NODE_ENV === `production` ? assetPrefix.ghp : assetPrefix.dev
});
