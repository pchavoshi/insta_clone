import SessionForm from '../session_form';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login, removeSessionErrors } from '../../../actions/session_actions';

const mSP = state => {
  return {
    errors: state.errors.session,
    formType: 'Login'
  };
};

const mDP = dispatch => {
  const demoUser = {username: 'parisa1', password: 'fruity'};
  return {
    processForm: user => dispatch(login(user)),
    removeSessionErrors: () => dispatch(removeSessionErrors()),
    userDemo: () => dispatch(login(demoUser))
  };
};

export default connect(mSP, mDP)(SessionForm);
