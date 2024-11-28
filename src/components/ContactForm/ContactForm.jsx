import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    goals: '',
    budgetMin: '',
    budgetMax: '',
    audience: '',
    timeline: '',
    technologies: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://tetoncode.com/send', formData); // Use live endpoint
      setStatusMessage('Your message was sent successfully!');
      console.log('Email sent:', response.data);
    } catch (error) {
      setStatusMessage('There was an error sending your message.');
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Your Name
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Business Name
          <input type="text" name="business" value={formData.business} onChange={handleChange} />
        </label>
        <label>
          Email Address
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Phone Number:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
        </label>
        <label>
          Briefly describe your goals you'd like to acheive with Teton Code
          <textarea name="goals" value={formData.goals} onChange={handleChange} required />
        </label>
        <label>
          Budget (Min):
          <input type="number" name="budgetMin" value={formData.budgetMin} onChange={handleChange} />
        </label>
        <label>
          Budget (Max):
          <input type="number" name="budgetMax" value={formData.budgetMax} onChange={handleChange} />
        </label>
        <label>
         Who is your Target Audience?
          <input type="text" name="audience" value={formData.audience} onChange={handleChange} />
        </label>
        <label>
          What is your Project Timeline?
          <input type="text" name="timeline" value={formData.timeline} onChange={handleChange} />
        </label>
        <label>
          Do you have any specific Technologies in mind?
          <textarea name="technologies" value={formData.technologies} onChange={handleChange} />
        </label>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      <p className="status-message">{statusMessage}</p>
    </div>
  );
};

export default ContactForm;
