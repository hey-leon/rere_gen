const FS = require('fs');


/**
 * creates a folder
 * @param  {String} path description
 * @returns {Promise} returns a promise which resolves on task completion.
 */
function readFile (path) {
  return new Promise(resolve => {
    FS.readFile(path, 'utf8', (err, data) => {
      if (err) throw err;
      resolve(data);
    });
  });
}


/**
 * creates a folder
 * @param  {String} path description
 * @param  {String} data to write
 * @returns {Promise} returns a promise which resolves on task completion.
 */
function writeFile (path, data) {
  return new Promise(resolve => {
    FS.writeFile(path, data, err => {
      if (err) throw err;
      resolve();
    });
  });
}


/**
 * creates a folder
 * @param  {String} path description
 * @returns {Promise} returns a promise which resolves on task completion.
 */
function readDir (path) {
  return new Promise(resolve => {
    FS.readdir(path, (err, names) => {
      if (err) throw err;
      resolve(names);
    });
  });
}


/**
 * creates a folder
 * @param  {String} path description
 * @returns {Promise} returns a promise which resolves on task completion.
 */
function writeDir (path) {
  return new Promise(resolve => {
    FS.mkdir(path, (err, path) => {
      if (err) throw err;
      resolve(path);
    });
  });
}


/**
 * creates a folder
 * @param  {String} path description
 * @returns {Promise} returns a promise which resolves on task completion.
 */
function stats (path) {
  return new Promise(resolve => {
    FS.stat(path, (err, stats) => {
      if (err) throw err;
      resolve(stats);
    });
  });
}


module.exports = { readDir, writeDir, readFile, writeFile, stats };
