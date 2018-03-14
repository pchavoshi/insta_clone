import React from 'react';
import GreetingContainer from './greeting';
import { Signup, Login } from './auth';
import UserShowContainer from './user_show_container';
import CreatePostFormContainer from './create_post_form_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>

      <ProtectedRoute exact path="/" component={GreetingContainer} />
      <AuthRoute exact path='/login' component={Login} />
      <AuthRoute exact path='/signup' component={Signup} />
      <ProtectedRoute path='/users/:userId' component={UserShowContainer} />
      <ProtectedRoute path='/new' component={CreatePostFormContainer} />
  </div>
);




export default App;
