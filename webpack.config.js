const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    test: './src/test.js'
  // entry: {
  //   javascript: "./index.js",
  //   html: ["./index.html", "./2-1.html", "./maps/detail.html"]
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // {
      //   test: /\.html$/,
      //   loader: "file-loader?name=[path][name].[ext]",
      // },
      {
        test: /\.css$/,
        //use: 'css-loader'
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new HtmlWebpackPlugin({template: './src/func.html', filename: 'func.html'}),
    new HtmlWebpackPlugin({template: './src/2-1.html', filename: '2-1.html'}),
    new HtmlWebpackPlugin({template: './src/test.html', filename: 'test.html'}),
    new ExtractTextPlugin('styles.css')
  ]
};