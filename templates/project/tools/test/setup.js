/**
 * @module compiles with webpack to the test bundle
 */


/**
 * import js dom
 */
const { document, window, propogate } = require('./dom');


global.document = document;
global.window = window;
global.navigator = {
  userAgent: 'node.js',
};


/**
 * propogate windows properties etc, directly onto global.
 */
propogate(window, global);


/**
 * gather all modules ending in spec.
 */
const specs = require.context('../../source', true, /\/spec\.jsx?$/);
specs.keys().forEach(specs);
