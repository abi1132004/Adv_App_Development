import React from 'react';
// import { connect } from 'react-redux';
import './Contactus.css';

const Contactus = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name"  />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email"  />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" ></textarea>
        </div>
        <button type="submit">Send Message</button>
        <button className="contactform"><a href= "mailto:727721euit004@skcet.ac.in ? {subject} = {subject}" >Email us </a></button>
      </form>
    </div>
  );
};
export default Contactus;