/**
 * @module <%- name %> Component
 */
import React, { PropTypes, PureComponent } from 'react';
import styles from './styles';


/**
 * @type {PureComponent} <%- name %> PureComponent
 */
export class <%- name %> extends PureComponent {
  /**
   * TODO: specify initial state and bindings of <%- name %>
   * executes on instantiation
   */
  constructor(props) {
    super(props)
    //
  }


  /**
   * TODO: specify setup of <%- name %>
   * executes post mount
   */
  componentDidMount() {
    //
  }


  /**
   * TODO: specify cleanup of <%- name %>
   * executes pre unmount
   */
  componentWillMount() {
    //
  }

  /**
   * TODO: specify design of <%- name %>
   * executes on render
   */
  render() {
    return (
      <div />
    );
  }
}


/**
 * TODO: specify the component propTypes of <%- name %>
 * <%- name %> propTypes
 */
<%- name %>.propTypes = {
  //
};


/**
 * TODO: specify the component default props of <%- name %>
 * <%- name %> propTypes
 */
<%- name %>.defaultProps = {
  //
};


/**
 * default export
 */
export default <%- name %>;
