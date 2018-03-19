import { merge } from 'lodash';
import { RECEIVE_PHOTO_SHOW } from '../actions/photo_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PHOTO_SHOW:
      return action.payload.comments;
    case RECEIVE_COMMENT:
      return merge({}, state, {
        [action.comment.id]: action.comment
      });
    default:
      return state;
  }
};

export default commentsReducer;
