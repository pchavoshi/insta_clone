import SessionForm from './session_form';
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {login } from '../actions/session_actions';

const mSP = (state) => {
  return {
    errors: state.errors.session,
    formType: 'login',
    navLink: <Link to="/signup">Dont have an account? Sign Up</Link>
  };
};

const mDP = dispatch => {
  return {
    processForm: user => dispatch(login(user))
  };
};

export default connect(mSP, mDP)(SessionForm);
