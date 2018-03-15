import React from 'react';
import Main from './main';
import {connect} from 'react-redux';

const mSP = state => {
  return {
    currentUser: state.entities.users[state.session]
  };
};


export default connect(mSP, null)(Main); 
