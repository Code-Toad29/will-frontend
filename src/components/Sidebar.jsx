import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleSidebar}>
      <div className={`fixed top-0 left-0 w-64 h-full bg-gray-800 transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <button className="text-white p-4" onClick={toggleSidebar}>
          Close
        </button>
        <ul className="flex flex-col p-4 space-y-2">
          <li><Link to="/home" className="text-white">Home</Link></li>
          <li><Link to="/marketplace" className="text-white">Marketplace</Link></li>
          <li><Link to="/sell" className="text-white">Sell</Link></li>
          <li><Link to="/about" className="text-white">About</Link></li>
          <li><Link to="/contact" className="text-white">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
