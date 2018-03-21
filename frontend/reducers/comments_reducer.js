import { merge } from 'lodash';
import { RECEIVE_PHOTO_SHOW } from '../actions/photo_actions';
import { RECEIVE_COMMENT, DELETE_COMMENT } from '../actions/comment_actions';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PHOTO_SHOW:
      return action.payload.comments;
    case RECEIVE_COMMENT:
      return merge({}, state, {
        [action.comment.id]: action.comment
      });
    case DELETE_COMMENT:
      let newState = merge({}, state); 
      delete newState[action.comment.id]; 
      return newState; 
    default:
      return state;
  }
};

export default commentsReducer;
