import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({component: Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => (
    loggedIn ? (
      <Redirect to="/" />
    ) : (
      <Component {...props} />
    )
  )} />
);

const Protected = ({component: Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Redirect to="/signup" />
    ) : (
      <Component {...props} />
    )
  )} />
);

const mSP = state => {
  return {loggedIn: Boolean(state.session)}
};

export const AuthRoute = withRouter(connect(mSP, null)(Auth));
export const ProtectedRoute = withRouter(connect(mSP, null)(Protected))
