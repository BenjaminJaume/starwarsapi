import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Characters
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Spaceships
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Planets
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
