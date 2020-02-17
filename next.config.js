const withCSS = require('@zeit/next-css');
const { option } = require('./config.js');

// module.exports = withCSS({});

const assetPrefix = process.env.NODE_ENV === `production` ? option.assetPrefix.aws : option.assetPrefix.dev;
module.exports = withCSS({
    assetPrefix: assetPrefix,
    env: {
        ASSET_PREFIX: assetPrefix
    }
});
