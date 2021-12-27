const path = require("path");
const Dotenv = require('dotenv-webpack');
const  webpack  = require("webpack");

module.exports = {
  entry: "./app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  plugins : [
    new webpack.DefinePlugin({
      'process.env':{  
        'BACKEND_BASE_URL': JSON.stringify(process.env.BACKEND_BASE_URL),
      }
    })
  ],

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
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  }
};