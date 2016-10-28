/**
 * @module Welcome component
 */
import React, { PropTypes } from 'react';
import Anchor from 'views/Shared/Anchor';
import styles from './styles';


/**
 * @type {Function} Welcome Stateless Component
 */
export function Welcome (props) {
  const { userFakeLogIn } = props;
  return (
    <div className={styles.Welcome}>
      <h1>Hello World, from ReRe.</h1>
      <Anchor onClick={userFakeLogIn} to="/Home">
        Log A Fake User In...
      </Anchor>
    </div>
  );
}


/**
 * TODO: specify the component propTypes of Welcome
 * Welcome propTypes
 */
Welcome.propTypes = {
  userFakeLogIn: PropTypes.func,
};


/**
 * default export
 */
export default Welcome;
