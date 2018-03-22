import { combineReducers } from 'redux'; 
import isEditReducer from './is_edit_reducer'; 
import editIdReducer from './edit_id_reducer'; 

const commentEditReducer = combineReducers({
  isEdit: isEditReducer, 
  editId: editIdReducer 
});

export default commentEditReducer; 