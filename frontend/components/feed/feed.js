import React from 'react';
import Profile from '../user/profile';

const Greeting = props => {
  return (
    <div className="greeting">
      <h1>welcome, {props.currentUser.username}</h1>
      <button onClick={props.logout} value="Sign Out" />
      <Profile uid={props.currentUser.id} />
    </div>
  );
};

export default Greeting;
