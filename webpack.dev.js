
const path = require("path");
const { merge } = require('webpack-merge');
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
       // content will be served from public directory
       static : {
        directory : path.join(__dirname, "public/")
      },
      // contentBase: path.join(__dirname, "public"),
      hot: "only",
  }
});