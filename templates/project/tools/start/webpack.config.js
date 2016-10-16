const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Dashboard = require('webpack-dashboard/plugin');

const extracted = new ExtractTextPlugin('bundle.css');
const dashboard = new Dashboard();
const config = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080/',
    'webpack/hot/dev-server',
    './source/main.jsx',
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract('style', ['css?sourceMap', 'sass?sourceMap']),
      },
    ],
  },
  resolve: {
    extensions: [
      '', '.js', '.jsx', '.json', '.scss',
    ],
  },
  sassLoader: { includePaths: ['./node_modules'] },
  plugins: [extracted, dashboard],
};

module.exports = config;
