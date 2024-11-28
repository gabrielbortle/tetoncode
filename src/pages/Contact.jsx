import React from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // FontAwesome envelope icon
import ContactHero from '../components/ContactHero/ContactHero';
import ContactForm from '../components/ContactForm/ContactForm';
import { Helmet } from 'react-helmet'; // Import React Helmet for SEO

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us - Teton Code</title>
        <meta 
          name="description" 
          content="Get in touch with Teton Code for your web development needs. Whether you're looking for a new website, maintenance services, or a custom solution, we're here to help!" 
        />
        <meta 
          property="og:title" 
          content="Contact Us - Teton Code" 
        />
        <meta 
          property="og:description" 
          content="Reach out to Teton Code for web development, UI/UX design, and hosting services. We're here to help your business succeed online." 
        />
        <meta 
          property="og:image" 
          content="/images/TetonCode.png" // Path to logo in public folder
        />
        <meta 
          property="og:url" 
          content="https://www.tetoncode.com/contact" 
        />
        <meta property="og:type" content="website" />

        {/* Structured Data (JSON-LD) for Schema Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "ContactPage",
              "mainEntity": {
                "@type": "Organization",
                "name": "Teton Code",
                "url": "https://www.tetoncode.com",
                "logo": "/images/TetonCode.png",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "Customer Service",
                  "telephone": "+1-208-270-4338",
                  "email": "contact@tetoncode.com",  // Replace with your email address
                  "areaServed": "US",
                  "availableLanguage": "English"
                }
              }
            }
          `}
        </script>
      </Helmet>

      {/* Custom Hero Component */}
      <ContactHero />

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

export default Contact;
