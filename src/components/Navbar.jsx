// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom"; // For internal navigation

const Navbar = () => {
  return (
    <nav className="navbar bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="navbar-logo text-2xl font-bold">
          <Link to="/">Airbnb Clone</Link>
        </div>

        {/* Links */}
        <ul className="navbar-links flex space-x-6">
          <li>
            <Link to="/explore" className="hover:text-gray-600">
              Explore
            </Link>
          </li>
          <li>
            <Link to="/wishlist" className="hover:text-gray-600">
              Wishlist
            </Link>
          </li>
          <li>
            <Link to="/trips" className="hover:text-gray-600">
              Trips
            </Link>
          </li>
          <li>
            <Link to="/account" className="hover:text-gray-600">
              Account
            </Link>
          </li>
        </ul>

        {/* Search + Login */}
        <div className="navbar-actions flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-lg px-4 py-2"
          />
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
