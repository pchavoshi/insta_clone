import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = props => (
  <div>
    <h1>welcome, {props.currentUser.username}</h1>
    <button onClick={props.logout} value="Sign Out"/>
  </div>
);

export default Greeting;
