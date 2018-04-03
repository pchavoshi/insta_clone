import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from '../components/nav';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      loggedIn ? <Redirect to="/" /> : <Component {...props} />
    }
  />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      !loggedIn ? (
        <Redirect to="/signup" />
      ) : (
        <div className="whole-screen">
          <Nav />
          <Component {...props} />
        </div>
      )
    }
  />
);

const mSP = state => {
  return { loggedIn: Boolean(state.session) };
};

export const AuthRoute = withRouter(connect(mSP, null)(Auth));
export const ProtectedRoute = withRouter(connect(mSP, null)(Protected));
