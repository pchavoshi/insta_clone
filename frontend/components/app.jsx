import React from 'react';
import { Signup, Login } from './auth';
import Profile from './user/profile';
import CreatePostFormContainer from './create_post_form_container';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Main from './main';

const App = () => (
  <div>
    <ProtectedRoute exact path="/" component={Main} />
    <AuthRoute exact path="/login" component={Login} />
    <AuthRoute exact path="/signup" component={Signup} />
    <ProtectedRoute path="/users/:userId" component={Profile} />
    <ProtectedRoute path="/new" component={CreatePostFormContainer} />
  </div>
);

export default App;
