import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props => {
  return (
    <div className="nav">
      <div className="container">
        <Link to="/">
          <img src={window.long_logo} className="logo" />
        </Link>

        <div className="user-dropdown">
          <img src={window.user_icon} className="user-icon" />
          <div className="user-dropdown-contents">
            <div className="user-dropdown-links">
              <Link to={`/users/${props.currentUser.id}`}>Profile</Link>
              <button onClick={props.logout}> Sign Out </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
