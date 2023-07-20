// Header.js

import React from 'react';
import Navigation from './Navbar';

const Header = () => {
    const isAuthenticated = false;
  return (
    <nav className="flex justify-between items-center mb-4">
      <a href="/">
        <img
          className="w-24 logo"
          src='images/logo.png'
                 alt="Logo"
          
        />
      </a>
      <ul className="flex space-x-6 mr-6 text-lg">
      <Navigation  />
      </ul>
    </nav>
  );
};

export default Header;
