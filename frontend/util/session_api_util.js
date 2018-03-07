export const signup = (user) => {
  return $.ajax({
    url: 'api/users',
    method: 'POST',
    data: {user}
  });
};

export const signin = (user) => {
  return $.ajax({
    url: 'api/session',
    method: 'POST',
    data: {user}
  });
};

export const signout = () => {
  return $.ajax({
    url: 'api/session',
    method: 'DELETE'
  });
};
