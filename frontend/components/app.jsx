import React from 'react';
import GreetingContainer from './greeting_container';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import UserShowContainer from './user_show_container';
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
      <AuthRoute exact path='/login' component={LoginFormContainer} />
      <AuthRoute exact path='/signup' component={SignupFormContainer} />
      <ProtectedRoute path='/users/:userId' component={UserShowContainer} />
  </div>
);




export default App;
