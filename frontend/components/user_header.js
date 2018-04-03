import React from 'react';
import { Link } from 'react-router-dom';

const UserHeader = props => {
  return (
    <div className="header">
      <span>
        <Link to={`/users/${props.user.id}`}>
          <img className="profile-img" src={props.user.image} />
        </Link>
      </span>

      <span>
        <Link to={`/users/${props.user.id}`} className="profile-name">
          {props.user.username}
        </Link>
      </span>
    </div>
  );
};

export default UserHeader;
