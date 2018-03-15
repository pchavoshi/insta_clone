import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import { getUser } from '../../../actions/user_actions';

const mSP = (state, ownProps) => {
  const defaultUser = { username: '' };
  const uid = ownProps.uid || ownProps.match.params.userId;
  const user = state.entities.users[uid] || defaultUser;

  return {
    currentUser: state.entities.users[state.session],
    user,
    photos: state.entities.photos
  };
};

const mDP = dispatch => {
  return {
    getUser: userId => dispatch(getUser(userId))
  };
};

export default connect(mSP, mDP)(Profile);
