import React from 'react';
import { Link } from 'react-router-dom';

const UserHeader = props => {
  return (
    <div className="header">
      <Link to={`/users/${props.user.id}`}>
        <img className="profile-img" src={props.user.image} />
      </Link>

      <Link to={`/users/${props.user.id}`} className="profile-name">
        {props.user.username}
      </Link>
    </div>
  );
};

export default UserHeader;
