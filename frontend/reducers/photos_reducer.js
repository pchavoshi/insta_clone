import {
  RECEIVE_PHOTO,
  DELETE_PHOTO,
  RECEIVE_PHOTO_SHOW
} from '../actions/photo_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';
import { merge } from 'lodash';

const photosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return action.payload.photos;
    case RECEIVE_PHOTO:
      return merge({}, state, { [action.photo.id]: action.photo });
    case RECEIVE_PHOTO_SHOW:
      return action.payload.photo;
    case RECEIVE_COMMENT:
      newState = merge({}, state);
      const updatedPhoto = newState[action.comment.photo_id];
      updatedPhoto.comment_ids.push(action.comment.id);
      return newState;
    case DELETE_PHOTO:
      let newState = merge({}, state);
      delete newState[action.photoId];
      return newState;
    default:
      return state;
  }
};

export default photosReducer;
