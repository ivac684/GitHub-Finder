import React from "react";
import { FaGithub } from "react-icons/fa6";

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="w-full p-10 bg-gray-900 p-5 text-center">
      <FaGithub className="mb-3" />
      <div>Copyright {footerYear} All rights reserved </div>
    </footer>
  );
}

export default Footer;
