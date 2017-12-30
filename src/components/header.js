import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions/index';

class Header extends Component {
  authButton() {
    if (this.props.authenticated) {
      return (
        <button
          className="btn"
          onClick={() => {
            this.props.authenticate(false);
          }}
        >
          Sign out
        </button>
      );
    }

    return (
      <button
        className="btn"
        onClick={() => {
          this.props.authenticate(true);
        }}
      >
        Sign in
      </button>
    );
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
        <div className="navbar-nav">
          <Link to="/" className="nav-item nav-link">
            Home
          </Link>
          <Link to="/resources" className="nav-item nav-link">
            Resources
          </Link>
        </div>
        {this.authButton()}
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.authenticated };
}

export default connect(mapStateToProps, actions)(Header);
