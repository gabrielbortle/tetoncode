import React from 'react';
import CustomHero from '../components/CustomHero/CustomHero';
import CustomFeatures from '../components/Features/CustomFeatures';
import Technologies from '../components/Technologies/Technologies';
import { faCode } from '@fortawesome/free-solid-svg-icons'; // Import the icon
import { Helmet } from 'react-helmet';  // Import React Helmet for SEO
import PricingComponent from '../components/PricingComponent/PricingComponent';

const CustomWeb = () => {
  return (
    <div>
      <Helmet>
        <title>Custom Web Development - Teton Code</title>
        <meta 
          name="description" 
          content="Teton Code offers high-quality custom web development services to create unique websites tailored to your business needs." 
        />
        <meta 
          property="og:title" 
          content="Custom Web Development - Teton Code" 
        />
        <meta 
          property="og:description" 
          content="Get a custom-built website that suits your business with Teton Code’s web development services." 
        />
        <meta 
          property="og:image" 
          content="/images/TetonCode.png"  // Path to logo in public folder
        />
        <meta 
          property="og:url" 
          content="https://www.tetoncode.com/custom-web-development" 
        />
        <meta property="og:type" content="website" />

        {/* Structured Data (JSON-LD) for Schema Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Service",
              "serviceType": "Custom Web Development",
              "provider": {
                "@type": "Organization",
                "name": "Teton Code",
                "url": "https://www.tetoncode.com",
                "logo": "/images/TetonCode.png"
              },
              "description": "Custom web development services tailored to the needs of small businesses.",
              "offers": {
                "@type": "Offer",
                "url": "https://www.tetoncode.com/custom-web-development",
                "priceCurrency": "USD",
                "price": "5000",  // Add the price or price range if applicable
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "USD",
                  "price": "5000",
                  "valueAddedTaxIncluded": "false"
                }
              }
            }
          `}
        </script>
      </Helmet>

      <CustomHero
        title="Custom Web Development"
        subtitle="Tailored websites built to meet your unique business needs."
        ctaText="Get Started"
        ctaLink="/contact"
        icon={faCode} // Pass the icon as a prop
      />

      <CustomFeatures />
      <Technologies />

      <PricingComponent />
    </div>
  );
};

export default CustomWeb;
