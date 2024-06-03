import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 w-full fixed top-0 left-0 z-50">
      <ul className="flex justify-between p-4">
        <li className="flex-grow text-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-green-900' : 'text-white hover:text-gray-300'
            }
          >
            Home
          </NavLink>
        </li>
        <li className="flex-grow text-center">
          <NavLink
            to="/info"
            className={({ isActive }) =>
              isActive ? 'text-green-900' : 'text-white hover:text-gray-300'
            }
          >
            Information
          </NavLink>
        </li>
        <li className="flex-grow text-center">
          <NavLink
            to="/change"
            className={({ isActive }) =>
              isActive ? 'text-green-900' : 'text-white hover:text-gray-300'
            }
          >
            Climate Change
          </NavLink>
        </li>
        <li className="flex-grow text-center">
          <NavLink
            to="/action"
            className={({ isActive }) =>
              isActive ? 'text-green-900' : 'text-white hover:text-gray-300'
            }
          >
            Actions
          </NavLink>
        </li>
        <li className="flex-grow text-center">
          <NavLink
            to="/resources"
            className={({ isActive }) =>
              isActive ? 'text-green-900' : 'text-white hover:text-gray-300'
            }
          >
            Resources
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
