import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Signup, Login } from './auth';
import Profile from './user/profile';
import Main from './main';
import Modal from './modal';
import PhotoShowContainer from './photo_show_container';
import { EditCommentContainer } from './edit_comment_container';

const App = () => (
  <div>
    <Modal />
    <AuthRoute exact path="/login" component={Login} />
    <AuthRoute exact path="/signup" component={Signup} />
    <ProtectedRoute exact path="/" component={Main} />
    <ProtectedRoute path="/users/:userId" component={Profile} />
    <ProtectedRoute path="/photos/:photoId" component={PhotoShowContainer} />
    <ProtectedRoute
      path="/comments/:commentId/edit"
      component={EditCommentContainer}
    />
  </div>
);

export default App;
