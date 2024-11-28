import React from 'react';
import './MaintenanceNeeds.css'; // Include your CSS

const MaintenanceNeeds = () => {
  return (
    <section className="maintenance-needs">
      <h2>Why Regular Maintenance is Essential</h2>
      <p>
        As your website grows, it’s important to ensure it remains <strong>fast</strong>, <strong>secure</strong>, and <strong>reliable</strong>. Regular maintenance allows us to handle the technical details while you focus on growing your business.
      </p>
      <p>
        Whether you’re looking for <strong>performance optimization</strong>, <strong>security updates</strong>, or peace of mind, we’ve got you covered.
      </p>

      <div className="get-in-touch">
        <p>
          Let's discuss how our SLA-based maintenance can benefit your business. <strong>Get in touch today!</strong>
        </p>
        <a href="/contact" className="btn-primary">Contact Us</a>
      </div>
    </section>
  );
};

export default MaintenanceNeeds;
