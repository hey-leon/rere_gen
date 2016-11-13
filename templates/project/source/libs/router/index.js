/*
 * this method returns a react-router onEnter middleware 
 * which verifies whether a member of state exists, if not,
 * it redirects the user.
 * see: https://github.com/ReactTraining/react-router/blob/master/docs/API.md#onenternextstate-replace-callback
 * 
 * @param {Object} config of the verify method
 * @param {Store} config.store of redux to search (must be immutable.js)
 * @param {Array|String} config.path to the member of the stores state
 * @param {String} config.redirect is the location to redirect the user to 
 */
export function verify({ store, path, redirect }) {
  path = typeof path !== Array ? path : [path];

  /**
   * your freshly minted authorising function.
   */
  return function (router, goto) {
    const validRoute = store.getState()
                       .hasIn(path);
    
    if(!validRoute) {
      goto(redirect);
    }
  }
}