import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome icons
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Envelope icon (or any other icon you like)
import './ContactHero.css'; // Link to the CSS file

const ContactHero = () => {
  return (
    <div className="custom-hero">
      <div className="custom-hero-content">
        {/* Font Awesome Icon */}
        <FontAwesomeIcon icon={faEnvelope} className="hero-icon" />
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out with any questions or project ideas.</p>
        
      </div>
    </div>
  );
};

export default ContactHero;
