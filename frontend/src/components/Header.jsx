import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-3 shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img
          src="/logo.png" // Replace with your logo path
          alt="Logo"
          className="w-6 h-6"
        />
        <span className="font-bold text-sm">RIVANSH</span>
      </div>

      {/* Buttons */}
      <div className="flex items-center space-x-3">
        {/* Navigation */}
        <nav className="flex items-center space-x-6 text-sm">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="/products" className="hover:text-blue-600">
            Products
          </Link>
          <Link to="#" className="hover:text-blue-600">
            Team
          </Link>
        </nav>
        <Link to="/register" className="border border-blue-900 text-blue-900 px-4 py-1 rounded-full hover:bg-blue-50 text-sm">
          Register
        </Link>
        <Link to="/login" className="bg-blue-900 text-white px-4 py-1 rounded-full hover:bg-blue-800 text-sm">
          Sign In
        </Link>
      </div>
    </header>
  );
};

export default Header;
