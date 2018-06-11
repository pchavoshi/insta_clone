import React from 'react';
import { connect } from 'react-redux';
import { newPhoto, clearPhotoAddError } from '../actions/photo_actions';
import { closeModal } from '../actions/modal_actions';
import PostForm from './post_form';

const mSP = state => {
  return {
    formType: 'New Post',
    currentUser: state.session,
    errors: state.errors.photoAdd
  };
};

const mDP = dispatch => {
  return {
    processForm: photo => dispatch(newPhoto(photo)),
    closeModal: () => dispatch(closeModal()),
    clearPhotoAddError: () => dispatch(clearPhotoAddError()) 
  };
};

export default connect(mSP, mDP)(PostForm);
