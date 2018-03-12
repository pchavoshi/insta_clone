import React from 'react';
import FollowToggle from './follow_toggle';
import { connect } from 'react-redux';
import { follow, unfollow } from '../actions/user_actions';
import {withRouter} from 'react-router-dom';

const mSP = (state, props)  => {
  return ({
    user: props.user,
    currentUser: state.entities.users[state.session]
  });
};

const mDP = dispatch => {
  return ({
    follow: newFollow => dispatch(follow(newFollow)),
    unfollow: followId => dispatch(unfollow(followId))
  });
};

export default connect(mSP, mDP)(FollowToggle);
