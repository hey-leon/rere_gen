const ExtractText = require('extract-text-webpack-plugin');
const externals = require('webpack-node-externals');
const resolve = require('../webpack/resolve');
const rules = require('../webpack/rules');

const extracted = new ExtractText('bundle.css');
const external = externals();


const config = {
  target: 'node',

  entry: ['babel-polyfill', `${__dirname}/setup.js`],
  output: {
    path: `${__dirname}/temp`,
    filename: 'tests.bundle.js',
  },

  module: { rules },
  resolve,

  externals: [external],
  plugins: [extracted],

  devtool: 'inline-source-map',

};


module.exports = config;
