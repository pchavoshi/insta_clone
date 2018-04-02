import React from "react";
import { Link } from "react-router-dom";

const UserHeader = props => {
  return (
    <ul>
      <Link to={`/users/${props.user.id}`} ><img src={props.user.image} /></Link>

      <Link to={`/users/${props.user.id}`} >{props.user.username}</Link>
    </ul>
  );
};

export default UserHeader;
