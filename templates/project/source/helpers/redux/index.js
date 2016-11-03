/**
 * takes a namespace and a set of operators (core) and returns a reducer
 * that executes the operation when action.type === operator fn() name.
 * @param {String} namespace that the core operators are prepended with
 * @param {Object} core includes all of the reducers operators.
 * @returns {Function} that is a pure reducer.
 */
export function createReducer(namespace, core) {
  // error on namespace !== string
  if (typeof namespace !== 'string') {
    throw new Error(
      'namespace should should a unique string to identify this section of state'
    );
  }

  // error on !core#${namespace}Init
  if (typeof core[`${namespace}Init`] !== 'function') {
    throw new Error(
      `core#${namespace}Init must exist (and should return reducers initial state)`
    );
  }


  /**
   * you're freshly minted reducer :).
   */
  return function reducer(state = core[`${namespace}Init`](), { type, data }) {
    if (typeof core[type] !== 'function') {
      return state;
    }
    return core[type](state, data);
  };
}
