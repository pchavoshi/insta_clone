import SessionForm from './session_form';
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {signup} from '../actions/session_actions';

const mSP = (state) => {
  return {
    errors: state.errors.session,
    formType: 'Sign up',
    navLink: <Link to="/login">Already have an account? Log In</Link>
  };
};

const mDP = dispatch => {
  return {
    processForm: user => dispatch(signup(user))
  };
};

export default connect(mSP, mDP)(SessionForm);
