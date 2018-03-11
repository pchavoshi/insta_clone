import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = props => (
  <div>
    //this will eventually live somewhere else (navbar dropdown? )
    <div>
      <h1>welcome, {props.currentUser.username}</h1>
      <button onClick={props.logout} value="Sign Out"/>
    </div>

//display user info
// render the follow toggle button component (class component needs own state)
//render photo index (container?)
//render add photo link 


  </div>
);

export default Greeting;
