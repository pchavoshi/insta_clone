import React from 'react';
import { connect } from 'react-redux';
import PhotoShow from './photo_show';

const mSP = state => {
  return {
    currentUser: state.session
  };
};

export default connect(mSP, null)(PhotoShow);
