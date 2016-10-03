const webpack = require('webpack');


/**
 * builds a webpack bundle.
 * @param {Object} config the bundle config
 * @returns {Promise} returns a promise which resolves on task completion.
 */
function bundle(config) {
  return new Promise(
    resolve => webpack(config)
    .run(err => {
      if (err) throw err;
      resolve();
    })
  );
}

module.exports = bundle;
