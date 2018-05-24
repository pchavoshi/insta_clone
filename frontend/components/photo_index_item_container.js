import React from 'react';
import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { getPhoto } from '../actions/photo_actions';

const mSP = (state, ownProps) => {
  return {
    photo: ownProps.photo,
    comments: ownProps.comments,
    photoUser: state.entities.users[ownProps.photo.user_id],
    modal: 'notModal',
    isModal: 'false',
  };
};

export default connect(mSP, null)(PhotoShow);
