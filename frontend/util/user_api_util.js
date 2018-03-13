export const getUser = userId => (
  $.ajax({
    url: `api/users/${userId}`,
    method: 'GET'
  })
);

export const createFollow = follow => (
  $.ajax({
    url: `api/users/${follow.followed_id}/follows`,
    method: 'POST',
    data: {follow}
  })
);

export const deleteFollow = follow => (
  $.ajax({
    url: `api/users/${follow.followed_id}/unfollow`,
    method: 'DELETE',
    data: { follow }
  })
);
