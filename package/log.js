const { blue, yellow, red } = require('chalk');

const tag = blue('[ReRe] ');
const errorTag = red('[ReRe]');

function log (contents) {
  console.log(tag + yellow(contents));
}

function error (contents) {
  console.log(tag + red(contents));
}

module.exports = { log, error };
