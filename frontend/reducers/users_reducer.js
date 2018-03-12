import { merge } from 'lodash';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const usersReducer = (state = {}, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, state, {[action.payload.user.id]: action.payload.user});
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {[action.payload.user.id]: action.payload.user});
    default:
      return state;
  }
};

export default usersReducer;
