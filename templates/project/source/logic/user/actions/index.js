/**
 * @module user actions
 */


/**
 * initialises user state
 */
export const userInit = () => ({
  type: 'userInit',
});


/**
 * sets user state
 */
export const userSet = newState => ({
  type: 'userInit',
  data: { newState },
});


/**
 * sets a segment of user state
 */
export const userSetIn = (namespace, segment) => ({
  type: 'userInit',
  data: {
    namespace,
    segment,
  },
});


/**
 * sets a segment of user state
 */
export const userMergeIn = (namespace, segment) => ({
  type: 'userInit',
  data: {
    namespace,
    segment,
  },
});


// THIS ONE IS JUST FOR SHOW
export const userFakeLogIn = () => ({
  type: 'userSet',
  data: {
    newState: {
      _id: 123456,
    }
  }
})


// THIS ONE IS JUST FOR SHOW
export const userFakeLogOut = () => ({
  type: 'userInit',
})
