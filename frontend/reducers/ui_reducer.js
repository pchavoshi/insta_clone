import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import commentEditReducer from './comment_edit_reducer'

const uiReducer = combineReducers({
  modal: modalReducer, 
  commentEdit: commentEditReducer
});

export default uiReducer; 
