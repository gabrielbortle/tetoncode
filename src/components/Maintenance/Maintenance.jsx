// src/components/Maintenance/Maintenance.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Maintenance = () => {
  return (
    <div className="service-box">
      <h3>Website Maintenance</h3>
      <p>We provide regular website updates, bug fixes, and performance optimization to keep your site running smoothly.</p>
      <Link to='/web-maintenance'
      >
        Learn More 
        <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </div>
  );
};

export default Maintenance;
