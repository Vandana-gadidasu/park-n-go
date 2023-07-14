const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { baseConfig } = require("./webpack.base");

const prodConfig = merge({}, baseConfig, {
  mode: "production",
  stats: {
    colors: true,
    children: true,
  },
  optimization: {
    minimize: true,
    usedExports: true,
    moduleIds: "deterministic",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
});

module.exports = prodConfig;
