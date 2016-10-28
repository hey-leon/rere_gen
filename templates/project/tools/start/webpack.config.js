const ExtractText = require('extract-text-webpack-plugin');
const Dashboard = require('webpack-dashboard/plugin');
const resolve = require('../webpack/resolve');
const rules = require('../webpack/rules');

const extracted = new ExtractText('bundle.css');
const dashboard = new Dashboard();


const config = {
  target: 'web',

  entry: ['babel-polyfill', './source/main.jsx'],

  devServer: {
    historyApiFallback: true,
    contentBase: "build",
    compress: true,
  },

  module: { rules },
  resolve,

  plugins: [extracted, dashboard],

  devtool: 'inline-source-map',
  
};


module.exports = config;
