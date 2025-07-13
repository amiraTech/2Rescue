import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'; // We'll create this for styling

function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <NavLink to="/">🌐 2Rescue</NavLink>
        </div>
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