// src/components/Services/Services.jsx
import React from 'react';
import FrontEnd from '../FrontEnd/FrontEnd';
import UIUX from '../UIUX/UIUX';           // New UI/UX component
import Hosting from '../Hosting/Hosting'; // New Web Hosting component
import Maintenance from '../Maintenance/Maintenance'; // New Maintenance component
import './Services.css';

const Services = () => {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-container">
        <FrontEnd />        {/* Front-End Development Service */}
        <UIUX />            {/* UI/UX Design Service */}
        <Hosting />         {/* Web Hosting Service */}
        <Maintenance />     {/* Website Maintenance Service */}
        {/* You can continue adding more services as needed */}
      </div>
    </section>
  );
};

export default Services;
