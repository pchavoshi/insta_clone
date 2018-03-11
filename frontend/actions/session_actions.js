import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveSessionErrors = sessionErrors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    sessionErrors
  };
};

export const login = user => dispatch => (
  APIUtil.signin(user).then(payload => dispatch(receiveCurrentUser(payload.user)
), error => dispatch(receiveSessionErrors(error.responseJSON)))
);

export const logout = () => dispatch => (
  APIUtil.signout().then(() => dispatch(receiveCurrentUser(null)))
);

export const signup = user => dispatch => (
  APIUtil.signup(user).then(payload => dispatch(receiveCurrentUser(payload.user)
), error => dispatch(receiveSessionErrors(error.responseJSON)))
);
