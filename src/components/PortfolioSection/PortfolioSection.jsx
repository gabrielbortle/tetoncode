import React from 'react';
import './PortfolioSection.css'

// Photography Screenshot 
import photoDesktop from '../../assets/photoDesktop.jpg'
import photoMobile from '../../assets/photoMobile.jpg'

// Alterations screenshot
import almaDesktop from '../../assets/almaDesktop.jpg'
import almaMobile from '../../assets/almaMobile.jpg'

// Skyline Screenshots
import skylineDesktop from '../../assets/skylineDesktop.jpg'
import skylineMobile from '../../assets/skylineMobile.jpg'

const PortfolioSection = () => {
  const projects = [
    {
      title: 'Photography Portfolio',
      desktopImage: photoDesktop,
      mobileImage: photoMobile,
      description: 'Custom React website showcasing photography portfolio with contact features.',
      link: '/projects/photography',
    },
    {
      title: 'Alterations Site',
      desktopImage: almaDesktop,
      mobileImage: almaMobile,
      description: 'E-commerce website with integrated WooCommerce for product sales.',
      link: '/projects/alterations',
    },
    {
      title: 'Painting Company Website',
      desktopImage: skylineDesktop,
      mobileImage: skylineMobile,
      description: 'React website for a painting company, showcasing services and portfolio.',
      link: '/projects/painting',
    },
  ];

  return (
    <section className="portfolio">
  <h2>Our Work</h2>
  <div className="portfolio-grid">
    {projects.map((project, index) => (
      <div className="project-card" key={index}>
        <h3>{project.title}</h3>
        <div
          className="images"
          style={{ backgroundImage: `url(${project.desktopImage})` }}
        >
          <img className="mobile-img" src={project.mobileImage} alt={`${project.title} Mobile`} />
        </div>
        <p>{project.description}</p>
        <a href={project.link} className="view-details">View Details</a>
      </div>
    ))}
  </div>
</section>

  );
};

export default PortfolioSection;
