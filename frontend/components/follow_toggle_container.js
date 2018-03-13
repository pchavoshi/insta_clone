import React from 'react';
import FollowToggle from './follow_toggle';
import { connect } from 'react-redux';
import { follow, unfollow, getUser } from '../actions/user_actions';
import {withRouter} from 'react-router-dom';

const mSP = (state, ownProps)  => {
  return ({
    user: ownProps.user,
    currentUser: state.entities.users[state.session]
  });
};

const mDP = dispatch => {
  return ({
    follow: newFollow => dispatch(follow(newFollow)),
    unfollow: unFollow => dispatch(unfollow(unFollow)),
    getUser: userId => dispatch(getUser(userId)),
  });
};

export const FollowToggleContainer =  withRouter(connect(mSP, mDP)(FollowToggle));
