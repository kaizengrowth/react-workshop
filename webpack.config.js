require('dotenv').load({ silent: true })

var webpack = require('webpack')
var env = process.env
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var patternsUrl = env.PATTERNS_URL

module.exports = {
  entry: path.join(__dirname, 'app', 'app.js'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: path.join('js', '[hash]', 'bundle-[hash].js')
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: path.join(__dirname, 'app'),
      loader: 'babel-loader',
      exclude: /node_modules/,
      // define presets and plugins in .babelrc
    }, {
      test: /\.scss$/,
      include: path.join(__dirname, 'app', 'assets', 'stylesheets'),
      loader: 'style!css!sass'
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      include: path.join(__dirname, 'app', 'assets', 'images'),
      loader: 'file'
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(env.VERSION),
      'process.env': {
        NODE_ENV: JSON.stringify(env.NODE_ENV),
      }
    }),
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'index.html',
      inject: true,
      template: path.join(__dirname, 'app', 'layouts', 'index.ejs'),
      patternsUrl,
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      _: 'lodash'
    }),
    new ExtractTextPlugin('css/styles-[hash].css'),
  ]
}
