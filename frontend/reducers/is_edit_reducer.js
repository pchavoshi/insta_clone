import { OPEN_EDIT, CLOSE_EDIT } from '../actions/edit_actions'; 

const isEditReducer = (state = false, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_EDIT: 
      return true; 
    case CLOSE_EDIT: 
      return false; 
    default: 
      return state; 
  }
};

export default isEditReducer; 