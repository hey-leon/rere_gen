/**
 * @module exposes a lib for setting up a js dom.
 */
const { jsdom } = require('jsdom');


/**
 * jsdom document and window
 */
const document = jsdom('<!DOCTYPE html><html><body></body></html>');
const window = document.defaultView;


/**
 * helper: assigns a objects properties to another
 * @param  {Object} props  the object with the properties to assign.
 * @param  {Object} object the object to recieve the new properties.
 */
function propogate(props, object) {
  Object.keys(props)
        .forEach(
          key => {
            if (props.hasOwnProperty(key) && !object[key]) {
              object[key] = props[key];
            }
          }
        );
}


module.exports = { document, window, propogate };
