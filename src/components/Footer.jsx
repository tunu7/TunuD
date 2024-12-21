import React from "react";
import { FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center bg-white mx-24 md:mx-28 px-6 md:px-28 py-2 ">
      <div className="text-xl font-semibold text-gray-900">
        <span>Tunu Doley</span>
      </div>
      <div className="flex space-x-4">
        <a
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-600"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://twitter.com/your-twitter-handle"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-600"
        >
          <FaTwitter size={20} />
        </a>
        <a
          href="mailto:your-email@example.com"
          className="text-black hover:text-gray-600"
        >
          <FaEnvelope size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
