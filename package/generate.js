const { render } = require('ejs');

const { log, error } = require('./log');
const { // promisified file system functions
  readFile,
  writeFile,
  readDir,
  writeDir,
  stats,
} = require('./file_system');


/**
 * recursive reading of template directory into a map
 * @param  {String} dir path to read
 * @returns {Promise} returns a promise resolving with a map of the directory path passed
 */
function read(dir) {
  const contents = new Map();

  return readDir(dir)
  .then(names => Promise.all(names.map(
    name => stats(`${dir}/${name}`)
    .then(stats => {
      if (stats.isFile()) { // is a template... parse it.
        return readFile(`${dir}/${name}`)
        .then(data => Promise.resolve(contents.set(name, data)));
      }

      if (stats.isDirectory()) { // is a directory... recurse.
        return read(`${dir}/${name}`)
        .then(subDir => Promise.resolve(contents.set(name, subDir)));
      }
    })
  )))
  .then(() => Promise.resolve(contents))
}


/**
 * recursive injection of the values into the templates
 * @param  {Map} contents of the template directory
 * @param  {Object} data to inject into the templates
 * @returns {Promise} returns a promise resolving with directory map of templates, post injection.
 */
function inject(contents, data) {
  const injected = new Map();

  for(const [k, v] of contents.entries()) {
    if (typeof(v) === 'string') { // is template... inject values.
      injected.set(k, render(v, data))
    }

    if (v instanceof Map) { // is directory... recurse.
      inject(v, data)
      .then(subInjected => injected.set(k, subInjected))
    }
  }

  return Promise.resolve(injected);
}


/**
 * recursive write of injected templates to directory passed.
 * @param  {Map} contents of the template directory post injection
 * @param  {String} dir to write files to.
 * @returns {Promise} returns promise resolving on task completion
 */
function write (contents, dir) {
  return writeDir(dir)
  .then(() => Promise.all([...contents].map( // convert map to array
    ([k, v]) => {
      if (typeof(v) === 'string') { // is template... write it.
        return writeFile(`${dir}/${k}`, v)
      }
      if (v instanceof Map) { // is directory... recurse.
        return write(v, `${dir}/${k}`)
      }
    }
  )))
}


/**
 * generates boiler plate in current working directory
 *
 * @param  {String} tpl of the boiler plate to generate
 * @param  {String} name to inject into the boiler.
 */
function generate (tpl, name) {
  const tplDir = `${__dirname}/../templates/${tpl}`
  const writeDir = `${process.cwd()}/${name}`

  log('Generating boiler...');

  read(tplDir)
  .then(contents => {
    log('Injecting data...')
    return inject(contents, { name })
  })
  .then(contents => {
    log('Writing files...')
    write(contents, writeDir)
  })
  .then(() => {
    log('Boiler generated')
  })
  .catch(error => error(error));
}


module.exports = generate;
