import React from 'react';
import { connect } from 'react-redux';
import Greeting from './feed';
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

export default connect(mSP, mDP)(Greeting);
