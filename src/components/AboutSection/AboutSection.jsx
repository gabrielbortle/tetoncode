import React from 'react';
import './AboutSection.css'; // Import styles
import GabeGiron from './GabeGiron.png'

const AboutSection = () => {
  return (
    <section className="about-section">
      <h2>Who We Are</h2>
      <p>
        Located in the heart of the valley, we specialize in crafting custom websites 
        designed to empower local businesses. Our mission is to help you thrive online, 
        with unique and user-friendly web solutions tailored to your needs.
      </p>

      <section className="team-section">
        <h3>Meet the Team</h3>
        <div className="team-members">
          <div className="team-member">
            <img src={GabeGiron} alt="Gabe" className="team-photo" />
            <h4>Gabriel Giron <br></br>(lead developer)</h4>
          </div>
          <div className="team-member">
            <img src={GabeGiron} alt="Co-worker" className="team-photo" />
            <h4>Gian Rocha <br /> (UI Designer)</h4>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutSection;
