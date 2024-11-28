import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom'; // Use NavLink instead of Link
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import TetonCodeLogo from './TetonCode.png';  // Importing the logo

import './Navbar.css';
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMenu = () => {
    setIsMobile(false);
    setIsDropdownOpen(false); // Close dropdown when a link is clicked
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth', // Smooth scrolling animation
    });
  };

  return (
    <nav className={`navbar ${isMobile ? 'active' : ''}`}>
      <div className="navbar-logo">
        <NavLink to="/" onClick={() => {
          closeMenu();
          scrollToTop();
        }}>
          <img src={TetonCodeLogo} alt="Teton Code Logo" className="logo" />
        </NavLink>
      </div>
      <ul className={`navbar-links ${isMobile ? 'active' : ''}`}>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={() =>{
            closeMenu();
            scrollToTop();
          }}>
            <FontAwesomeIcon icon={faHome} /> Home
          </NavLink>
        </li>

        {/* Dropdown for Services */}
        <li className={`navbar-dropdown ${isDropdownOpen ? 'open' : ''}`}>
          <a href="#" onClick={e => { e.preventDefault(); toggleDropdown(); }}>
            <FontAwesomeIcon icon={faLaptopCode} /> Services
          </a>
          <ul className="dropdown-menu">
            <li><Link to="/custom-web" onClick={closeMenu}>Custom Web Development</Link></li> {/* React Router Link */}
            <li><Link to="/ui-design" onClick={closeMenu}>UI/UX Design</Link></li>
            <li><Link to="/web-hosting" onClick={closeMenu}>Web Hosting</Link></li>
            <li><Link to="/web-maintenance" onClick={closeMenu}>Website Maintenance</Link></li>
          </ul>
        </li>

        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={closeMenu}>
            <FontAwesomeIcon icon={faUser} /> About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={closeMenu}>
            <FontAwesomeIcon icon={faEnvelope} /> Contact
          </NavLink>
        </li>
        
        
      </ul>
      <button className="navbar-toggle" onClick={toggleMenu}>
        <span className="navbar-toggle-icon"></span>
        <span className="navbar-toggle-icon"></span>
        <span className="navbar-toggle-icon"></span>
      </button>
    </nav>
  );
};
export default Navbar;