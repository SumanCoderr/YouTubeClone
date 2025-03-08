// src/Sidebar.js
import React from 'react';
import { FaHome, FaFire, FaYoutube, FaClock, FaHistory } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 h-165 p-4">
      {/* Menu Items */}
      <div className="flex flex-col space-y-2">
        <a href="/" className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md">
          <FaHome className="text-xl" />
          <span>Home</span>
        </a>
        <a href="/trending" className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md">
          <FaFire className="text-xl" />
          <span>Trending</span>
        </a>
        <a href="/subscriptions" className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md">
          <FaClock className="text-xl" />
          <span>Subscriptions</span>
        </a>
        <a href="/library" className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md">
          <FaHistory className="text-xl" />
          <span>Library</span>
        </a>
      </div>

      {/* Bottom Menu */}
      <div className="mt-auto flex flex-col space-y-2">
        <a href="/settings" className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md">
          <span>Settings</span>
        </a>
        <a href="/help" className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md">
          <span>Help</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
