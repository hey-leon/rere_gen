const ExtractText = require("extract-text-webpack-plugin");

// TODO add rule for sourcemaps


const js = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: 'babel-loader',
};


const json = {
  test: /\.json$/,
  use: 'json-loader',
};


const css = {
  loader: 'css-loader',
  query: {
    localIdentName: '[local]_[hash:base64]',
    sourceMap: true,
    modules: true,
  }
}


const sass = {
  loader: 'sass-loader',
  query: {
    sourceMap: true,
  }
}


const styles = {
  test: /\.s?css$/,
  loader: ExtractText.extract({
    fallbackLoader: 'style-loader',
    loader: [css, sass],
  }),
}


module.exports = [js, json, styles];