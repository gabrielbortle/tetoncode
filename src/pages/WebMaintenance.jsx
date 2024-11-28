import React from 'react';
import MaintenanceBenefits from '../components/MaintenanceBenefits/MaintenanceBenefits';
import { faWrench } from '@fortawesome/free-solid-svg-icons'; // Icon for maintenance
import CustomHero from '../components/CustomHero/CustomHero'; // Importing from the correct path
import MaintenanceNeeds from '../components/MaintenanceNeeds/MaintenanceNeeds';
import { Helmet } from 'react-helmet'; // Import React Helmet for SEO

const WebMaintenance = () => {
  return (
    <div>
      <Helmet>
        <title>Web Maintenance Services - Teton Code</title>
        <meta 
          name="description" 
          content="Teton Code offers professional web maintenance services to ensure your website runs smoothly, with security updates, performance optimizations, and more." 
        />
        <meta 
          property="og:title" 
          content="Web Maintenance Services - Teton Code" 
        />
        <meta 
          property="og:description" 
          content="Keep your website in top shape with our expert maintenance services, including regular updates, security checks, and performance improvements." 
        />
        <meta 
          property="og:image" 
          content="/images/TetonCode.png"  // Path to logo in public folder
        />
        <meta 
          property="og:url" 
          content="https://www.tetoncode.com/web-maintenance" 
        />
        <meta property="og:type" content="website" />

        {/* Structured Data (JSON-LD) for Schema Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Service",
              "serviceType": "Web Maintenance",
              "provider": {
                "@type": "Organization",
                "name": "Teton Code",
                "url": "https://www.tetoncode.com",
                "logo": "/images/TetonCode.png"
              },
              "description": "Professional web maintenance services to ensure your website stays secure, optimized, and functional at all times.",
              "offers": {
                "@type": "Offer",
                "url": "https://www.tetoncode.com/web-maintenance",
                "priceCurrency": "USD",
                "price": "150",  // Example price for maintenance service, adjust accordingly
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "USD",
                  "price": "150",
                  "valueAddedTaxIncluded": "false"
                }
              }
            }
          `}
        </script>
      </Helmet>

      {/* Using CustomHero for Web Maintenance service */}
      <CustomHero
        title="Web Maintenance Services"
        subtitle="Keep your website running smoothly with our expert maintenance services."
        ctaText="Get in Touch"
        ctaLink="/contact"
        icon={faWrench} // FontAwesome icon
        style={{ backgroundImage: 'url(/path/to/your-image.jpg)', backgroundSize: 'cover' }} // Optional background style
      />
      
      {/* Maintenance Benefits */}
      <MaintenanceBenefits />

      {/* Maintenance Needs */}
      <MaintenanceNeeds />
    </div>
  );
};

export default WebMaintenance;
