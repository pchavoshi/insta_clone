import React from 'react';
import { connect } from 'react-redux';
import Nav from './nav';
import { logout } from '../../actions/session_actions';

const mSP = state => {
  return {
    currentUser: state.entities.users[state.session]
  };
};

const mDP = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mSP, mDP)(Nav);
