import React from 'react';
import CustomHero from '../components/CustomHero/CustomHero'; // Importing the CustomHero component
import { faServer } from '@fortawesome/free-solid-svg-icons'; // Server icon for hosting services
import Plans from '../components/Plans/Plans';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import { Helmet } from 'react-helmet'; // Import React Helmet for SEO

const WebHosting = () => {
  return (
    <div>
      <Helmet>
        <title>Reliable Web Hosting Solutions - Teton Code</title>
        <meta 
          name="description" 
          content="Teton Code offers reliable and secure web hosting services to ensure your website runs smoothly, with fast performance and high uptime." 
        />
        <meta 
          property="og:title" 
          content="Reliable Web Hosting Solutions - Teton Code" 
        />
        <meta 
          property="og:description" 
          content="Explore our reliable and secure web hosting services designed to keep your website fast, secure, and always online." 
        />
        <meta 
          property="og:image" 
          content="/images/TetonCode.png"  // Path to logo in public folder
        />
        <meta 
          property="og:url" 
          content="https://www.tetoncode.com/web-hosting" 
        />
        <meta property="og:type" content="website" />

        {/* Structured Data (JSON-LD) for Schema Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Service",
              "serviceType": "Web Hosting",
              "provider": {
                "@type": "Organization",
                "name": "Teton Code",
                "url": "https://www.tetoncode.com",
                "logo": "/images/TetonCode.png"
              },
              "description": "Reliable and secure web hosting services that ensure fast performance, high uptime, and seamless management.",
              "offers": {
                "@type": "Offer",
                "url": "https://www.tetoncode.com/web-hosting",
                "priceCurrency": "USD",
                "price": "200",  // Example price for hosting service, adjust accordingly
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "USD",
                  "price": "200",
                  "valueAddedTaxIncluded": "false"
                }
              }
            }
          `}
        </script>
      </Helmet>

      {/* Using CustomHero for Web Hosting service */}
      <CustomHero
        title="Reliable Web Hosting Solutions"
        subtitle="Our hosting services ensure your website is fast, secure, and always online. We offer seamless, managed solutions for your business."
        ctaText="Get Started"
        ctaLink="/contact" // CTA Link to contact page or service inquiry
        icon={faServer} // Using a server icon for the hosting section
      />
      
      {/* Why us */}
      <WhyChooseUs />

      {/* Hosting plans */}
      <Plans />
    </div>
  );
};

export default WebHosting;
