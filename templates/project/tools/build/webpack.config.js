const ExtractText = require('extract-text-webpack-plugin');
const resolve = require('../webpack/resolve');
const rules = require('../webpack/rules');
const webpack = require('webpack');


const optimize = new webpack.optimize.UglifyJsPlugin();
const extracted = new ExtractText('bundle.css');
const env = new webpack.DefinePlugin({
  'process.env':{
    'NODE_ENV': JSON.stringify('production'),
  },
})


const config = {
  target: 'web',

  entry: ['babel-polyfill', './source/main.jsx'],
  output: {
    path: 'build',
    filename: 'bundle.js',
  },

  module: { rules },
  resolve,

  plugins: [extracted, optimize, env],

  devtool: 'cheap-module-source-map',

};


module.exports = config;
