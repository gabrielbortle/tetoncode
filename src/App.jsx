import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ScrollToTop from './components/ScrollToTop/ScrollToTop'; // Import the ScrollToTop component
import Home from './pages/Home';
import Services from './components/Services/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import CustomWeb from './pages/CustomWeb'; // Import CustomWeb page
import UiDesign from './pages/UiDesign';
import WebHosting from './pages/WebHosting';
import './App.css';
import WebMaintenance from './pages/WebMaintenance';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop /> {/* Add the ScrollToTop component here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/custom-web" element={<CustomWeb />} /> {/* New Route */}
        <Route path="/ui-design" element={<UiDesign />} />
        <Route path="/web-hosting" element={<WebHosting />} />
        <Route path="/web-maintenance" element={<WebMaintenance />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
