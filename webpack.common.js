const path = require("path");
const Dotenv = require('dotenv-webpack');
const  webpack  = require("webpack");

module.exports = {
  entry: "./app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },

  plugins: [
    new Dotenv()
  ],

  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        include: [
          path.resolve(__dirname, 'node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css'),
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
        },
        {
          
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