import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faWordpress, faShopify } from '@fortawesome/free-brands-svg-icons';
import './Technologies.css'

const Technologies = () => {
  return (
    <section className="technologies">
      <h2>Technologies We Use</h2>
      <p>We work with a variety of technologies to build dynamic and functional websites.</p>
      <div className="tech-list">
        <div className="tech-item">
          <FontAwesomeIcon icon={faHtml5} size="5x" />
          <h3>HTML5</h3>
          <p>The backbone of any web page, ensuring a semantic structure and accessibility.</p>
        </div>
        <div className="tech-item">
          <FontAwesomeIcon icon={faCss3Alt} size="5x" />
          <h3>CSS3</h3>
          <p>Styling websites with modern layouts, animations, and responsiveness.</p>
        </div>
        <div className="tech-item">
          <FontAwesomeIcon icon={faJs} size="5x" />
          <h3>JavaScript</h3>
          <p>Bringing interactivity and dynamic features to web pages with JS.</p>
        </div>
        <div className="tech-item">
          <FontAwesomeIcon icon={faReact} size="5x" />
          <h3>React</h3>
          <p>Building fast, interactive UIs with React's component-based structure.</p>
        </div>
        <div className="tech-item">
          <FontAwesomeIcon icon={faWordpress} size="5x" />
          <h3>WordPress</h3>
          <p>Creating flexible and SEO-friendly websites with Headless WordPress CMS.</p>
        </div>
        <div className="tech-item">
          <FontAwesomeIcon icon={faShopify} size="5x" />
          <h3>Shopify</h3>
          <p>Building robust e-commerce solutions with Shopify for growing businesses.</p>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
