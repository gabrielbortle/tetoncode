import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2>Why Choose Us for Your Web Hosting?</h2>
      <p>
        At <strong>CleanCode</strong>, we understand that reliable and fast web hosting is critical to your website’s success. Powered by Hostinger, our hosting services are designed to give you peace of mind with top-tier performance, security, and support. Here’s why you should choose <strong>CleanCode</strong> to host your website:
      </p>
      <div className="reasons">
        <div className="reason-card">
          <h3>Lightning-Fast Performance</h3>
          <p>
            Our hosting plans come with SSD storage, which ensures that your website loads faster than ever, leading to better user experience and improved SEO rankings.
          </p>
        </div>
       
        <div className="reason-card">
          <h3>Enhanced Security</h3>
          <p>
            We provide free SSL certificates with every plan, guaranteeing secure connections for your visitors. Advanced security features, 24/7 monitoring, and automatic backups keep your website protected from threats.
          </p>
        </div>
        <div className="reason-card">
          <h3>Seamless Scalability</h3>
          <p>
            As your business grows, so do your hosting needs. Our hosting plans allow you to easily scale resources—whether you need more storage, bandwidth, or advanced features, upgrading is quick and easy.
          </p>
        </div>
        <div className="reason-card">
          <h3>24/7 Support</h3>
          <p>
            Our team is available around the clock to assist with anything you need. From setting up your site to troubleshooting any issues, we’ve got you covered with expert support every step of the way.
          </p>
        </div>
        <div className="reason-card">
          <h3>Transparent Pricing</h3>
          <p>
            We offer competitive, straightforward pricing for all our hosting plans with no hidden fees. You’ll know exactly what you’re paying for, and there’s no surprise cost.
          </p>
        </div>
        <div className="reason-card">
          <h3>Managed by Web Development Experts</h3>
          <p>
            As a custom web development company, we take care of your hosting so you can focus on growing your business. Leave the technical management to us and enjoy a hassle-free hosting experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
