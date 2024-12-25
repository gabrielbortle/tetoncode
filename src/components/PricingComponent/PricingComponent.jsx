import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

import "./PricingComponent.css";

const packages = [
  {
    title: "Basic Site",
    price: "Starting at $499",
    features: [
      "Single-page website",
      "Responsive design",
      "Contact form",
      "Social media integration",
      "Additional pages for $150 each",

    ],
    cta: "Get a Quote",
  },
  {
    title: "Starter Site",
    price: "Starting at $750",
    features: [
      "1-3 pages",
      "Responsive design",
      "Basic SEO",
      "Contact form",
      "Social media integration",
      "Additional pages for $150 each",
    ],
    cta: "Get a Quote",
  },
  {
    title: "Professional",
    price: "Starting at $1,500",
    features: [
      "5-7 pages",
      "Custom design",
      "Blog setup",
      "Basic animations",
      "Responsive design",
      "Additional pages for $150 each",

    ],
    cta: "Get a Quote",
  },
  {
    title: "E-Commerce",
    price: "Starting at $3,000",
    features: [
      "Online store",
      "Payment integration",
      "Product uploads (up to 10)",
      "Custom design",
      "Responsive design",
    ],
    cta: "Get a Quote",
  },
];

const PricingComponent = () => {
  return (
    <div className="pricing-container">
      <h2 className="pricing-heading"> Web Development Packages</h2>
      <div className="pricing-grid">
        {packages.map((pkg, index) => (
          <div className="pricing-card" key={index}>
            <h3 className="package-title">{pkg.title}</h3>
            <p className="package-price">{pkg.price}</p>
            <ul className="package-features">
              {pkg.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <Link to="/contact">
              <button className="cta-button">{pkg.cta}</button>
            </Link>          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingComponent;
