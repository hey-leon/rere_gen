/**
 * @module runs a mocha test suite (built by webpack) with nyc
 * (previously istanbul api), and performs a post cleanup.
 */
const { run } = require('../libs');


run('watch', ['npm run test:once', 'source']);
