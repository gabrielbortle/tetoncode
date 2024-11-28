import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CustomHero.css'; // Styles for the component

const CustomHero = ({ title, subtitle, ctaText, ctaLink, icon, style }) => {
  return (
    <div className="custom-hero" style={style}> {/* Apply style prop here */}
      <div className="custom-hero-content">
        {/* Font Awesome Icon */}
        <FontAwesomeIcon icon={icon} className="hero-icon" />
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <a href={ctaLink} className="custom-hero-cta">
          {ctaText}
        </a>
      </div>
    </div>
  );
};

export default CustomHero;
