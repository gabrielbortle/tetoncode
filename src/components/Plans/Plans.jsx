import React from 'react';
import './Plans.css'; // Ensure you have a separate CSS file for styling
import { Link } from 'react-router-dom';

const Plans = () => {
  return (
    <section className="hosting-plans">
      <h2>Choose the Right Plan for You</h2>
      <p>
        We offer flexible hosting plans powered by Hostinger, one of the most trusted hosting providers in the industry. Whether you're just starting or need high-performance resources, we’ve got you covered with reliable, fast, and secure hosting.
      </p>
      <div className="plans">
        {/* Starter Plan */}
        <div className="plan-card">
          <h3>Starter Plan</h3>
          <p>Perfect for small websites and blogs, powered by Hostinger</p>
          <p><strong>$5/month</strong></p>
          <ul>
            <li>1 Website</li>
            <li>20GB SSD Storage (Faster load times)</li>
            <li>Free SSL Certificate</li>
            <li>Global data centers for low latency</li>
            <li>24/7 Support from us</li>
          </ul>
         
          <button>
            <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>
                Get Started
            </Link>
            </button>   
        </div>
        
        {/* Business Plan */}
        <div className="plan-card">
          <h3>Business Plan</h3>
          <p>Ideal for growing businesses with more traffic, hosted through Hostinger's powerful infrastructure</p>
          <p><strong>$15/month</strong></p>
          <ul>
            <li>5 Websites</li>
            <li>50GB SSD Storage (Optimized for fast performance)</li>
            <li>Free SSL Certificate</li>
            <li>Cloudflare CDN for enhanced speed</li>
            <li>Global data centers for fast page loads</li>
            <li>24/7 Support from us</li>
          </ul>
          
          <button>
            <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>
                Get Started
            </Link>
            </button>
        </div>

        {/* Pro Plan */}
        <div className="plan-card">
          <h3>Pro Plan</h3>
          <p>For businesses needing advanced features and high performance, powered by Hostinger's VPS and cloud hosting</p>
          <p><strong>$30/month</strong></p>
          <ul>
            <li>Unlimited Websites</li>
            <li>200GB SSD Storage (Lightning-fast performance)</li>
            <li>Free SSL Certificate</li>
            <li>Cloudflare CDN for optimal speed</li>
            <li>Global data centers for ultra-fast load times</li>
            <li>24/7 Priority Support from us</li>
          </ul>

            <button>
            <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>
                Get Started
            </Link>
            </button>


        </div>
            <section className="get-in-touch-section">
                <h2>Ready to give your website the hosting it deserves?</h2>
                <p>Get in touch today and let us help you take the next step!</p>
                <a href="/contact" className="get-in-touch-btn">
                  Get In Touch
                </a>
            </section>
      </div>


    </section>
  );
};

export default Plans;
