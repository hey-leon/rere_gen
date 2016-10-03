/**
 * this module is used for developing and runs the webpac dev server, connected
 * to webpack dashboard.
 */
const { run } = require('../libs');


/**
 * - builds project
 * - runs dev server with dashboard.
 */
run('npm', ['run', 'build'])
.then(() =>
  run('webpack-dashboard', [
    '--',
    'webpack-dev-server',
    '--config',
    `${__dirname}/webpack.config.js`,
    '--content-base', 'build/',
    '--hot', '--inline',
  ])
);
