import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";
import UserSearch from "./users/UserSearch";

function NavBar() {
  return (
    <div className="flex justify-between p-5 shadow-lg bg-gray-900">
      <Link
        to="/"
        className="flex gap-3 text-lg font-bold mx-2 text-900 hover:text-700"
      >
        <FaGithub className="my-auto" />
        GitHub Finder
      </Link>
      <div className="flex ml-auto gap-3">
        <Link to="/" className="text-900 hover:text-700">
          Home
        </Link>
        <Link to="/about" className="text-900 hover:text-700">
          About
        </Link>
      </div>
    </div>
  );
}

NavBar.defaultProps = {
  title: "GitHub Finder",
};

NavBar.propTypes = {
  title: PropTypes.string,
};

export default NavBar;
