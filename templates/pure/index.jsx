/**
 * @module <%- name %> Component
 */
import React, { PropTypes, PureComponent } from 'react';
import styles from './styles';


/**
 * @type {PureComponent} <%- name %> PureComponent
 */
export default class <%- name %> extends PureComponent {
  constructor(props) {
    super(props)
    // TODO: specify initial state and bindings of <%- name %>
  }

  componentWillUnmount() {
    // TODO: specify cleanup of <%- name %>
  }

  render() {
    // TODO: specify design of <%- name %>
    return (
      <div />
    );
  }
}


<%- name %>.propTypes = {
  // TODO: specify the component propTypes of <%- name %>
};


<%- name %>.defaultProps = {
  // TODO: specify the component default props of <%- name %>
};
