import React from 'react';
import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { getPhoto } from '../actions/photo_actions';

const mSP = (state, ownProps) => {
  const photoThis = state.entities.photos[ownProps.photoId];

  let commentArray = [];
  Object.values(state.entities.comments).forEach(comment => {
    if (photoThis.comment_ids.includes(comment.id)) {
      commentArray.push(comment);
    }
  });

  return {
    photo: photoThis,
    comments: commentArray,
    photoUser: state.entities.users[photoThis.user_id],
    modal: state.ui.modal,
    isModal: 'true',
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
