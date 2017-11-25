var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: ['babel-polyfill', 'whatwg-fetch', './app']
  },
  output: {
    path: path.join(__dirname, '.', 'public', 'js'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loaders: ['babel-loader'],
      exclude: path.join(__dirname, 'node_modules')
    }, {
      test: /\.(css|scss|sass)$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    }]
  }
};