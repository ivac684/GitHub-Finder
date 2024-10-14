import React from "react";

function About() {
  return (
    <div className="flex align-items-center h-screen justify-content-center text-center flex-column">
      <p className="h1 text-6xl mb-5 font-bold">GitHub Finder</p>
      <p className="h3 text-xl mb-5">
        A React app for searching GitHub profiles and see profile details. This
        project is part of the React Front to Back Udemy course by Brad
        Traversy.
      </p>
      <div className="mb-2">
        <span className="text-500 mr-3">Version:</span>
        <span>1.0.0</span>
      </div>
      <div>
        <span className="text-500 mr-3 mt-2 mb-2">Layout By:</span>
        <span>Hassib Moddasser</span>
      </div>
    </div>
  );
}

export default About;
