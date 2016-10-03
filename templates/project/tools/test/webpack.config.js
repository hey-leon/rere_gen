const nodeExternals = require('webpack-node-externals');

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
        loaders: ['file?name=bundle.css', 'extract', 'css', 'sass'],
      },
    ],
  },
  resolve: {
    extensions: [
      '', '.js', '.jsx', '.json', '.scss',
    ],
  },
  devtool: 'inline-source-map',
  externals: [externals],
};

module.exports = config;
