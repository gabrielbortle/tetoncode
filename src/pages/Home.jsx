import React from 'react';
import { Helmet } from 'react-helmet';  // Import React Helmet for SEO
import Hero from '../components/Hero/Hero';  // Import Hero component from its folder
import Mission from '../components/MissionStatement/Mission';  // Import MissionStatement component from its folder
import Services from '../components/Services/Services';  // Import Services component from its folder

const Home = () => {
  return (
    <div>
      {/* SEO Elements with React Helmet */}
      <Helmet>
        <title>Home - Teton Code | Custom Web Development</title>
        <meta 
          name="description" 
          content="Teton Code provides custom web development services for small businesses in Jackson, WY. We specialize in high-quality, user-friendly websites." 
        />
        <meta 
          property="og:title" 
          content="Home - Teton Code | Custom Web Development" 
        />
        <meta 
          property="og:description" 
          content="Teton Code offers custom web development services tailored to your business needs, creating responsive and modern websites for local businesses." 
        />
        <meta 
          property="og:image" 
          content="/images/TetonCode.png" // Path to logo in public folder
        />
        <meta 
          property="og:url" 
          content="https://www.tetoncode.com" 
        />
        <meta property="og:type" content="website" />
        
        {/* Structured Data for Schema Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "Teton Code",
              "url": "https://www.tetoncode.com",
              "logo": "/images/TetonCode.png", // Path to logo in public folder
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-208-270-4338",
                "contactType": "customer service"
              }
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <Hero />

      {/* Mission Statement Section */}
      <Mission />

      {/* Services Section */}
      <Services />
    </div>
  );
};

export default Home;
