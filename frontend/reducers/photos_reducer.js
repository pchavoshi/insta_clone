import {
  RECEIVE_PHOTO,
  DELETE_PHOTO,
  RECEIVE_PHOTO_SHOW,
  RECEIVE_ALL_PHOTOS
} from '../actions/photo_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_COMMENT, DELETE_COMMENT } from '../actions/comment_actions';
import { merge } from 'lodash';

const photosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PHOTO:
      return merge({}, state, { [action.photo.id]: action.photo });
    case RECEIVE_PHOTO_SHOW:
      return action.payload.photo;
    case RECEIVE_COMMENT:
      let newState = merge({}, state);
      const updatedPhoto = newState[action.comment.photo_id];
      updatedPhoto.comment_ids.push(action.comment.id);
      return newState;
    case DELETE_COMMENT:
      newState = merge({}, state);
      delete newState[action.comment.photo_id].comment_ids[action.comment.id];
      return newState;
    case DELETE_PHOTO:
      newState = merge({}, state);
      delete newState[action.payload.photo.id];
      return newState;
    case RECEIVE_USER:
    case RECEIVE_ALL_PHOTOS:
      if (action.payload.photos) {
        return action.payload.photos;
      } else {
        return {};
      }
    default:
      return state;
  }
};

export default photosReducer;
