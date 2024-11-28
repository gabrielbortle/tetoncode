// src/components/WhatWeOffer/WhatWeOffer.jsx
import React from 'react';
import './WhatWeOffer.css'; // Importing the styles for this component

const WhatWeOffer = () => {
  return (
    <section className="what-we-offer">
      <h2 className="title">What We Offer</h2>
      <div className="services">
        <div className="service-card">
          <h3>Custom UI/UX Design</h3>
          <p>
            Our custom UI/UX design services focus on creating intuitive and visually appealing interfaces. We collaborate with you to ensure your design aligns with your brand and offers a seamless user experience.
          </p>
        </div>
        <div className="service-card">
          <h3>Mobile-First Design</h3>
          <p>
            With more users browsing on mobile devices, our mobile-first design ensures that your website looks and works great on all screen sizes. We focus on delivering an optimal mobile experience from the start.
          </p>
        </div>
        <div className="service-card">
          <h3>Prototyping & Wireframing</h3>
          <p>
            Before diving into the final design, we create prototypes and wireframes to visualize the user flow and gather feedback early in the process. This helps avoid costly mistakes and ensures you're happy with the design.
          </p>
        </div>
        <div className="service-card">
          <h3>User Testing & Feedback</h3>
          <p>
            We conduct thorough user testing to gather real-world feedback, ensuring that your product is not only functional but also delightful to use. We refine the design based on actual user interactions.
          </p>
        </div>
        <div className="service-card">
          <h3>Brand Identity & Visual Design</h3>
          <p>
            A strong brand identity is essential for standing out in the digital space. We help define your brand's visual elements, including logos, and color schemes to make sure your brand resonates with your audience.
          </p>
        </div>
        <div className="service-card">
          <h3>Responsive Web Design</h3>
          <p>
            We ensure that your website adapts to different screen sizes and devices, providing a seamless experience for users on desktops, tablets, and smartphones.
          </p>
        </div>
      </div>
      <p className="contact-action">
        Ready to elevate your digital experience? <a href="/contact">Contact us</a>
      </p>
    </section>
  );
};

export default WhatWeOffer;
