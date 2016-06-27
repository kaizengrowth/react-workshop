var path = require('path')
var webpack = require('webpack')

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/**/*.js'
    ],

    preprocessors: {
      // add webpack as preprocessor
      'app/**/*.js': ['webpack', 'sourcemap'],
      'test/**/*.js': ['webpack', 'sourcemap']
    },

    webpack: { //kind of a copy of your webpack config
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        loaders: [{
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: path.resolve(__dirname, 'node_modules'),
        }, {
          test: /\.scss$/,
          include: path.join(__dirname, 'app', 'assets', 'stylesheets'),
          loader: 'style!css!sass'
        }, {
          test: /\.json$/,
          loader: 'json',
        }, ]
      },
      plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery',
          _: 'lodash'
        })
      ],
      externals: {
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
        'react/addons': true,
      }
    },

    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    },

    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-sourcemap-loader',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-spec-reporter'
    ],
    reporters: ['spec'],
    specReporter: {
      suppressErrorSummary: false,
      suppressFailed: false,
      suppressPassed: true,
      suppressSkipped: false,
      showSpecTiming: false
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
  })
};
