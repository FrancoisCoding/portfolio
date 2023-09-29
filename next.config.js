const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  webpack(config, { dev }) {
    if (!dev) {
      config.optimization.minimize = true;
      if (Array.isArray(config.optimization.minimizer)) {
        config.optimization.minimizer.push(new CssMinimizerPlugin());
      } else {
        config.optimization.minimizer = [new CssMinimizerPlugin()];
      }
    }

    // You may need to update the configuration further based on your project needs.

    return config;
  },
};
