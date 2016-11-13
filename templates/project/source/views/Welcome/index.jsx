/**
 * @module Welcome component
 */
import React, { PropTypes } from 'react';
import Anchor from 'views/Shared/Anchor';
import styles from './styles';


/**
 * @type {Function} Welcome Stateless Component
 */
export default function Welcome(props) {
  const { userMock } = props;
  return (
    <div className={styles.Welcome}>
      <h1>Hello World, from ReRe.</h1>
      <Anchor onClick={() => userMock()} to="/Home">
        Log A Fake User In...
      </Anchor>
    </div>
  );
}


/**
 * Welcome propTypes
 */
Welcome.propTypes = {
  userMock: PropTypes.func,
};