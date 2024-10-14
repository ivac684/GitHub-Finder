import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="flex justify-content-between align-items-center flip animation-iteration-1">
      <div className="flex align-items-center gap-4">
        <img
          alt="avatar"
          width={40}
          src={avatar_url}
          className="border-circle"
        />
        {login}
      </div>
      <Link to={`/users/${login}`} className="">
        Visit profile
      </Link>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
