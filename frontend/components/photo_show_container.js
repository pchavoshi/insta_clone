import React from 'react';
import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { openModal } from '../actions/modal_actions'

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
    currentUser: state.entities.users[state.session], 
    modal: state.ui.modal,
    isModal: true,
    isSelf: ownProps.is_self
  };
};

const mDP = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(mSP, mDP)(PhotoShow);
