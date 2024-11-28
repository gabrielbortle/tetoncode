import React from 'react';
import { Link } from 'react-router-dom';
import TetonCodeLogo from './TetonCode.png'; // Import the logo
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo on the left */}
        <div className="footer-logo">
          <img src={TetonCodeLogo} alt="Teton Code Logo" />
        </div>
        {/* Links */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li><Link to="/custom-web">Custom Web Development</Link></li>
              <li><Link to="/ui-design">UI/UX Design</Link></li>
              <li><Link to="/web-hosting">Web Hosting</Link></li>
              <li><Link to="/web-maintenance">Website Maintenance</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <p className="footer-note">© 2024 Teton Code. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
