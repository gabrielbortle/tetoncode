// src/components/UIUX/UIUX.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const UIUX = () => {
  return (
    <div className="service-box">
      <h3>UI/UX Design</h3>
      <p>We specialize in creating beautiful and intuitive user interfaces and experiences that elevate your brand and engage users.</p>
      <Link to="/ui-design">
        Learn More
        <FontAwesomeIcon icon={faArrowRight} />

      </Link>
    </div>
  );
};

export default UIUX;
