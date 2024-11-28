import React from 'react';
import './AboutHero.css'; // Import specific styles for AboutHero
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake } from '@fortawesome/free-solid-svg-icons'; // Replace or customize the icon

const AboutHero = () => {
  return (
    <div className="about-hero">
      <div className="about-hero-content">
        <FontAwesomeIcon icon={faHandshake} className="about-hero-icon" />
        <h1>Empowering Businesses in the Valley</h1>
        <p>Your trusted partner for custom web solutions tailored to our unique community.</p>
        <a href="/services" className="about-hero-cta">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default AboutHero;
