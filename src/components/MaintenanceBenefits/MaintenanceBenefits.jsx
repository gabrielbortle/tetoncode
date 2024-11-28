import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faShieldAlt, faHeadset, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import './MaintenanceBenefits.css'; // Ensure the styles are in this file

const MaintenanceBenefits = () => {
  return (
    <section className="maintenance-benefits">
      <h2>Why Choose Our Web Maintenance Services?</h2>
      <div className="benefit-cards">
        {/* Regular Updates */}
        <div className="benefit-card">
          <FontAwesomeIcon icon={faTools} className="benefit-icon" />
          <h3>Regular Updates</h3>
          <p>Stay ahead of the competition with timely updates and the latest features.</p>
        </div>

        {/* Enhanced Security */}
        <div className="benefit-card">
          <FontAwesomeIcon icon={faShieldAlt} className="benefit-icon" />
          <h3>Enhanced Security</h3>
          <p>Protect your website from vulnerabilities and stay safe with regular security checks.</p>
        </div>

        {/* 24/7 Support */}
        <div className="benefit-card">
          <FontAwesomeIcon icon={faHeadset} className="benefit-icon" />
          <h3>24/7 Support</h3>
          <p>Our dedicated team is here for you whenever you need assistance.</p>
        </div>

        {/* Speed Optimization */}
        <div className="benefit-card">
          <FontAwesomeIcon icon={faTachometerAlt} className="benefit-icon" />
          <h3>Speed Optimization</h3>
          <p>Boost your website's load time for better user experience and higher search engine rankings.</p>
        </div>
      </div>
    </section>
  );
};

export default MaintenanceBenefits;
