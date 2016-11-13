/**
 * @module <%- name %> Root Component
 */
import { PropTypes, PureComponent, cloneElement } from 'react';
import { connect } from 'react-redux';
import './styles';

import actions from 'logic/actions';

/**
 * this component is the sole connection to the redux
 * store. while this isnt the most performance
 * oriented method of subscribing to state it is the
 * quickest for development. I have also worked on commercial
 * projects of scale that subscribe in this fashion with
 * little performance losses (none of note yet).
 * 
 * @type {PureComponent} Root PureComponent
 */
export class Root extends PureComponent {
  render() {
    const { children, ...rest } = this.props;
    return cloneElement(children, rest);
  }
}


/**
 * Root propTypes
 */
Root.propTypes = {
  children: PropTypes.element,
};


/**
 * returns redux state as mutable
 * on props
 */
const props = state => state.toJS();


/**
 * default export
 */
export default connect(props, actions)(Root);
