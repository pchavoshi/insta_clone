import React from 'react';
import { connect } from 'react-redux';
import { editPhoto } from '../actions/photo_actions';
import PostForm from './post_form';

const mSP = () => {
  return {
      formType: 'Edit Post'
  };
};

const mDP = dispatch => {
  return {
    processForm: photo => dispatch(editPhoto(photo))
  };
};

export default connect(mSP, mDP)(PostForm)
