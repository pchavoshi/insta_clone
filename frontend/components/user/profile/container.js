import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import { getUser } from '../../../actions/user_actions';
import { openModal } from '../../../actions/modal_actions';

const mSP = (state, ownProps) => {
  const defaultUser = { username: '' };
  const user =
    state.entities.users[ownProps.match.params.userId] || defaultUser;

  return {
    currentUser: state.entities.users[state.session],
    user,
    photos: Object.values(state.entities.photos),
    isEdit: state.ui.commentEdit.isEdit,
    closeEdit: ownProps.closeEdit
  };
};

const mDP = dispatch => {
  return {
    getUser: userId => dispatch(getUser(userId)),
    openModal: modal => {
      return e => dispatch(openModal(modal));
    }
  };
};

export default connect(mSP, mDP)(Profile);
