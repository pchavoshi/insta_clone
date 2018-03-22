import React from 'react';
import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { getPhoto } from '../actions/photo_actions';

const mSP = (state, ownProps) => {
  return {
    photo: state.entities.photos[ownProps.photoId],
    comments: Object.values(state.entities.comments),
    modal: state.ui.modal
  };
};

const mDP = dispatch => {
  return {
    getPhoto: photoId => dispatch(getPhoto(photoId))
  };
};

export default connect(mSP, mDP)(PhotoShow);
