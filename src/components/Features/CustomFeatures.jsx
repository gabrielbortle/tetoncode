import React from 'react';
import './CustomFeatures.css';

const CustomFeatures = () => {
  return (
    <div className="features">
      <h2>Why Choose Us?</h2>
      <p>We build custom, high-performance websites that cater to your unique business needs.</p>
      <div className="feature-list">
        <div className="feature-item">
          <h3>Custom Designs</h3>
          <p>Our websites are tailored specifically for your brand, ensuring a unique online presence.</p>
        </div>
        <div className="feature-item">
          <h3>Responsive Layouts</h3>
          <p>Every website is built to look great on any device, ensuring a seamless user experience.</p>
        </div>
        <div className="feature-item">
          <h3>Fast Load Times</h3>
          <p>We optimize your website for speed, ensuring fast load times for all users.</p>
        </div>
        <div className="feature-item">
          <h3>SEO Optimized</h3>
          <p>Your site will be SEO-friendly, helping you rank higher in search engines and reach more customers.</p>
        </div>
        <div className="feature-item">
          <h3>Secure Websites</h3>
          <p>We implement the latest security features to protect your website and user data.</p>
        </div>
      </div>
    </div>
  );
};

export default CustomFeatures;
