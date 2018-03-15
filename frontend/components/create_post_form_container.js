import React from 'react';
import { connect } from 'react-redux';
import { newPhoto } from '../actions/photo_actions';
import { closeModal } from '../actions/modal_actions';
import PostForm from './post_form';

const mSP = state => {
  return {
    formType: 'New Post',
    currentUser: state.session
  };
};

const mDP = dispatch => {
  return {
    processForm: photo => dispatch(newPhoto(photo)), 
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSP, mDP)(PostForm);
