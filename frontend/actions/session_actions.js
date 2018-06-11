import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const REMOVE_SESSION_ERRORS = "REMOVE_SESSION_ERRORS";

export const receiveCurrentUser = (payload) => {
  return {
    type: RECEIVE_CURRENT_USER,
    payload
  };
};

export const receiveSessionErrors = sessionErrors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    sessionErrors
  };
};

export const removeSessionErrors = () => {
  return {
    type: REMOVE_SESSION_ERRORS
  };
};

export const login = user => dispatch => {
  return APIUtil.signin(user).then(payload => dispatch(receiveCurrentUser(payload)
), error => dispatch(receiveSessionErrors(error.responseJSON)));
};

export const logout = () => dispatch => (
  APIUtil.signout().then(() => dispatch(receiveCurrentUser({user: {id: null}})))
);

export const signup = user => dispatch => (
  APIUtil.signup(user).then(payload => dispatch(receiveCurrentUser(payload)
), error => dispatch(receiveSessionErrors(error.responseJSON)))
);
