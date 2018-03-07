import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {merge } from 'lodash';

const sessionReducer = ( state = {currentUser: null}, action ) => {
switch (action.type) {
  case RECEIVE_CURRENT_USER:
    return merge({}, {currentUser: action.currentUser});
  default:
    return state;
}
};


export default sessionReducer;
