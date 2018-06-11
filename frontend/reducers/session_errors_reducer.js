import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS, REMOVE_SESSION_ERRORS } from '../actions/session_actions';
import {merge } from 'lodash';

const sessionErrorsReducer = ( state = [], action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_SESSION_ERRORS:
      return action.sessionErrors;
    case REMOVE_SESSION_ERRORS:
      return [];
    default:
      return state;
  }
};

export default sessionErrorsReducer;
