import React from 'react';
import {connect} from 'react-redux';
import UserShow from './user_show';
import { getUser, follow, unfollow } from '../actions/user_actions';

const mSP = (state, ownProps) => {
    const defaultUser = {username: '', followings: '', followers: '', user_blurb: ''};
    const user = state.entities.users[ownProps.match.params.userId] || defaultUser;

  return {
    currentUser: state.session.currentUser,
    user
  };
};

const mDP = dispatch => {
  return {
    getUser: userId => dispatch(getUser(userId)),
    follow: follow => dispatch(follow(follow)),
    unfollow: followId => dispatch(unfollow(followId))
  };
};

export default connect(mSP, mDP)(UserShow);