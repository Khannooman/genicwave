import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import text from '../config/text.json';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold flex items-center">
          <div className="bg-white rounded-full p-2 mr-3 w-12 h-12 flex items-center justify-center">
            <img
              src={text.navbar.appLogoUrl}
              alt={text.navbar.logoAlt}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span>Genic<span className="text-blue-500">Wave</span></span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-2">
          {text.navbar.links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `hover:bg-blue-500 rounded-full hover:text-white font-medium  px-4 py-1 transition-colors ${
                  isActive ? 'bg-blue-600 rounded-full text-white font-medium px-4 py-1 ' : ''
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gray-800 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {text.navbar.links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `hover:text-blue-400 transition-colors ${
                    isActive ? 'text-blue-400 font-semibold' : ''
                  }`
                }
                onClick={toggleMenu}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;