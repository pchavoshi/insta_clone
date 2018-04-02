import React from "react";

const UserHeader = props => {

  return (
    <ul>
      <img src={props.user.image} />
      {props.user.username}
    </ul>
  );
};

export default UserHeader;
