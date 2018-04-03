import React from 'react';
import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { getPhoto } from '../actions/photo_actions';

const mSP = (state, ownProps) => {
  const photoThis = state.entities.photos[ownProps.photoId];
  return {
    photo: photoThis,
    comments: Object.values(state.entities.comments),
    photoUser: state.entities.users[photoThis.user_id],
    modal: state.ui.modal,
    photoShow: 'profile-photo-show',
    commentIndex: 'profile-comment-index',
    indexItem: 'profile-index-item'
  };
};

const mDP = dispatch => {
  return {
    getPhoto: photoId => dispatch(getPhoto(photoId))
  };
};

export default connect(mSP, mDP)(PhotoShow);
