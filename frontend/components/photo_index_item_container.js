import React from 'react';
import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { openModal } from '../actions/modal_actions'

const mSP = (state, ownProps) => {
  return {
    photo: ownProps.photo,
    comments: ownProps.comments,
    photoUser: state.entities.users[ownProps.photo.user_id],
    modal: 'notModal',
    isModal: false,

  };
};

const mDP = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal))
  }
}

export default connect(mSP, mDP)(PhotoShow);
