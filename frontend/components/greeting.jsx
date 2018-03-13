import React from 'react';

const Greeting = props => {
  return (<div className="greeting">
    <h1>welcome, {props.currentUser.username}</h1>
    <button onClick={props.logout} value="Sign Out"/>
  </div>);
};

export default Greeting;
