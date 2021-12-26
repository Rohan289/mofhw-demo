const path = require("path");

module.exports = {
  entry: "./app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },{
          
            test: /\.(scss|css)$/,
            exclude: /node_modules/,
            use : ['style-loader', 'css-loader', 'less-loader']        
      }
    ],
  }
};