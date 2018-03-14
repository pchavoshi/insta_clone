import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_UNFOLLOW = "RECEIVE_USER_UNFOLLOW"

export const receiveUser = payload => ({
  type: RECEIVE_USER,
  payload
});

export const receiveUserUnfollow = payload => ({
  type: RECEIVE_USER_UNFOLLOW,
  payload
});

export const getUser = userId => dispatch => (
  APIUtil.getUser(userId).then(payload => dispatch(receiveUser(payload)))
);

export const follow = follow => dispatch => {
  return APIUtil.createFollow(follow).then(payload => dispatch(receiveUser(payload)))
};

export const unfollow = unfollow => dispatch => (
  APIUtil.deleteFollow(unfollow).then(payload => dispatch(receiveUserUnfollow(payload)))
);
