import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

import "./PricingComponent.css";

const packages = [
  {
    title: "Basic Site",
    price: "Starting at $499",
    description: "Perfect for startups needing an online presence with easy-to-manage content.",
    features: [
      "Single-page website",
      "Responsive design",
      "Contact form",
      "Social media integration",
      "Additional pages for $150 each",
    ],
    addOns: [
      "SEO Optimization: $200",
      "Advanced animations: $300",
    ],
    cta: "Get a Quote",
  },
  {
    title: "Starter Site",
    price: "Starting at $750",
    description: "A small business site with 1-3 pages, SEO-ready and optimized for conversions.",
    features: [
      "1-3 pages",
      "Responsive design",
      "Basic SEO",
      "Contact form",
      "Social media integration",
      "Additional pages for $150 each",
    ],
    addOns: [
      "Advanced SEO: $300",
      "Custom Branding: $200",
    ],
    cta: "Get a Quote",
  },
  {
    title: "Professional",
    price: "Starting at $1,500",
    description: "For growing businesses, a fully customized 5-7 page site with a blog and animations.",
    features: [
      "5-7 pages",
      "Custom design",
      "Blog setup",
      "Basic animations",
      "Responsive design",
      "Additional pages for $150 each",
    ],
    addOns: [
      "E-commerce setup: $500",
      "SEO Optimization: $200",
    ],
    cta: "Get a Quote",
  },
  {
    title: "E-Commerce",
    price: "Starting at $3,000",
    description: "Everything you need to run a full-fledged online store with payment integration.",
    features: [
      "Online store",
      "Payment integration",
      "Product uploads (up to 10)",
      "Custom design",
      "Responsive design",
    ],
    addOns: [
      "Product uploads (additional): $100 each",
      "SEO Optimization: $300",
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
            <p className="package-description">{pkg.description}</p> {/* Description added */}
            <ul className="package-features">
              {pkg.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            {pkg.addOns && (
              <div className="add-ons">
                <h4>Add-ons:</h4>
                <ul>
                  {pkg.addOns.map((addon, idx) => (
                    <li key={idx}>{addon}</li>
                  ))}
                </ul>
              </div>
            )}
            <Link to="/contact">
              <button className="cta-button">{pkg.cta}</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingComponent;
