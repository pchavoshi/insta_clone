import { merge } from 'lodash';
import { RECEIVE_USER } from '../actions/user_actions';

const userReducer = (state = {}, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return action.payload.user;
    default:
      return state;
  }
};

export default userReducer; 
