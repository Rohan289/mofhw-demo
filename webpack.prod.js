const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const { merge } = require('webpack-merge');
const common = require("./webpack.common.js");

module.exports = merge(common, {
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.min.js"
  },
  mode: "production",
  optimization: { 
    minimize: true,
    minimizer: [new TerserPlugin()],
   }
});