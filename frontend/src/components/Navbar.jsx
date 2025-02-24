import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <Link to="/" className="text-2xl font-bold">
        <span className="text-gray-800">Pay</span>
        <span className="text-blue-500">Sync</span>
      </Link>
      <div className="space-x-4">
        <Link to="/signin" className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded hover:bg-gray-700">
          Sign In
        </Link>
        <Link to="/signup" className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded hover:bg-gray-700">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}