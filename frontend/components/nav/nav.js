import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      this is the nav
      <Link to="/"> Sign Up </Link>
      <Link to="/login"> Sign Up </Link>
      <Link to="/signup"> Sign Up </Link>
    </div>
  );
};

export default Nav;
