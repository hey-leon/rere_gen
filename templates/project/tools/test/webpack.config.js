const ExtractTextPlugin = require("extract-text-webpack-plugin");
const nodeExternals = require('webpack-node-externals');

const extracted = new ExtractTextPlugin('bundle.css');
const externals = nodeExternals();
const config = {
  target: 'node',
  devtool: 'inline-source-map',
  entry: `${__dirname}/setup.js`,
  output: {
    path: `${__dirname}/temp`,
    filename: 'tests.bundle.js',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.s?css$/,
        loaders: ExtractTextPlugin.extract('style', ['css?sourceMap', 'sass?sourceMap']),
      },
    ],
  },
  resolve: {
    extensions: [
      '', '.js', '.jsx', '.json', '.scss',
    ],
  },
  sassLoader: { includePaths: ['./node_modules'] },
  plugins: [extracted],
  devtool: 'inline-source-map',
  externals: [externals],
};

module.exports = config;
