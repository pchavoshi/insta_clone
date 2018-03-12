import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {merge } from 'lodash';

const sessionReducer = ( state = null, action ) => {
switch (action.type) {
  case RECEIVE_CURRENT_USER:
    return action.payload.user.id;
  default:
    return state;
}
};


export default sessionReducer;
