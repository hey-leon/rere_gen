/**
 * @module manages the task of building the app.
 */
const { clean, dir, copy, bundle } = require('../libs');
const config = require('./webpack.config');

/**
 * performs tasks of:
 *  - clean app dir.
 *  - make app dir if !app dir
 *  - copy static assets.
 *  - build bundle.
 */
clean('build')
.then(() => dir('build'))
.then(() => copy('source/index.html', 'build'))
.then(() => copy('source/assets', 'build'))
.then(() => bundle(config))
.catch(console.log);

/*
  eslint
  no-console: 0,
*/
