import React from 'react';
import heroBackground from '../Hero/heroBackground.jpg'
import './Hero.css'; // Make sure the path is correct
import { Link } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Teton Code</h1>
        <p>Custom developed Websites based in Teton Valley.</p>
        
        <Link to="/contact" className="hero-cta">
          GET A FREE QUOTE <FontAwesomeIcon icon={faArrowRight} />

        </Link>
      </div>
      <div className="hero-image">
        <img src={heroBackground} alt="Hero Background" />
      </div>
    </section>
  );
};

export default Hero;
