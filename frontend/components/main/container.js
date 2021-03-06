import React from 'react';
import Main from './main';
import { connect } from 'react-redux';
import { getAllPhotos, clearAllPhotos } from '../../actions/photo_actions';
import { closeEdit } from '../../actions/edit_actions';

const mSP = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session],
    users: state.entities.users,
    comments: state.entities.comments,
    photos: state.entities.photos,
    isEdit: state.ui.commentEdit.isEdit,
  };
};

const mDP = dispatch => {
  return {
    getAllPhotos: (followingIds, page) => dispatch(getAllPhotos(followingIds, page)),
    closeEdit: () => dispatch(closeEdit()),
    clearAllPhotos: () => dispatch(clearAllPhotos())
  };
};

export default connect(mSP, mDP)(Main);
