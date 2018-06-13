import React from 'react';
import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { openModal } from '../actions/modal_actions';
import { createLike, deleteLike } from '../actions/photo_actions'

const mSP = (state, ownProps) => {

const photo = ownProps.photo

  return {
    photo: photo,
    comments: ownProps.comments,
    photoUser: state.entities.users[ownProps.photo.user_id],
    modal: 'notModal',
    isModal: false,
    current_user_likes: photo.current_user_likes,
    number_likes: photo.number_likes,
    currentUser: state.entities.users[state.session]
  };
};

const mDP = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal)),
    createLike: like  => dispatch(createLike(like)),
    deleteLike: like => dispatch(deleteLike(like))
  }
}

export default connect(mSP, mDP)(PhotoShow);
