import React from 'react';
import {connect} from 'react-redux';
import Greeting from './greeting';
import { logout } from '../actions/session_actions';

const mSP = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mDP = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mSP, mDP)(Greeting);
