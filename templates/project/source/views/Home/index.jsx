/**
 * @module Home component
 */
import React, { PropTypes } from 'react';
import Anchor from 'views/Shared/Anchor';
import styles from './styles';


/**
 * @type {Function} Home Stateless Component
 */
export default function Home(props) {
  const { userInit } = props;
  return (
    <div className={styles.Home}>
      <h1>You are now in a authorised area</h1>
      <Anchor onClick={() => userInit()} to="/Welcome">
        Log Your Fake User Out...
      </Anchor>
    </div>
  );
}


/**
 * Home propTypes
 */
Home.propTypes = {
  userInit: PropTypes.func,
};
