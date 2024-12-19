import React from 'react';
import './PortfolioSection.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import images for the projects (make sure these paths are correct)
import photoDesktop from '../../assets/photoDesktop.jpg';
import photoMobile from '../../assets/photoMobile.jpg';
import almaDesktop from '../../assets/almaDesktop.jpg';
import almaMobile from '../../assets/almaMobile.jpg';
import skylineDesktop from '../../assets/skylineDesktop.jpg';
import skylineMobile from '../../assets/skylineMobile.jpg';

const PortfolioSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,  // Trigger animation only once when it enters the viewport
    threshold: 0.2,     // Trigger when 50% of the section is visible
  });

  const projects = [
    {
      title: 'Gabriels Photo',
      desktopImage: photoDesktop,
      mobileImage: photoMobile,
      description: 'Custom React website showcasing photography portfolio.',
      website: 'https://gabrielsphoto.com',
    },
    {
      title: 'Alterations By Alma',
      desktopImage: almaDesktop,
      mobileImage: almaMobile,
      description: 'E-commerce website with integrated WooCommerce for product sales.',
      website: 'https://alterationsbyalma.com',
    },
    {
      title: 'Skyline Painting',
      desktopImage: skylineDesktop,
      mobileImage: skylineMobile,
      description: 'React website for a painting company, showcasing services and portfolio.',
      website: 'https://skylinepainting27.com',
    },
  ];
  const handleButtonClick = (website) => {
    window.open(website, '_blank');  // Open the link in a new tab
  };
  return (
    <section className="portfolio" ref={ref}>
      <h2>Our Work</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}  // Start below (y: 50)
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}  // Slide up when in view
            transition={{ duration: 0.7, delay: index * 0.3 }}  // Sequential slide-in
          >
            {/* Slide-in animation applied to each project */}
            <motion.div
              className="project-content"
              initial={{ opacity: 0, y: 30 }}  // Slight offset for each individual content
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}  // Slide up when in view
              transition={{ duration: 0.7, delay: index * 0.3 }}  // Sequential animation
            >
              <h3>{project.title}</h3>
              <div
                className="images"
                style={{ backgroundImage: `url(${project.desktopImage})` }}
              >
                <img
                  className="mobile-img"
                  src={project.mobileImage}
                  alt={`${project.title} Mobile`}
                />
              </div>
              <p>{project.description}</p>
              <button
                className="view-details"
                onClick={() => handleButtonClick(project.website)}
              >
                Visit Website
              </button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
