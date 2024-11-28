import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const FrontEnd = () => {
  return (
    <div className="service-box">
      <h3>Front-End Development</h3>
      <p>
        We specialize in creating visually appealing, fast, and responsive websites using modern technologies like React, HTML, CSS, and JavaScript. 
        Whether you need a custom landing page, an interactive website, or a full-fledged web app, we’ve got you covered.
      </p>
      <Link to="/custom-web">
        Learn More 
        <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </div>
  );
};

export default FrontEnd;
