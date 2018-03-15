import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <div>
      this is the nav
      <button onClick={props.logout}> Sign Out </button>
      <Link to={`/users/${props.currentUser.id}`}> Profile Page </Link>
      <Link to="/main"> Home Page </Link>
    </div>
  );
};

export default Nav;
