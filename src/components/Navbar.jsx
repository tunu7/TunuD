import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white mx-60 py-2 px-8 sticky top-0 z-50">
      <div className="container mx-auto py-1 px-4 flex justify-between items-center">
        {/* Brand Name */}
        <div className="text-2xl font-semibold text-gray-900">
          <Link to="/" className="hover:text-indigo-500">
            Tunu
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-gray-700 text-lg">
          <Link
            to="/"
            className="hover:text-indigo-500 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="hover:text-indigo-500 transition duration-200"
          >
            Projects
          </Link>
          <Link
            to="/blogs"
            className="hover:text-indigo-500 transition duration-200"
          >
            Blogs
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
