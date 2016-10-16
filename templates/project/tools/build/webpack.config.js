const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extracted = new ExtractTextPlugin('bundle.css');
const config = {
  entry: './source/main.jsx',
  output: {
    path: 'build',
    filename: 'bundle.js',
  },
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
  plugins: [extracted]
};

module.exports = config;
