// src/components/Hosting/Hosting.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Hosting = () => {
  return (
    <div className="service-box">
      <h3>Web Hosting</h3>
      <p>Reliable and secure web hosting services tailored to your business's needs, ensuring maximum uptime and speed.</p>
      <Link to='/web-hosting'
      >
        Learn More 
        <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </div>
  );
};

export default Hosting;
