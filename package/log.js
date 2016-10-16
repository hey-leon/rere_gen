const { blue, red } = require('chalk');

const tag = blue('[ReRe] ');
const errorTag = red('[ReRe] ');

function log (contents) {
  console.log(tag + contents);
}

function error (contents) {
  console.log(errorTag + red(contents));
}

module.exports = { log, error };
