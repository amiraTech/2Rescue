import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="container">
        <NavLink to="/" className="logo">🌐 2Rescue</NavLink>
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/request">Request Help</NavLink></li>
            <li><NavLink to="/contacts">Contacts</NavLink></li>
            <li><NavLink to="/alerts">Alerts</NavLink></li>
            <li><NavLink to="/shelters">Shelters</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;