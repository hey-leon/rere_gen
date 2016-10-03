/**
 * @module runs a mocha test suite (built by webpack) with nyc
 * (previously istanbul api), and performs a post cleanup.
 */
const { bundle, run, clean } = require('../libs');
const config = require('./webpack.config');


/**
 * performs the task of:
 *  - bundle tests.
 *  - run ava with nyc.
 *  - clean up tmp direrctories.
 */
bundle(config)
.then(() =>
  run('nyc', ['ava', 'tools/test/temp/tests.bundle.js'])
)
.then(status => {
  process.exitCode = status;
  return clean('.nyc_output')
})
.then(() => clean('tools/test/temp'))
.catch(console.log);
