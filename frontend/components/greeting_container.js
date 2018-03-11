import React from 'react';
import {connect} from 'react-redux';
import Greeting from './greeting';
import { logout } from '../actions/session_actions';
import { getUser, follow, unfollow } from '../actions/user_actions'; 

const mSP = state => {
  return {
    currentUser: state.session.currentUser, 
    user: state.entities.user, 
  };
};

const mDP = dispatch => {
  return {
    logout: () => dispatch(logout()), 
    getUser: userId => dispatch(getUser(userId)), 
    follow: follow => dispatch(follow(follow)), 
    unfollow: followId => dispatch(unfollow(followId))
  };
};

export default connect(mSP, mDP)(Greeting);
