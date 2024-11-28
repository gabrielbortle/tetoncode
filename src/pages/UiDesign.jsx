import React from 'react';
import CustomHero from '../components/CustomHero/CustomHero'; // Import CustomHero Component
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'; // New icon for UI/UX Design
import '../components/CustomHero/UiDesign.css'; // Import CSS
import WhatWeOffer from '../components/WhatWeOffer/WhatWeOffer';
import { Helmet } from 'react-helmet'; // Import React Helmet for SEO

const UiDesign = () => {
  return (
    <div>
      <Helmet>
        <title>UI/UX Design Services - Teton Code</title>
        <meta 
          name="description" 
          content="Teton Code specializes in creating user-friendly interfaces and enhancing user experiences with intuitive layouts that engage and inspire." 
        />
        <meta 
          property="og:title" 
          content="UI/UX Design Services - Teton Code" 
        />
        <meta 
          property="og:description" 
          content="We craft seamless and engaging user experiences through expert UI/UX design services that cater to your business's needs." 
        />
        <meta 
          property="og:image" 
          content="/images/TetonCode.png"  // Path to logo in public folder
        />
        <meta 
          property="og:url" 
          content="https://www.tetoncode.com/ui-ux-design" 
        />
        <meta property="og:type" content="website" />

        {/* Structured Data (JSON-LD) for Schema Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Service",
              "serviceType": "UI/UX Design",
              "provider": {
                "@type": "Organization",
                "name": "Teton Code",
                "url": "https://www.tetoncode.com",
                "logo": "/images/TetonCode.png"
              },
              "description": "Expert UI/UX design services specializing in creating user-friendly interfaces and enhancing user experiences.",
              "offers": {
                "@type": "Offer",
                "url": "https://www.tetoncode.com/ui-ux-design",
                "priceCurrency": "USD",
                "price": "4000",  // Add the price or price range if applicable
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "USD",
                  "price": "4000",
                  "valueAddedTaxIncluded": "false"
                }
              }
            }
          `}
        </script>
      </Helmet>

      {/* Using CustomHero with appropriate props for UI/UX Design */}
      <CustomHero
        title="UI/UX Design Services"
        subtitle="We specialize in creating user-friendly interfaces and enhancing user experiences, crafting intuitive layouts that engage and inspire."
        ctaText="Contact Us"
        ctaLink="/contact" // CTA Link to contact page
        icon={faLightbulb} // Pass the icon as a prop
        className="ui-design-hero"  // Add this class for specific styling
      />

      <WhatWeOffer />
    </div>
  );
};

export default UiDesign;
