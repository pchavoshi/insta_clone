import { merge } from 'lodash';
import {
  RECEIVE_PHOTO_SHOW,
  RECEIVE_ALL_PHOTOS
} from '../actions/photo_actions';
import { RECEIVE_COMMENT, DELETE_COMMENT } from '../actions/comment_actions';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENT:
      return merge({}, state, {
        [action.comment.id]: action.comment
      });
    case DELETE_COMMENT:
      let newState = merge({}, state);
      delete newState[action.comment.id];
      return newState;
    case RECEIVE_PHOTO_SHOW:
    case RECEIVE_ALL_PHOTOS:
      if (action.payload.comments) {
        return action.payload.comments;
      } else {
          return {};
      }
    default:
      return state;
  }
};

export default commentsReducer;
