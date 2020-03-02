const withCSS = require("@zeit/next-css");
const { option } = require("./config.js");

const assetPrefix =
  process.env.NODE_ENV === `production`
    ? option.assetPrefix.aws
    : option.assetPrefix.dev;
module.exports = withCSS({
  distDir: "_next",
  pageExtensions: ["jsx", "js"],
  generateBuildId: async () => {
    // When process.env.MY_BUILD_ID is undefined we fall back to the default
    if (process.env.BUILD_ID) {
      return process.env.BUILD_ID;
    } else {
      return `${new Date().getTime()}`;
    }
  },
  exportTrailingSlash: true,
  assetPrefix: assetPrefix,
  env: {
    ASSET_PREFIX: assetPrefix
  },
  exportPathMap: function() {
    return {
      "/": { page: "/" }
    };
  }
});
