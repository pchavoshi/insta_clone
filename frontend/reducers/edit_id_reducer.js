import { OPEN_EDIT, CLOSE_EDIT } from '../actions/edit_actions'; 

const editIdReducer = (state = null, action ) => {
  Object.freeze(state); 
  switch (action.type) {
    case OPEN_EDIT: 
      return action.editId; 
    case CLOSE_EDIT: 
      return null; 
    default: 
      return state; 
  }
};

export default editIdReducer; 