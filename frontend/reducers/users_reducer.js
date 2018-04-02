import { merge } from 'lodash';
import { RECEIVE_USER, RECEIVE_USER_UNFOLLOW } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_PHOTO, RECEIVE_ALL_PHOTOS } from '../actions/photo_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';

const usersReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {
        [action.payload.user.id]: action.payload.user
      });
    case RECEIVE_USER_UNFOLLOW:
      newState = merge({}, state);
      delete newState[action.payload.follow.followed_id];
      return merge(newState, { [action.payload.user.id]: action.payload.user });
    case RECEIVE_PHOTO:
      newState = merge({}, state);
      const updatedUser = newState[action.photo.user_id];
      updatedUser.photo_ids.push(action.photo.id);
      return newState;
    case RECEIVE_ALL_PHOTOS:
      return merge({}, state, action.payload.users);
    default:
      return state;
  }
};

export default usersReducer;
