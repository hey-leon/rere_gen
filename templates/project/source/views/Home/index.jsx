/**
 * @module Home Component
 */
import React, { PropTypes, PureComponent } from 'react';
import styles from './styles';

/**
 * @type {PureComponent} Home PureComponent
 */
export class Home extends PureComponent {
  /**
   * TODO: specify initial state and bindings of Home
   * executes on instantiation
   */
  constructor(props) {
    super(props)
    //
  }


  /**
   * TODO: specify setup of Home
   * executes post mount
   */
  componentDidMount() {
    //
  }


  /**
   * TODO: specify cleanup of Home
   * executes pre unmount
   */
  componentWillMount() {
    //
  }

  /**
   * TODO: specify design of Home
   * executes on render
   */
  render() {
    return (
      <div>Hello World, from ReRe :)</div>
    );
  }
}


/**
 * TODO: specify the component propTypes of Home
 * Home propTypes
 */
Home.propTypes = {
  //
};


/**
 * default export
 */
export default Home;
