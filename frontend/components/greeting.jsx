import React from 'react';
import {Link} from 'react-router-dom'

const signedin = (currentUser, logout) => (
  <div>
    <h1>welcome, {currentUser.username}</h1>
    <button onClick={logout} value="Sign Out"/>
  </div>
);

const not_signedin = () => (
  <div>
    <Link to='/signup'>Sign Up</Link>
    <Link to='/login'>Log In</Link>
  </div>
);

const Greeting = (props) => (
  props.currentUser ? signedin(props.currentUser, props.logout) : not_signedin()
);

export default Greeting;
