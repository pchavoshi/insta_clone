import React from 'react';
import { connect } from 'react-redux';
import { newPhoto } from '../actions/photo_actions';
import PostForm from './post_form';

const mSP = state => {
  return {
    formType: 'New Post',
    currentUser: state.session
  };
};

const mDP = dispatch => {
  return {
    processForm: photo => dispatch(newPhoto(photo))
  };
};

export default connect(mSP, mDP)(PostForm);
