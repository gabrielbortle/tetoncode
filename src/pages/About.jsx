import React from 'react';
import CustomHero from '../components/CustomHero/CustomHero'; // Adjust path as needed
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import '../components/AboutHero/AboutHero.css'; // Import CSS
import AboutHero from '../components/AboutHero/AboutHero';
import AboutSection from '../components/AboutSection/AboutSection';
import WhyUs from '../components/WhyUs/WhyUs';
import { Helmet } from 'react-helmet'; // Import React Helmet for SEO

const About = () => {
  return (
    <div className="about-page">
      <Helmet>
        <title>About Us - Teton Code</title>
        <meta 
          name="description" 
          content="Learn about Teton Code, a front-end web development company based in Jackson, Wyoming. Discover our mission, team, and values that drive us to create exceptional websites." 
        />
        <meta 
          property="og:title" 
          content="About Us - Teton Code" 
        />
        <meta 
          property="og:description" 
          content="Get to know the team at Teton Code and learn about our commitment to delivering high-quality front-end web development services." 
        />
        <meta 
          property="og:image" 
          content="/images/TetonCode.png"  // Path to logo in public folder
        />
        <meta 
          property="og:url" 
          content="https://www.tetoncode.com/about" 
        />
        <meta property="og:type" content="website" />

        {/* Structured Data (JSON-LD) for Schema Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "Teton Code",
              "url": "https://www.tetoncode.com",
              "logo": "/images/TetonCode.png",
              "description": "Teton Code is a front-end web development agency based in Jackson, Wyoming, specializing in creating custom websites for small businesses.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Address Line",
                "addressLocality": "Jackson",
                "addressRegion": "WY",
                "postalCode": "ZIP Code",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "telephone": "+1-208-270-4338",
                "areaServed": "US",
                "availableLanguage": "English"
              }
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <AboutHero />

      {/* About Section */}
      <AboutSection />

      {/* Why Us Section */}
      <WhyUs />
    </div>
  );
};

export default About;
