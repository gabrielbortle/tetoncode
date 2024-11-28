import React from 'react';
import heroBackground from '../Hero/heroBackground.jpg'
import './Hero.css'; // Make sure the path is correct

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Teton Code</h1>
        <p>Custom developed Websites based in Teton Valley.</p>
        <button className="cta-button">Get Started</button>
      </div>
      <div className="hero-image">
        <img src={heroBackground} alt="Hero Background" />
      </div>
    </section>
  );
};

export default Hero;
