import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-column justify-content-center align-items-center text-center h-screen">
      <p className="h1 text-6xl mb-5 font-bold">Oopsy daisy!</p>
      <p className="text-xl mb-5">404 - Page not found!</p>
      <Link to="/">
        <FaHome>Back to home</FaHome>
      </Link>
    </div>
  );
}

export default NotFound;
