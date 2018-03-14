import { merge } from 'lodash';
import { RECEIVE_USER, RECEIVE_USER_UNFOLLOW } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const usersReducer = (state = {}, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {[action.payload.user.id]: action.payload.user});
    case RECEIVE_USER_UNFOLLOW:
      const newState = merge({}, state);
      delete newState[action.payload.follow.followed_id];
      return merge(newState, {[action.payload.user.id]: action.payload.user})
    default:
      return state;
  }
};

export default usersReducer;
