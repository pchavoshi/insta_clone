import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import { getUser } from '../../../actions/user_actions';

const mSP = (state, ownProps) => {
  const defaultUser = { username: '' };
  const user = state.entities.users[ownProps.match.params.userId] || defaultUser;

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
